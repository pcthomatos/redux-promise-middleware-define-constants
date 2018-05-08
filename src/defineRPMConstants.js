const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'
const REJECTED = '_REJECTED'

const defineRPMConstants = (constant) => {
  if (constant === undefined) {
    throw new Error(
      'defineRPMConstants: Must provide a constant value! Usage defineRPMConstants(<string>)',
    )
  }

  return Object.defineProperties(Object.create(null), {
    ACTION_TYPE: {
      value: constant,
      writable: false,
      configurable: false,
    },
    ACTION: {
      value: constant,
      writable: false,
      configurable: false,
    },
    TYPE: {
      value: constant,
      writable: false,
      configurable: false,
    },
    FULFILLED: {
      value: constant + FULFILLED,
      writable: false,
      configurable: false,
    },
    REJECTED: {
      value: constant + REJECTED,
      writable: false,
      configurable: false,
    },
    PENDING: {
      value: constant + PENDING,
      writable: false,
      configurable: false,
    },
  })
}

export default defineRPMConstants
