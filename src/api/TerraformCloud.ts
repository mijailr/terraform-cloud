import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './endpoints/Account'
import Plans from './endpoints/Plans'
import Runs from './endpoints/Runs'
import Workspaces from './endpoints/Workspaces'
import ConfigurationVersion from './endpoints/ConfigurationVersion'

export class TerraformCloud extends EventEmitter {
  public Account: Account
  public Plans: Plans
  public Runs: Runs
  public Workspaces: Workspaces
  public ConfigurationVersion: ConfigurationVersion

  constructor(apiKey: string) {
    super()
    const client = terraformCloudApiClient(apiKey)
    this.Account = new Account(client)
    this.Plans = new Plans(client)
    this.Runs = new Runs(client)
    this.Workspaces = new Workspaces(client)
    this.ConfigurationVersion = new ConfigurationVersion(client)
  }
}
