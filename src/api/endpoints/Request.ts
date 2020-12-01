import { AxiosInstance } from 'axios'

export default abstract class Request {
  constructor(protected client: AxiosInstance) {}
  protected async get<T>(path: string): Promise<T> {
    const response = await this.client.get<T>(path)
    return response.data
  }

  protected async patch<Entity, Request>(path: string, request: Request): Promise<Entity> {
    const response = await this.client.patch(path, request)
    return response.data
  }

  protected async post<Entity, Request>(path: string, request: Request): Promise<Entity> {
    const response = await this.client.post(path, request)
    return response.data
  }
}
