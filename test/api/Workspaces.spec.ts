import nock from 'nock'
import TerraformCloud from '../../src'
import { WorkspaceRequest } from '../../src/types'
import { WorkspaceMock, WorkspaceNoVcsRequest } from '../mocks'

const { Workspaces } = new TerraformCloud('api-key')
const organizationName = 'organization-name'
const workspaceId = 'workspace-id'

describe('Workspaces endpoints', () => {
  it('create a workspace without VCS', async done => {
    const scope = nock('https://app.terraform.io/api/v2')
      .post(`/organizations/${organizationName}/workspaces`, WorkspaceNoVcsRequest)
      .reply(201, WorkspaceMock)
    const workspace = await Workspaces.create(organizationName, WorkspaceNoVcsRequest as WorkspaceRequest)

    expect(workspace.type).toBe('workspaces')
    scope.done()
    done()
  })

  it('should update a workspace', async done => {
    const scope = nock('https://app.terraform.io/api/v2')
      .patch(`/organizations/${organizationName}/workspaces/${workspaceId}`, WorkspaceNoVcsRequest)
      .reply(200, WorkspaceMock)

    const workspace = await Workspaces.update(organizationName, workspaceId, WorkspaceNoVcsRequest as WorkspaceRequest)

    expect(workspace.type).toBe('workspaces')
    scope.done()
    done()
  })
})
