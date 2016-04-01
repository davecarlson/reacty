import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

export function requireAgeValidation (Component) {
  type Props = {
    location: Object
  }

  class AgeValidationComponent extends React.Component<void, Props, void> {

    static propTypes = {
      location: PropTypes.object,
      passedAgeGate: PropTypes.bool.isRequired,
      dispatch: PropTypes.func.isRequired
    }

    componentWillMount () {
      this.checkVerified()
    }

    componentWillReceiveProps (nextProps) {
      this.checkVerified()
    }

    checkVerified () {
      if (!this.props.passedAgeGate) {
        let redirectAfterVerification = this.props.location.pathname
        this.props.dispatch(push('/check?next=' + redirectAfterVerification))
      }
    }

    render () {
      return (
        <div>
          {this.props.passedAgeGate === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    passedAgeGate: state.ageVerification
  })

  return connect(mapStateToProps)(AgeValidationComponent)
}
