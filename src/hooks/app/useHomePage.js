import { homePageSlice } from "../store/homePageSlice";
import { useShallow } from "zustand/react/shallow";
const useHomePage = () => {
  const state = homePageSlice(
    useShallow((state) => ({
      hackathons: state.hackathons,
      setHackathon: state.setHackathon,
      resetHackathons: state.resetHackathons,
      fetchHackathons: state.fetchHackathons,
    }))
  );
  return state;
};
export default useHomePage;
