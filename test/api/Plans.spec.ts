import nock from 'nock'
import TerraformCloud from '../../src/api/TerraformCloud'
import { PlanMock } from '../mocks'

const { Plans } = new TerraformCloud('api-key')
const planId = 'plan-id'

describe('Plans endpoints', () => {
  it('return a plan by id', async done => {
    const scope = nock('https://app.terraform.io/api/v2').get(`/plans/${planId}`).reply(200, PlanMock)
    const plan = await Plans.show(planId)
    expect(plan.id).toBe(planId)
    expect(plan.attributes.status).toBe('finished')
    scope.done()
    done()
  })
})
