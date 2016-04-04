/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const AGE_GATE_COMPLETED = 'AGE_GATE_COMPLETED'

export function ageVerified () {
  return {
    type: 'AGE_GATE_COMPLETED',
    payload: true
  }
}

export const actions = {
  ageVerified
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [AGE_GATE_COMPLETED]: (state: bool, action: {payload: bool}): bool => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function ageVerificationReducer (state: bool = initialState, action: Action): bool {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
