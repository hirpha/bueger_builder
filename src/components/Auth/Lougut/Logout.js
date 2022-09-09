import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router'

import * as actionType from "../../../store/actions/index"

const Logout = (props) => {
    useEffect(()=>{
        props.onLogout()
    })
  return <Navigate to = "/"/>
  
}

const mapDispatchToProps = dispatch =>{
    return {
        onLogout:()=>dispatch(actionType.authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
