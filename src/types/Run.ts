import { TerraformCloudData, Relationship, Type } from './TerraformCloudData'

export type Run = TerraformCloudData<RunAttributes> & {
  relationships: RunRelationship
}

export type RunApplyRequest = {
  comment: string | null
}

export type RunRequest = {
  data: {
    attributes: {
      'is-destroy'?: boolean
      message?: string
      'target-addrs'?: string[]
    }
    relationships: {
      workspace: {
        data: {
          id: string
          type: Type.Workspaces
        }
      }
      'configuration-version': {
        data: {
          id: string
          type: Type.ConfigurationVersions
        }
      }
    }
  }
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
  status:
    | 'pending'
    | 'plan_queued'
    | 'planning'
    | 'planned'
    | 'cost_estimating'
    | 'cost_estimated'
    | 'policy_checking'
    | 'policy_override'
    | 'policy_soft_failed'
    | 'policy_checked'
    | 'confirmed'
    | 'planned_and_finished'
    | 'apply_queued'
    | 'applying'
    | 'applied'
    | 'discarded'
    | 'errored'
    | 'canceled'
    | 'force_canceled'
  terraformVersion: string
}
