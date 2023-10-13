import { create } from 'zustand';
import AuthApi from '../../apis/managers/authApi';
import { LocalStorage } from '../utils/classes';
import { testFunction } from '../utils/genericFunction';

export const authSlice = create((set,get) => ({
  isAuthenticated: true,
  token: null,
  user: null,
  loading: false,
  isAdmin: null,
  userDetails: null,
  setToken: (token) => {
    set((state) => {
      state.token = !token ? null : token
      state.isAuthenticated = !!token
    })
  },

  fetchProfile: async () => {
    const res = await AuthApi.fetchProfile();
    set({ loading: false })   
    set({
      user: { name: "dummy name" },//res?.data?.user,
      isAuthenticated: true,
    })
  },

  signupFunction: (resp) => {
    set({loading: false})
    set({isAdmin: resp?.isAdmin})
    set({
      token:resp.token
    })
    LocalStorage.set("token" , resp.token)
    console.log("signUp" , resp)
  }
}))