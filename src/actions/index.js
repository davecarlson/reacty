import { push } from 'react-router-redux'
import moment from 'moment'
import { ageVerified } from 'redux/modules/ageVerification'

export function checkAge (values, redirect = '/') {
  return function (dispatch) {
    let dob = moment([values.dobYear, values.dobMonth - 1, values.dobDay])
    let age = moment().diff(dob, 'years')
    if (age >= 18) {
      dispatch(ageVerified(values.rememberDob))
      dispatch(push(redirect))
    } else {
      if (typeof document !== 'undefined') {
        window.location = 'http://www.drinkaware.co.uk/'
      }
    }
  }
}
