import {
  AGE_GATE_COMPLETED,
  ageVerified,
  default as ageVerificationReducer
} from 'redux/modules/ageVerification'

describe('(Redux Module) Age Verification', function () {
  it('Should export a constant AGE_GATE_COMPLETED.', function () {
    expect(AGE_GATE_COMPLETED).to.equal('AGE_GATE_COMPLETED')
  })

  describe('(Reducer)', function () {
    it('Should be a function.', function () {
      expect(ageVerificationReducer).to.be.a('function')
    })

    it('Should initialize with a state of false.', function () {
      expect(ageVerificationReducer(undefined, {})).to.equal(false)
    })

    it('Should return the previous state if an action was not matched.', function () {
      let state = ageVerificationReducer(undefined, {})
      expect(state).to.equal(false)
      state = ageVerificationReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(false)
      state = ageVerificationReducer(state, {type: "AGE_GATE_COMPLETED", payload: true})
      expect(state).to.equal(true)
      state = ageVerificationReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(true)
    })

  })

  describe('(Action Creator) ageVerfied', function () {
    it('Should be exported as a function.', function () {
      expect(ageVerified).to.be.a('function')
    })

    it('Should return an action with type "AGE_GATE_COMPLETED".', function () {
      expect(ageVerified()).to.have.property('type', AGE_GATE_COMPLETED)
    })

    it('Calling the function should set the "payload" property to true.', function () {
      expect(ageVerified()).to.have.property('payload', true)
    })
  })
})
