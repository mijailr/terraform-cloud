import { TerraformCloudData, Links } from './TerraformCloudData'

export type Account = TerraformCloudData<AccountAttributes> & {
  relationships: AccountRelationships
}

interface AccountAttributes {
  username: string
  'is-service-account': boolean
  'avatar-url': string
  'v2-only': boolean
  'is-site-admin': boolean
  'is-sso-login': boolean
  email: string
  'unconfirmed-email': null | string
  permissions: AccountPermissions
}

interface AccountPermissions {
  'can-create-organizations': boolean
  'can-change-email': boolean
  'can-change-username': boolean
  'can-manage-user-tokens': boolean
}

interface AccountRelationships {
  'authentication-tokens': {
    links: Links
  }
}
