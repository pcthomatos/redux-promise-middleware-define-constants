declare module 'redux-promise-middleware-define-constants' {
  export interface IRPMConstants {
    ACTION_TYPE: string
    ACTION: string
    TYPE: string
    FULFILLED: string
    PENDING: string
    REJECTED: string
  }

  export function defineRPMConstants(constantString: string): IRPMConstants
}
