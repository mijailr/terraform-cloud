# terraform-cloud

[![@latest](https://img.shields.io/npm/v/terraform-cloud.svg)](https://www.npmjs.com/package/terraform-cloud)
[![Build Status](https://github.com/mijailr/terraform-cloud/workflows/Test/badge.svg)](https://github.com/mijailr/terraform-cloud/actions?query=workflow%3ATest+branch%3Amaster)
[![Maintainability](https://api.codeclimate.com/v1/badges/a68c0e9a298ae127d7de/maintainability)](https://codeclimate.com/github/mijailr/terraform-cloud/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a68c0e9a298ae127d7de/test_coverage)](https://codeclimate.com/github/mijailr/terraform-cloud/test_coverage)
[![Try terraform-cloud on RunKit](https://badge.runkitcdn.com/terraform-cloud.svg)](https://npm.runkit.com/terraform-cloud)

[Terraform Cloud REST API](https://www.terraform.io/docs/cloud/api/index.html) client for javascript.

> NOTE: This is a work in progress, please review the current implementation.

## Instalation

```sh
yarn add terraform-cloud # With Yarn
npm install terraform-cloud # With NPM
```

## Usage

```ts
import { TerraformCloud } from 'terraform-cloud'

// Set a your terraform cloud API token
const { Account, Plans } = new TerraformCloud('terraform-api-token')

// Make an API call

// Get Account Information
Account.getDetails().then(account => {
  // handle account data
})

// Update Account Password
const updatePasswordRequest = {
  data: {
    type: 'user',
    attributes: {
      current_password: 'current-password',
      password: 'new-password',
      password_confirmation: 'new-password',
    },
  },
}

Account.updatePassword(updatePasswordRequest).then(user => {
  // handle account password update
})

Plans.show('plan-id').then(plan => {
  // handle plan data
})
```

## Current implementation

- [x] [Account](https://www.terraform.io/docs/cloud/api/account.html) (100%)
- [x] [Plans](https://www.terraform.io/docs/cloud/api/plans.html) (90%) - **TODO:** Plan Json Output

## TODO

- [ ] Runs
- [ ] Workspaces
- [ ] ...

## Contributing

We would love you to contribute to `terraform-cloud`, pull requests are very welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## LICENSE

[MIT](LICENSE)
