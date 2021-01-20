import { AxiosInstance } from 'axios'
import { Apply, ApplyLogs } from '../..'
import Request from './Request'

export default class Applies extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async show(applyId: string): Promise<Apply> {
    const path = `/applies/${applyId}`
    return await this.get<Apply>(path)
  }

  async logs(applyId: string): Promise<ApplyLogs> {
    const apply = await this.show(applyId)
    return await this.client.get(apply.attributes.logReadUrl)
  }
}
