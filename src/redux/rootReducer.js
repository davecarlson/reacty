import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import ageVerification from './modules/ageVerification'

export default combineReducers({
  counter,
  ageVerification,
  router
})
