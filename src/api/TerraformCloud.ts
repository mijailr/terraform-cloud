import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './Account'

export default class TerraformCloud extends EventEmitter {
  public Account: Account

  constructor(apiKey: string) {
    super()
    const client = terraformCloudApiClient(apiKey)
    this.Account = new Account(client)
  }
}
