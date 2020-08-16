import { AxiosInstance } from 'axios'
import { Run } from '../..'
import Request from './Request'
import { RunRequest, RunActionRequest, RunAction } from '../../types/Run'

export default class Runs extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async list(workspaceId: string, number = 1, size = 20): Promise<Run[]> {
    const path = `/workspaces/${workspaceId}/runs?page[${number}]&page[${size}]`
    return await this.get<Run[]>(path)
  }

  async show(runId: string): Promise<Run> {
    const path = `/runs/${runId}`
    return await this.get<Run>(path)
  }

  async create(request: RunRequest): Promise<Run> {
    const path = '/runs'
    return await this.post<Run, RunRequest>(path, request)
  }

  async action(action: RunAction, runId: string, request?: RunActionRequest): Promise<void> {
    const path = `/runs/${runId}/actions/${action}`
    return await this.post<void, RunActionRequest>(path, request || {})
  }
}
