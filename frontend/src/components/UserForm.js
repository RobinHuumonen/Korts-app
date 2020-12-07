import React from 'react'
import LinkButton from './LinkButton'
import PropTypes from 'prop-types'
import '../index.css'

const UserForm = ({
  passwordHint,
  usernameHint,
  username,
  password,
  buttonText,
  submitHandler,
  usernameHandler,
  passwordHandler
}) => {
  return (
      <form onSubmit={submitHandler}>
          <div >
            <input
            placeholder={usernameHint}
            className="white-input"
            id="username"
              value={username}
              onChange={usernameHandler}
            />
          </div>
          <div>
            <input
              placeholder={passwordHint}
              className="white-input"
              id="password"
              type="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
        <LinkButton id="login-button" text={buttonText} className="pink-box-button"  type="submit"/>
      </form>
  )
}

UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  usernameHandler: PropTypes.func.isRequired,
  passwordHandler: PropTypes.func.isRequired

}

export default UserForm