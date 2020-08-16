import { TerraformCloudData, Relationship } from './TerraformCloudData'

export type Plan = TerraformCloudData<PlanAttributes> & {
  relationships: PlanRelationship
}

export interface PlanRelationship {
  stateVersions: Relationship
}

export interface PlanAttributes {
  hasChanges: boolean
  logReadUrl: string
  resourceAdditions: number
  resourceChanges: number
  resourceDestructions: number
  status: 'pending' | 'managed_queued' | 'queued' | 'running' | 'errored' | 'canceled' | 'finished' | 'unreachable'
  statusTimestamps: PlanTimestamps
}

export interface PlanTimestamps {
  finishedAt: Date
  pendingAt: Date
  queuedAt: Date
  startedAt: Date
}
