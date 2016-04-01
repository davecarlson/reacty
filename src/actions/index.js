import {push} from 'react-router-redux'

export function checkAge (redirect = '/') {
  return function (dispatch) {
    dispatch(ageVerified())
    dispatch(push(redirect))
  }
}

export function ageVerified () {
  localStorage.setItem('ageVerified', true)
  return {
    type: 'AGE_GATE_COMPLETED',
    payload: true
  }
}
