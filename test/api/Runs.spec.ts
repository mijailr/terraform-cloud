import nock from 'nock'
import TerraformCloud from '../../src/api/TerraformCloud'
import { RunActionRequest } from '../../src/types/Run'
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

  it('apply a run by id', async done => {
    const scope = nock('https://app.terraform.io/api/v2')
      .post(`/runs/${runId}/actions/apply`, { comment: 'none' })
      .reply(204, RunMock)
    await Runs.apply(runId, { comment: 'none' })
    scope.done()
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

  it('discard a run by id', async done => {
    const actionRequest = {
      data: { comment: 'discard comment' },
    } as RunActionRequest
    const scope = nock('https://app.terraform.io/api/v2')
      .post(`/runs/${runId}/actions/discard`, actionRequest)
      .reply(202)

    await Runs.discard(runId, actionRequest)
    scope.done()
    done()
  })
})
