import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import AgeGateView from 'views/AgeGateView/AgeGateView'
import { requireAgeValidation } from 'components/AgeValidationComponent'

export default function getRoutes (store) {
  return (
    <Route path='/' component={CoreLayout} >
      <IndexRoute component={requireAgeValidation(HomeView)} />
      <Route path={"check"} component={AgeGateView} />
    </Route>
  )
}
