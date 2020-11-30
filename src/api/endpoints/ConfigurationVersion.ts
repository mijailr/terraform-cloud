import Request from './Request'
import { ConfigurationVersion, ConfigurationVersionRequest } from '../../types'
import axios, { AxiosInstance } from 'axios'

export default class ConfigurationVersions extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  create(workspaceId: string, request?: ConfigurationVersionRequest): Promise<ConfigurationVersion> {
    const path = `/workspaces/${workspaceId}/configuration-versions`
    return this.post<ConfigurationVersion, ConfigurationVersionRequest>(
      path,
      request || { data: { attributes: {}, type: 'configuration-version' } }
    )
  }

  async upload(url: string, data: any): Promise<boolean> {
    const result = await axios.put(url, data)
    console.log({ result })
    return true
  }
}
