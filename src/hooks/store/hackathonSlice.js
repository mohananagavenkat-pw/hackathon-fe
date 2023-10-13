import { create } from 'zustand';
import HackathonApi from '../../apis/managers/hackathonPageApi';

export const hackathonSlice = create((set, get) => ({
  roundList: [],

  getRoundList: async (hackathonId) => {
    const res = await HackathonApi.getRounds(hackathonId);
    set({ loading: false })
    set({
      roundList: res.data,
    })
  }
}))