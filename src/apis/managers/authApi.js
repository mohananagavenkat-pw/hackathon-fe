import { get } from "../client"

class AuthApi {
  static async fetchProfile(userName) {
    return await get(`/user/details/${userName}`)
  }
}

export default AuthApi