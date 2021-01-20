import { Params, TerraformCloudData } from './TerraformCloudData'

export type StateVersionRequest = Params<'state-version', StateVersionRequestAttributes> & {
  relationships: StateVersionRelationship
}

export interface StateVersionRelationData {
  id: string
  type: string
}

export interface StateVersionRelationship {
  run: {
    data: {
      type: string
    }
  }
  outputs: {
    data: StateVersionRelationData[]
  }
  createdby: {
    data: StateVersionRelationData[]
    links: {
      related: string
    }
  }
}

export interface StateVersionRequestAttributes {
  serial: number
  md5: string
  lineage: string
  state: string
}

export interface StateVersionIncludedOutput {
  id: string
  type: string
  attributes: {
    name: string
    sensitive: boolean
    type: string
    value: string
  }
}

export type StateVersion = TerraformCloudData<StateVersionAttributes> & {
  included?: StateVersionIncludedOutput[]
}

export interface StateVersionAttributes {
  vcsCommitSha?: string
  vcsCommitUrl?: string
  createdAt: Date
  hostedStateDownloadUrl: string
  serial: number
}
