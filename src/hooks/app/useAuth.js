import { authSlice } from "../store/authSlice"
import { useShallow } from 'zustand/react/shallow'
const useAuth = () => {
  const state = authSlice(useShallow(
    (state) => ({
      token: state.token,
      user: state.user,
      isAuthenticated: true,//state.isAuthenticated,
      isLoading: state.isLoading,

      setToken: state.setToken,
      fetchProfile: state.fetchProfile
    }),
    // shallow
  ))
  return state
}
export default useAuth