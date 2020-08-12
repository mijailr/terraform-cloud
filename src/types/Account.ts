import { TerraformCloudData } from "./TerraformCloudData";

export interface Account extends TerraformCloudData {
  attributes: AccountAttributes;
}

export interface AccountAttributes {
  username: string;
  "is-service-account": boolean;
  "avatar-url": string;
  "v2-only": boolean;
  "is-site-admin": boolean;
  "is-sso-login": boolean;
  email: string;
  "unconfirmed-email": null | string;
  permissions: AccountPermissions;
}

export interface AccountPermissions {
  "can-create-organizations": boolean;
  "can-change-email": boolean;
  "can-change-username": boolean;
  "can-manage-user-tokens": boolean;
}
