import { TerraformCloudData, Links } from './TerraformCloudData'

export type Account = TerraformCloudData<AccountAttributes> & {
  relationships: AccountRelationships
}

interface AccountAttributes {
  avatarUrl: string
  email: string
  isServiceAccount: boolean
  isSiteAdmin: boolean
  isSsoLogin: boolean
  permissions: AccountPermissions
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
