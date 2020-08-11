interface Account{
  id: string,
  type: string,
  attributes: AccountAttributes,
}

interface AccountAttributes{
  username: string,
  is_service_account: boolean,
  avatar_url: string,
  v2_only: boolean,
  is_site_admin: boolean,
  is_sso_login: boolean,
  email: string,
  unconfirmed_email: null | string,
  permissions: AccountPermissions,
}

interface AccountPermissions{
  can_create_organizations: boolean,
  can_change_email: boolean,
  can_change_username: boolean,
}

export {Account, AccountAttributes, AccountPermissions}
