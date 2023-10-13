import { authSlice } from "../store/authSlice"
import { useShallow } from 'zustand/react/shallow'
import { hackathonSlice } from "../store/hackathonSlice"
const useHackathon = () => {
  const state = hackathonSlice(useShallow(
    (state) => ({
      roundList: state.roundList,
      getRoundList: state.getRoundList,

    }),
  ))
  return state
}
export default useHackathon