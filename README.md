# terraform-cloud

A typescript [Terraform Cloud API](https://www.terraform.io/docs/cloud/api/index.html) wrapper.

> This is a work in progress, if you want to contribute feel free to integrate a new endpoint.

## Instalation

```sh
yarn add terraform-cloud # With Yarn
npm install terraform-cloud # With NPM
```

## Usage

```ts
import { TerraformCloudApi } from 'terraform-cloud'

// Set a your terraform cloud API token
const terraformClient = new TerraformCloudApi('terraform-api-token')

// Make an API call

// Get Account Information
const account = terraformClient.getAccount()

// Get Run information by run id (ex: 'run-xis032ss)
const run = terraformClient.getRun('run-id')
```

## Current implementation

- [x] Account details
- [x] Runs by workspace
- [x] Run by ID

## TODO

- [ ] Workspace by ID
- [ ] Workspaces
- [ ] ...
