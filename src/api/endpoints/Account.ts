import { AxiosInstance } from 'axios'
import { User, UserUpdatePassword, UserUpdateInfo } from '../..'
import Request from './Request'

export default class Account extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async getDetails(): Promise<User> {
    const path = '/account/details'
    return await this.get<User>(path)
  }

  async getUser(userId: string): Promise<User> {
    const path = `/users/${userId}`
    return await this.get<User>(path)
  }

  async update(request: UserUpdateInfo): Promise<User> {
    const path = '/account/update'
    return await this.patch<User, UserUpdateInfo>(path, request)
  }

  async changePassword(request: UserUpdatePassword): Promise<User> {
    const path = '/account/password'
    return await this.patch<User, UserUpdatePassword>(path, request)
  }
}
