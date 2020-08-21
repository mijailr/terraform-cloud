import nock from 'nock'
import { TerraformCloud } from '../../src/'
import { UserDetailsUpdateMock, UserMock, UserPasswordUpdateMock } from '../mocks'

const { Account } = new TerraformCloud('api-key')

describe('Account endpoints', () => {
  it('returns current user', async done => {
    const scope = nock('https://app.terraform.io/api/v2').get('/account/details').reply(200, UserMock)
    const user = await Account.getDetails()
    expect(user.id).toBe('user-zzAm6GKzCMMTB5dR')
    scope.done()
    done()
  })

  it('updates account password', async done => {
    const scope = nock('https://app.terraform.io/api/v2').patch('/account/password').reply(200, UserMock)
    const user = await Account.changePassword(UserPasswordUpdateMock)
    expect(user.id).toBe('user-zzAm6GKzCMMTB5dR')
    scope.done()
    done()
  })

  it('updates account details', async done => {
    const scope = nock('https://app.terraform.io/api/v2').patch('/account/update').reply(200, UserMock)
    const user = await Account.update(UserDetailsUpdateMock)
    expect(user.id).toBe('user-zzAm6GKzCMMTB5dR')
    scope.done()
    done()
  })

  it('returns user details by id', async done => {
    const userId = 'user-zzAm6GKzCMMTB5dR'
    const scope = nock('https://app.terraform.io/api/v2').get(`/users/${userId}`).reply(200, UserMock)
    const user = await Account.getUser(userId)
    expect(user.id).toBe('user-zzAm6GKzCMMTB5dR')
    scope.done()
    done()
  })
})
