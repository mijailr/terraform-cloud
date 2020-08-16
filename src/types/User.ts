import { TerraformCloudData, Links, Params } from './TerraformCloudData'

export interface UserAttributes {
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

export interface UserPermissions {
  canChangeEmail: boolean
  canChangeUsername: boolean
  canCreateOrganizations: boolean
  canManageUserTokens: boolean
}

export interface UserRelationships {
  authenticationTokens: {
    links: Links
  }
}

export interface UpdateAttributes {
  email: string
  username: string
}

export interface PasswordAttributes {
  current_password: string
  password: string
  password_confirmation: string
}

export type User = TerraformCloudData<UserAttributes> & {
  relationships: UserRelationships
}
export type UserUpdateInfo = Params<'users', UpdateAttributes>
export type UserUpdatePassword = Params<'users', PasswordAttributes>
