import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './Account'
import Plans from './Plans'
import Runs from './Runs'

export default class TerraformCloud extends EventEmitter {
  public Account: Account
  public Plans: Plans
  public Runs: Runs

  constructor(apiKey: string) {
    super()
    const client = terraformCloudApiClient(apiKey)
    this.Account = new Account(client)
    this.Plans = new Plans(client)
    this.Runs = new Runs(client)
  }
}
