import Request from './Request'
import { StateVersion, StateVersionRequest } from '../../types'
import { AxiosInstance } from 'axios'

export default class StateVersions extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  create(workspaceId: string, request: StateVersionRequest): Promise<StateVersion> {
    const path = `/workspaces/${workspaceId}/state-versions`
    return this.post<StateVersion, StateVersionRequest>(path, request)
  }

  show(stateVersionId: string, includeOutputs = false): Promise<StateVersion> {
    const path = `/state-versions/${stateVersionId}${includeOutputs ? '?include=outputs' : ''}`
    return this.get<StateVersion>(path)
  }

  current(workspaceId: string, includeOutputs = false): Promise<StateVersion> {
    const path = `/workspaces/${workspaceId}/current-state-version`
    const params: { [key: string]: string } = {}
    if (includeOutputs) params.include = 'outputs'

    return this.client.get(path, { params })
  }
}
