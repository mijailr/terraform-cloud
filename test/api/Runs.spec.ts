import nock from 'nock'
import TerraformCloud from '../../src/api/TerraformCloud'
import { RunMock, RunRequestMock } from '../mocks'

const { Runs } = new TerraformCloud('api-key')
const runId = 'run-id'

describe('Runs endpoints', () => {
  it('creates a run', async done => {
    const scope = nock('https://app.terraform.io/api/v2').post(`/runs`, RunRequestMock).reply(201, RunMock)
    const run = await Runs.create(RunRequestMock)

    expect(run.attributes.status).toBe('applied')
    scope.done()
    done()
  })

  it('apply a run', async done => {
    const scope = nock('https://app.terraform.io/api/v2')
      .post(`/runs/${runId}/actions/apply`, { comment: 'none' })
      .reply(204, RunMock)
    await Runs.apply(runId, { comment: 'none' })
    scope.done()
    done()
  })
})
