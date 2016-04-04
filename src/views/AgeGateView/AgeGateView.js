import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from 'actions'
import CheckAgeForm from 'forms/CheckAgeForm'
type Props = {
  passedAgeGate: bool,
  location: Object,
  actions: Function
}

export class AgeGateView extends React.Component<void, Props, void> {

  static propTypes = {
    location: PropTypes.object,
    passedAgeGate: PropTypes.bool,
    actions: PropTypes.object
  }

  constructor (props) {
    super(props)
    const redirectRoute = this.props.location.query.next || '/check'
    this.checkAge = this.checkAge.bind(this)
    this.state = {
      redirectTo: redirectRoute
    }
  }

  checkAge (formDetails) {
    this.props.actions.checkAge(formDetails, this.state.redirectTo)
  }

  render () {
    return (
      <div className={'col-xs-12 col-sm-offset-3 col-sm-6 col-md-4 col-md-offset-4'}>
        <CheckAgeForm onSubmit={this.checkAge} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  passedAgeGate: state.ageVerification
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AgeGateView)
