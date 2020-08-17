import { AxiosInstance } from 'axios'
import Request from './Request'
import { Workspace, WorkspaceCreate } from '../../types'

export default class Workspaces extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  create(organizationName: string, request: WorkspaceCreate): Promise<Workspace> {
    const path = `/organizations/${organizationName}/worspaces`
    return this.post<Workspace, WorkspaceCreate>(path, request)
  }
}
