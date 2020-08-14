import { AxiosInstance } from 'axios'
import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import { Account, Plan, Run } from './types'

export default class TerraformCloudApi extends EventEmitter {
  private readonly client: AxiosInstance

  constructor(apiKey: string) {
    super()
    this.client = terraformCloudApiClient(apiKey)
  }

  async getAccount(): Promise<Account> {
    const path = '/account/details'
    return await this.get<Account>(path)
  }

  async getPlan(planId: string): Promise<Plan> {
    const path = `/plans/${planId}`
    return await this.get<Plan>(path)
  }

  async getRun(runId: string): Promise<Run> {
    const path = `/runs/${runId}`
    return await this.get<Run>(path)
  }

  async getRuns(workspaceId: string): Promise<Run[]> {
    const path = `/workspaces/${workspaceId}/runs`
    return await this.get<Run[]>(path)
  }

  private async get<Res>(path: string): Promise<Res> {
    const response = await this.client.get<Res>(path)
    return response.data
  }
}
