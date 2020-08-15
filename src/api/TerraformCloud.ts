import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './Account'
import Plans from './Plans'

export default class TerraformCloud extends EventEmitter {
  public Account: Account
  public Plans: Plans

  constructor(apiKey: string) {
    super()
    const client = terraformCloudApiClient(apiKey)
    this.Account = new Account(client)
    this.Plans = new Plans(client)
  }
}
