import axios from "axios";
import { LocalStorage } from "../hooks/utils/classes";

const getHeaders = () => ({
    "x-authorization-token": localStorage.getItem('token'),
    "x-device-type": "web",
    "x-device-id": "123456789",
    "ngrok-skip-browser-warning": "69420",
  });

  export function apiFunction( method, endpoint, params, data) {
    console.log('params' , params)
    return new Promise((resolve, reject) => {
      axios({
        method,
        // baseURL:"http://ec2-35-77-62-86.ap-northeast-1.compute.amazonaws.com:9999/api/",
        url:"http://localhost:9999/api" + endpoint,
        headers: {
          ...(getHeaders()),
          "x-device-type": "web",
        },
        params,
        data,
      })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        });
      // } else {
      //   reject("Action not allowed for guest user.");
      // }
    });
  }