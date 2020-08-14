import { TerraformCloudData, Links } from './TerraformCloudData'

export type Account = TerraformCloudData<AccountAttributes> & {
  relationships: AccountRelationships
}

interface AccountAttributes {
  avatarUrl: string
  email: string
  enterpriseSupport: boolean
  hasGitHubAppToken: boolean
  isConfirmed: boolean
  isServiceAccount: boolean
  isSiteAdmin: boolean
  isSsoLogin: boolean
  isSudo: boolean
  onboardingStatus: string
  permissions: AccountPermissions
  twoFactor: {
    enabled: boolean
    verified: boolean
  }
  unconfirmedEmail: null | string
  username: string
  v2Only: boolean
}

interface AccountPermissions {
  canChangeEmail: boolean
  canChangeUsername: boolean
  canCreateOrganizations: boolean
  canManageUserTokens: boolean
}

interface AccountRelationships {
  authenticationTokens: {
    links: Links
  }
}
