import { TerraformCloudData, Relationship } from './TerraformCloudData'

export type Plan = TerraformCloudData<PlanAttributes> & {
  relationships: PlanRelationship
}

interface PlanRelationship {
  stateVersions: Relationship
}

interface PlanAttributes {
  hasChanges: boolean
  logReadUrl: string
  resourceAdditions: number
  resourceChanges: number
  resourceDestructions: number
  status: 'pending' | 'managed_queued' | 'queued' | 'running' | 'errored' | 'canceled' | 'finished' | 'unreachable'
  statusTimestamps: PlanTimestamps
}

interface PlanTimestamps {
  finishedAt: Date
  pendingAt: Date
  queuedAt: Date
  startedAt: Date
}
