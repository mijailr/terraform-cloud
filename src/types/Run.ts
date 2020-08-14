import { TerraformCloudData, Relationship } from './TerraformCloudData'

export type Run = TerraformCloudData<RunAttributes> & {
  relationships: RunRelationship
}

interface RunRelationship {
  confirmedBy: Relationship
  createdBy: Relationship
  plan: Relationship
}

interface RunAttributes {
  autoApply: boolean
  createdAt: Date
  errorText: null | string
  hasChanges: boolean
  isDestroy: boolean
  message: string
  source: string
  status: string
  terraformVersion: string
}
