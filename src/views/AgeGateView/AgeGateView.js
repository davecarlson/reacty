import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from 'actions'

type Props = {
  passedAgeGate: bool,
  location: Object,
  actions: Function
}

export class AgeGateView extends React.Component<void, Props, void> {

  static propTypes = {
    location: PropTypes.object,
    actions: PropTypes.object
  }

  constructor (props) {
    super(props)
    const redirectRoute = this.props.location.query.next || '/check'
    this.state = {
      redirectTo: redirectRoute
    }
  }

  checkAge (e) {
    e.preventDefault()
    this.props.actions.checkAge(this.state.redirectTo)
  }

  render () {
    return (
      <div>
        AVP
        <h3>
          Passed Age Check:
          {' '}
          <span>{this.props.passedAgeGate ? 'yes' : 'no'}</span>
        </h3>
        <button className='btn btn-default' onClick={this.checkAge.bind(this)}>
          I am over 18
        </button>

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
