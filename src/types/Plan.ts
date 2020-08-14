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
  status: string
  statusTimestamps: PlanTimestamps
}

interface PlanTimestamps {
  finishedAt: Date
  pendingAt: Date
  queuedAt: Date
  startedAt: Date
}
