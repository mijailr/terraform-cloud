import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { VERSION } from '../version'

const terraformCloudApiClient = (apiKey: string): AxiosInstance => {
  const apiUrl = 'https://app.terraform.io/api/v2'
  const client: AxiosInstance = axios.create({ baseURL: apiUrl })
  client.interceptors.request.use((req: AxiosRequestConfig) => {
    req.headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/vnd.api+json',
      'User-Agent': `terraform-cloud/${VERSION}`,
    }
    return req
  })

  client.interceptors.response.use((res: AxiosResponse) => camelcaseKeys(res.data))

  return client
}

export default terraformCloudApiClient
