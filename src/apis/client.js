/** @format */

import axios from "axios";
// import Router from "next/router";
// import { useAuthStore } from "../app/authStore";
// import { getCookie, hasCookie, removeCookies, setCookie } from "../lib/cookies";
import useAuth from "../hooks/app/useAuth";
import { LocalStorage } from "../hooks/utils/classes";

class ApiClient {
	constructor() {
		this._get = this._get.bind(this);
		this._post = this._post.bind(this);
		this._patch = this._patch.bind(this);
		this._put = this._put.bind(this);
		this._delete = this._delete.bind(this);
	}

	_getClient(baseURL, cookieToken) {
		console.log("NEXT_PUBLIC_BACKEND_URL", process.env.NEXT_PUBLIC_BACKEND_URL);
		const apiClient = axios.create({
			baseURL:
				// baseURL ||
				// process.env.NEXT_PUBLIC_BACKEND_URL,
				// "https://ff3f-2409-40f2-2d-e35-b488-c776-66b-dbd6.ngrok-free.app/api/",
				"http://ec2-35-77-62-86.ap-northeast-1.compute.amazonaws.com:9999/api",
		});

		apiClient.interceptors.request.use(
			async (config) => {
				const hasCookieToken = LocalStorage.get("token"); //hasCookie("token");
				const _auth = LocalStorage.get("_auth");
				const token =
					"eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHctc2tpbGxzLWV4cGVyaW1lbnRzIiwiYXVkIjoicHctc2tpbGxzLWV4cGVyaW1lbnRzIiwiYXV0aF90aW1lIjoxNjk3MTgzODY0LCJ1c2VyX2lkIjoidkRiazltbmVXVFh4S1ZZZ2hndGZFcnI3bzFyMSIsInN1YiI6InZEYms5bW5lV1RYeEtWWWdoZ3RmRXJyN28xcjEiLCJpYXQiOjE2OTcxODM4NjQsImV4cCI6MTY5NzE4NzQ2NCwiZW1haWwiOiJkZW1vMDAwQGluZXVyb24uYWkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtbzAwMEBpbmV1cm9uLmFpIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fqXUlVUd5yOHL0pmRYnjKf2Aom-1OGocdebrI-USuQ3fEvKZ6x6AJ2krC4QCWrRGwzGZmEDzI42rPl0zKkeKQErLCdxgzCHdZY9FQLrdFcusZXnVdnLXaZsMemWjj0-Dpl9CKk0PonAFnVG1Nr7x9cdO7cK9lzlht3TcB3a_yorWOECzUAX7mU-w4XVgEJUjHY2NuqOLVloe0CXWl_VPoNdKEGGeMfH6Hx-7Z4bjYLnED9zGcRHQ3setmcL0IIFjKxyv8zxdIDjuytafdut5gSDtsNzFVcC1PXSx8UF7m1JpDVewjPDjXzJPB7KqxEbZ7lAAWXd0khWl4eO_sjA5Yg";
				// _auth?.state?.token;
				if (!hasCookieToken && token) {
					LocalStorage.set("token", token);
				}
				if ((cookieToken || token) && config.headers) {
					config.headers.Authorization = `Bearer ${cookieToken ?? token}`;
				}
				return config;
			},
			(err) => {
				return Promise.reject(err);
			},
		);

		apiClient.interceptors.response.use(
			async (response) => {
				return response.data;
			},
			(err) => {
				if (err.response) {
					if (err.response.status === 401) {
						useAuth.setState((state) => {
							state.isAuthenticated = false;
							state.token = null;
							state.user = null;
						});
						LocalStorage.remove("token");
						return [
							undefined,
							"Invalid token please authenticate first",
							err.response.data,
						];
					}

					if (!err.response?.data?.success) {
						return [undefined, err.response?.data?.message, err.response?.data];
					}
				}

				return [undefined, "Request config error", err.response?.data];
			},
		);

		return apiClient;
	}

	_get(url, config) {
		const get = this._getClient(undefined, config?.cookieToken).get(
			url,
			config,
		);
		return get;
	}

	_post(url, data, config) {
		console.log("sdsdsd 111111");
		const post = this._getClient().post(url, data, config);
		return post;
	}

	_patch(url, data, config) {
		const patch = this._getClient().patch(url, data, config);
		return patch;
	}

	_put(url, data, config) {
		const put = this._getClient().put(url, data, config);
		return put;
	}

	_delete(url, config) {
		const del = this._getClient().delete(url, config);
		return del;
	}

	_cancelTokenRequest() {
		let token;
		return async (method, url, data, headers) => {
			let authToken = LocalStorage.get("_auth");
			if (!authToken.state.token)
				return [undefined, "No token found", undefined];
			const cancelTokenClient = axios.create({
				baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
				headers: {
					Authorization: `Bearer ${authToken.state.token}`,
				},
			});
			if (token) {
				token.cancel();
			}

			token = axios.CancelToken.source();
			try {
				let response = await cancelTokenClient.request({
					method,
					url,
					headers,
					data,
					cancelToken: token.token,
				});
				return [response.data, undefined, undefined];
			} catch (error) {
				if (axios.isCancel(error)) {
					return [undefined, "Request cancelled", undefined];
				} else {
					return [undefined, "Request config error", undefined];
				}
			}
		};
	}
}

const Client = new ApiClient();
const get = Client._get;
const post = Client._post;
const patch = Client._patch;
const put = Client._put;
const del = Client._delete;
const cancelTokenRequest = Client._cancelTokenRequest();

export { get, post, patch, put, del, cancelTokenRequest };
