import { push } from 'react-router-redux'
import moment from 'moment'
import { ageVerified } from 'redux/modules/ageVerification'

export const AGE_GATE_MINIMUM_AGE = 18
export const AGE_GATE_FAILED_REDIRECT = 'http://www.drinkaware.co.uk/'

export function checkAge (values, redirect = '/') {
  return function (dispatch) {
    let dob = moment([values.dobYear, values.dobMonth - 1, values.dobDay])
    let age = moment().diff(dob, 'years')
    if (age >= AGE_GATE_MINIMUM_AGE) {
      if (values.rememberDob) {
        localStorage.setItem('ageVerified', true)
      }
      sessionStorage.setItem('ageVerified', true)

      dispatch(ageVerified())
      dispatch(push(redirect))
    } else {
      if (typeof document !== 'undefined') {
        window.location = AGE_GATE_FAILED_REDIRECT
      }
    }
  }
}
