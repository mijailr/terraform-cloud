import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const terraformCloudApiClient = (apiKey: string): AxiosInstance => {
  const apiUrl = 'https://app.terraform.io/api/v2'
  const client: AxiosInstance = axios.create({ baseURL: apiUrl })
  client.interceptors.request.use((req: AxiosRequestConfig) => {
    req.headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    }
    return req
  })

  client.interceptors.response.use((res: AxiosResponse) => res.data)

  return client
}

export default terraformCloudApiClient
