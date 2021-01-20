import { AxiosInstance } from 'axios'
import Request from './Request'
import { Workspace, WorkspaceRequest } from '../../types'

export default class Workspaces extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  showByName(organizationName: string, workspaceName: string): Promise<Workspace> {
    const path = `/organizations/${organizationName}/workspaces/${workspaceName}`
    return this.get<Workspace>(path)
  }

  show(workspaceId: string): Promise<Workspace> {
    const path = `/workspaces/${workspaceId}`
    return this.get<Workspace>(path)
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
