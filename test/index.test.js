import { defineRPMConstants } from '../src'
const GET_USERS_ACTION_TYPE = 'GET_USERS'
const GET_USERS_ACTION = GET_USERS_ACTION_TYPE
const GET_USERS_TYPE = GET_USERS_ACTION_TYPE
const GET_USERS_PENDING = 'GET_USERS_PENDING'
const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED'
const GET_USERS_REJECTED = 'GET_USERS_REJECTED'

describe('defineAction()', () => {
  describe('resulting constant', () => {
    it('has the given value', () => {
      expect(() => {
        defineRPMConstants()
      }).toThrowError(
        'defineRPMConstants: Must provide a constant value! Usage defineRPMConstants(<string>)',
      )
    })

    it('can create constant object', () => {
      const GET_USERS = defineRPMConstants(GET_USERS_ACTION)
      expect(GET_USERS.ACTION_TYPE).toEqual(GET_USERS_ACTION_TYPE)
      expect(GET_USERS.ACTION).toEqual(GET_USERS_ACTION)
      expect(GET_USERS.TYPE).toEqual(GET_USERS_TYPE)
      expect(GET_USERS.PENDING).toEqual(GET_USERS_PENDING)
      expect(GET_USERS.FULFILLED).toEqual(GET_USERS_FULFILLED)
      expect(GET_USERS.REJECTED).toEqual(GET_USERS_REJECTED)
    })
  })
})
