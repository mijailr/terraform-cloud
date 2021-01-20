import { Params, TerraformCloudData } from './TerraformCloudData'

export type WorkspaceRequest = Params<'workspaces', WorkspaceRequestAttributes>

export interface WorkspaceRequestAttributes {
  name: string
  agentPoolId?: string
  allowDestroyPlan?: boolean
  autoApply?: boolean
  description?: string
  executionMode?: string
  fileTriggersEnabled?: boolean
  sourceName?: string
  sourceUrl?: string
  queueAllRuns?: boolean
  speculativeEnabled?: boolean
  terraformVersion?: string
  triggerPrefixes?: []
  workingDirectory?: string
  vcsRepo?: WorkspaceVcsRepoCreate
}

export interface WorkspaceVcsRepoCreate {
  oauthTokenId: string
  branch?: string
  ingressSubmodules?: boolean
  identifier: string
}

export type Workspace = TerraformCloudData<WorkspaceAttributes>

export interface WorkspaceAttributes {
  autoApply: boolean
  allowDestroyPlan: boolean
  canQueueDestroyPlan: boolean
  createdAt: Date
  environment: string
  fileTriggersEnabled: boolean
  locked: boolean
  name: string
  permissions: WorkspacePermissions
  queueAllRuns: boolean
  terraformVersion: string
  triggerPrefixes: []
  vcsRepo: null
  workingDirectory: string
  executionMode: 'remote' | 'local' | 'agent'
}

export interface WorkspacePermissions {
  canUpdate: boolean
  canDestroy: boolean
  canQueueDestroy: boolean
  canQueueRun: boolean
  canUpdateVariable: boolean
  canLock: boolean
  canReadSettings: boolean
}
