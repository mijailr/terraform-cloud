import { AxiosInstance } from 'axios'
import Request from './Request'
import { Workspace, WorkspaceRequest } from '../../types'

export default class Workspaces extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  create(organizationName: string, request: WorkspaceRequest): Promise<Workspace> {
    const path = `/organizations/${organizationName}/workspaces`
    return this.post<Workspace, WorkspaceRequest>(path, request)
  }

  update(organizationName: string, workspaceId: string, request: WorkspaceRequest): Promise<Workspace> {
    const path = `/organizations/${organizationName}/workspaces/${workspaceId}`
    return this.patch<Workspace, WorkspaceRequest>(path, request)
  }
}
