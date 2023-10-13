import { create } from "zustand";
import HomePageApi from "../../apis/managers/homePageApi";

export const homePageSlice = create((set, get) => ({
  hackathons: null,
  loading: false,
  error: false,

  resetHackathons: () => {
    set((state) => {
      state.hackathons = [];
    });
  },

  fetchHackathons: async (eventTime) => {
    const res = await HomePageApi.fetchHackathons(eventTime);
    console.log("res", res);
    set({ loading: false });
    set({ error: false });
    set({
      hackathons: res.data, //res?.data?.user,
    });
  },
}));
