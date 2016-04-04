import { push } from 'react-router-redux'
import moment from 'moment'
import { cookie } from 'redux-effects-cookie'
import { ageVerified, AGE_GATE_MINIMUM_AGE, AGE_GATE_FAILED_REDIRECT } from 'redux/modules/ageVerification'

export function checkAge (values, redirect = '/') {
  return function (dispatch) {
    let dob = moment([values.dobYear, values.dobMonth - 1, values.dobDay])
    let age = moment().diff(dob, 'years')
    if (age >= AGE_GATE_MINIMUM_AGE) {
      if (values.rememberDob) {
        dispatch({
          type: 'EFFECT_LOCALSTORAGE',
          payload: {
            type: 'setItem',
            key: 'ageVerified',
            value: true
          }
        })
      }
      dispatch(cookie('ageVerified', true))

      dispatch(ageVerified())
      dispatch(push(redirect))
    } else {
      if (typeof document !== 'undefined') {
        window.location = AGE_GATE_FAILED_REDIRECT
      }
    }
  }
}
