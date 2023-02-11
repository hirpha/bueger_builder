import axios from '../../axios-order'
import React from 'react'
import { useState } from 'react'
import {Navigate, useNavigate} from "react-router"
import { connect,  } from 'react-redux'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Styles from "./Auth.module.css"

import * as actionType from '../../store/actions/index'
import Spinner from '../UI/Spinner/Spinner'

const Auth = (props) => {
    
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [emailToched, setEmailTouched] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordTouched, setPasswordTouched] = useState(false)
    const navigate = useNavigate()

    const [isSignup, setIsSignup] = useState(true)
    let redirect = null

const submitAuthHandler = (event) =>  {
    event.preventDefault()
    if(emailToched || passwordTouched){

        if(email.trim().length === 0){
            setEmailError("Email field must be filled")
        }
        if(password.trim().length === 0){
           setPasswordError("Email field must be filled")
        } 
        if(password.length < 8) {
            setPasswordError("password must be greater 8 character")
        }
        if(email.length < 6){
            setEmailError( "Email must be greater than 6 character")
        }
        if(email.length > 8 &&   password.length >6  ) {
            setEmailError("")
            setPasswordError("")
            props.onAuthenticate(email, password, isSignup)
            if(props.orderPurchase){
                // navigate("/checkout", {
                //     replace:true
                // })

                redirect = <Navigate to="/checkout"  />
            
            } else{
                navigate ('/')
            }
        }

    } else {
        setEmailError( "please fill email field")
        setPasswordError( "please fill password field")
    }
}

const onchangeHandler = (index, event) => {

    if(index ===0){
        setEmail(event.target.value)
        setEmailTouched(true)
    } else if(index === 1){
        setPassword(event.target.value)
        setPasswordTouched(true)
    }
}
const changeSigninOption =()=>{
    setIsSignup(!isSignup)
}
let errorMessage = ""
if(props.error){
    errorMessage =<p style={{color:"red"}}>{props.error}</p>
}
let data = <Spinner/>

if(!props.loading){
    data =   <div className={Styles.Auth}>
        {redirect}
    <form onSubmit={submitAuthHandler}>
      {errorMessage}
      <Input
      onchange = {(event)=>onchangeHandler(0,event)}
      value = ""
      elementConfig = {
          {
          placeholder:"Email Address"
          }
      }
      />
      <p style={{color:"red"}}>{emailError}</p>
      <Input
      onchange = {(event)=>onchangeHandler(1,event)}
      value = ""
      elementConfig = {
          {
          placeholder:"Password Address"
          }
      }
      />
      <p style={{color:"red"}}>{passwordError}</p>
      <Button btnType="Success">{isSignup? "Sign up":"Sign in"}</Button>
    </form>
      <Button btnType="Danger" clicked = {changeSigninOption}>Switch to {isSignup? "Sign in":"Sign up"} </Button>
  </div>
}

  return data
}

const mapStateToProps = state => {
    return {
        ing:state.buildReducer.ingridients,
        loading:state.auth.loading,
        orderPurchase:state.auth.orderPurchase,
        error:state.auth.error,
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate:(email, password, isSignup) =>dispatch(actionType.authenticate(email, password, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler( Auth, axios))
