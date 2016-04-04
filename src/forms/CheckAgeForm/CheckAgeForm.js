import React from 'react'
import { reduxForm } from 'redux-form'
import classes from './CheckAgeForm.scss'

export const fields = ['dobDay', 'dobMonth', 'dobYear', 'rememberDob']

const validate = (values) => {
  const errors = {}
  if (!values.dobDay || values.dobDay.length > 2 || values.dobDay > 31 || isNaN(Number(values.dobDay))) {
    errors.dobDay = 'Please enter a valid day of birth'
  }
  if (!values.dobMonth || values.dobMonth.length > 2 || values.dobMonth > 12 || isNaN(Number(values.dobMonth))) {
    errors.dobMonth = 'Please enter a month day of birth'
  }
  if (!values.dobYear || values.dobYear.length > 4 || values.dobYear < 1900 || isNaN(Number(values.dobYear))) {
    errors.dobYear = 'Please enter a year day of birth'
  }

  return errors
}

type Props = {
  handleSubmit: Function,
  fields: Object,
  submitting: bool
}
export class CheckAge extends React.Component {
  props: Props;

  defaultProps = {
    fields: {
    }
  }

  renderError (errorMessage) {
    return (
      <p>
        {errorMessage}
      </p>
    )
  }

  render () {
    const { fields: { dobDay, dobMonth, dobYear, rememberDob }, handleSubmit, submitting } = this.props

    return (
      <form className={"form-inline"} onSubmit={handleSubmit}>
        <div className={"form-group"}>
          <input
            type={"tel"}
            className={'form-control ' + classes['two']}
            minLength={1}
            maxLength={2}
            placeholder={"DD"}
            {...dobDay} />
          <input
            type={"tel"}
            className={'form-control ' + classes['two']}
            pattern={"[0-9]*"}
            minLength={1}
            maxLength={2}
            placeholder={"MM"}
            {...dobMonth} />
          <input
            type={"tel"}
            className={'form-control ' + classes['four']}
            pattern={"[0-9]*"}
            minLength={4}
            maxLength={4}
            placeholder={"YYYY"}
            {...dobYear} />
        </div>
        <div className={"checkbox"}>
          <label>
            <strong><input type={"checkbox"} {...rememberDob} /> Remember my date of birth? *</strong>
          </label>
        </div>
        <div className={"help-block"}>
          {dobDay.touched ? this.renderError(dobDay.error) : ''}
          {dobMonth.touched ? this.renderError(dobMonth.error) : ''}
          {dobYear.touched ? this.renderError(dobYear.error) : ''}
        </div>

        <button type={"submit"} disabled={submitting} className={classes['avp-submit']}>
          <i/> Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'CheckAge',
  fields,
  validate
})(CheckAge)
