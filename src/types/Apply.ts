import { TerraformCloudData, Data } from './TerraformCloudData'

export type Apply = TerraformCloudData<ApplyAttributes> & {
  relationships: ApplyRelationship
}

export type ApplyLogs = {
  firstIndex: number
  lastIndex: number
  size: number
  data: string
}

export type StateVersionsRelationship = {
  data: Data[]
}

export interface ApplyRelationship {
  stateVersions: StateVersionsRelationship
}

export interface ApplyTimestamps {
  queuedAt: Date
  startedAt: Date
  finishedAt: Date
}

export interface ApplyAttributes {
  executionDetails: {
    mode: 'remote'
  }
  status: 'pending' | 'managed_queued' | 'queued' | 'running' | 'errored' | 'canceled' | 'finished' | 'unreachable'
  statusTimestamps: ApplyTimestamps
  logReadUrl: string
  resourceAdditions: number
  resourceChanges: number
  resourceDestructions: number
}
