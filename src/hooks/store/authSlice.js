import { create } from 'zustand';
import AuthApi from '../../apis/managers/authApi';

export const authSlice = create((set) => ({
  isAuthenticated: true,
  token: null,
  user: null,
  loading: false,

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
  }
}))