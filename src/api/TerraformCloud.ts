import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './endpoints/Account'
import Plans from './endpoints/Plans'
import Runs from './endpoints/Runs'

export class TerraformCloud extends EventEmitter {
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
