import { AxiosInstance } from 'axios'
import { Plan } from '../..'
import Request from './Request'

export default class Plans extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async show(planId: string): Promise<Plan> {
    const path = `/plans/${planId}`
    return await this.get<Plan>(path)
  }

  async jsonOutput(planId: string): Promise<string> {
    const path = `/plans/${planId}/json-output`
    return await this.client.get(path)
  }
}
