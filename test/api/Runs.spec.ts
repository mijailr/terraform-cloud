import nock from 'nock'
import TerraformCloud from '../../src/api/TerraformCloud'
import { RunAction } from '../../src/types/Run'
import { Type } from '../../src/types/TerraformCloudData'
import { RunMock, RunRequestMock } from '../mocks'

const { Runs } = new TerraformCloud('api-key')
const runId = 'run-id'
const workspaceId = 'workspace-id'

describe('Runs endpoints', () => {
  it('creates a run', async done => {
    const scope = nock('https://app.terraform.io/api/v2').post(`/runs`, RunRequestMock).reply(201, { data: RunMock })
    const run = await Runs.create(RunRequestMock)

    expect(run.attributes.status).toBe('applied')
    scope.done()
    done()
  })

  it('show a run by id', async done => {
    const scope = nock('https://app.terraform.io/api/v2').get(`/runs/${runId}`).reply(200, { data: RunMock })

    const run = await Runs.show(runId)
    expect(run.type).toBe(Type.Runs)
    done()
  })

  it('list runs by workspace id', async done => {
    const response = { data: [RunMock, RunMock] }
    const scope = nock('https://app.terraform.io/api/v2')
      .get(`/workspaces/${workspaceId}/runs?page[1]&page[20]`)
      .reply(200, response)

    const runs = await Runs.list(workspaceId)

    expect(runs.length).toBe(2)
    scope.done()
    done()
  })

  const actions = ['apply', 'discard', 'cancel', 'force-cancel', 'force-execute']

  actions.map(action => {
    it(`run action ${action}`, async done => {
      const scope = nock('https://app.terraform.io/api/v2')
        .post(`/runs/${runId}/actions/${action}`, { comment: 'none' })
        .reply(204)
      await Runs.action(action as RunAction, runId, { comment: 'none' })
      scope.done()
      done()
    })
  })
})
