# terraform-cloud

[![@latest](https://img.shields.io/npm/v/terraform-cloud.svg)](https://www.npmjs.com/package/terraform-cloud)
[![Build Status](https://github.com/mijailr/terraform-cloud/workflows/Test/badge.svg)](https://github.com/mijailr/terraform-cloud/actions?query=workflow%3ATest+branch%3Amaster)
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
const terraformClient = new TerraformCloud('terraform-api-token')

// Make an API call

// Get Account Information
terraformClient.getAccount().then(account => {
  // handle account data
})

// Get Run information by run id (ex: 'run-xis032ss)
terraformClient.getRun('run-id').then(run => {
  // handle run data
})
```

## Current implementation

- [x] [Account](https://www.terraform.io/docs/cloud/api/account.html) (100%)
- [x] Runs by workspace
- [x] Run by ID

## TODO

- [ ] Workspace by ID
- [ ] Workspaces
- [ ] ...

## Contributing

We would love you to contribute to `terraform-cloud`, pull requests are very welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## LICENSE

[MIT](LICENSE)
