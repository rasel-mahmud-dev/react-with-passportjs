import React from 'react'
import {signInGoogle } from '../../actions'
import  {connect} from 'react-redux'

const Login = (props) => {
  return (
    <div>
        <a target="_top" href="/auth/google">Log in With Google</a>
    </div>
  )
}

export default connect(null,  {signInGoogle})(Login)
