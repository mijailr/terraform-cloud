import nock from 'nock'
import TerraformCloud from '../../src'
import { WorkspaceMock, WorkspaceNoVcsRequest } from '../mocks'
import { WorkspaceCreate } from '../../src/types'

const { Workspaces } = new TerraformCloud('api-key')
const organizationName = 'organization-name'

describe('Workspaces endpoints', () => {
  it('create a workspace without VCS', async done => {
    const scope = nock('https://app.terraform.io/api/v2')
      .post(`/organizations/${organizationName}/worspaces`, WorkspaceNoVcsRequest)
      .reply(201, WorkspaceMock)
    const workspace = await Workspaces.create(organizationName, WorkspaceNoVcsRequest as WorkspaceCreate)

    expect(workspace.type).toBe('workspaces')
    scope.done()
    done()
  })
})
