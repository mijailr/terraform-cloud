import { AxiosInstance } from 'axios'
import { Run } from '..'
import { Request } from './Request'
import { RunRequest, RunApplyRequest } from '../types/Run'

export default class Runs extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async getRuns(workspaceId: string, number = 1, size = 20): Promise<Run[]> {
    const path = `/workspaces/${workspaceId}/runs?page[${number}]&page[${size}]`
    return await this.get<Run[]>(path)
  }

  async getRun(runId: string): Promise<Run> {
    const path = `/runs/${runId}`
    return await this.get<Run>(path)
  }

  async create(request: RunRequest): Promise<Run> {
    const path = '/runs'
    return await this.post<Run, RunRequest>(path, request)
  }

  async apply(runId: string, request: RunApplyRequest = { comment: null }): Promise<void> {
    const path = `/runs/${runId}/actions/apply`
    return await this.post<void, RunApplyRequest>(path, request)
  }
}
