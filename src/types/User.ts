import { TerraformCloudData, Links, Params, Type } from './TerraformCloudData'

interface UserAttributes {
  avatarUrl: string
  email: string
  enterpriseSupport: boolean
  hasGitHubAppToken: boolean
  isConfirmed: boolean
  isServiceUser: boolean
  isSiteAdmin: boolean
  isSsoLogin: boolean
  isSudo: boolean
  onboardingStatus: string
  permissions: UserPermissions
  twoFactor: {
    enabled: boolean
    verified: boolean
  }
  unconfirmedEmail: null | string
  username: string
  v2Only: boolean
}

interface UserPermissions {
  canChangeEmail: boolean
  canChangeUsername: boolean
  canCreateOrganizations: boolean
  canManageUserTokens: boolean
}

interface UserRelationships {
  authenticationTokens: {
    links: Links
  }
}

interface UpdateAttributes {
  email: string
  username: string
}

interface PasswordAttributes {
  current_password: string
  password: string
  password_confirmation: string
}

export type User = TerraformCloudData<UserAttributes> & {
  relationships: UserRelationships
}
export type UserUpdateInfo = Params<Type.User, UpdateAttributes>
export type UserPassword = Params<Type.User, PasswordAttributes>
