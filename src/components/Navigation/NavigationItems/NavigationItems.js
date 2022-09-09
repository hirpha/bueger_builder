import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem/NavigationItem'
import Styles from './NavigationItems.module.css'

import * as actionType from "../../../store/actions/index"

const NavigationItems = (props) => {

  return (
    <ul className = {Styles.NavigationItems}>
        <NavigationItem link = "/" exact >Buirger Builder</NavigationItem>
      
      {!props.isNotAuthenticated ? <NavigationItem link = "/orders" >Orders</NavigationItem>:null}
        
       {
       props.isNotAuthenticated ? <NavigationItem link = "/auth" >Sign in</NavigationItem> :
       <NavigationItem link = "/logout" >Logout</NavigationItem>
      }
       
    </ul>
  )
}

const mapStateToProps = state =>{
  return {
    isNotAuthenticated:state.auth.token == null
  }
}


export default connect(mapStateToProps )( NavigationItems)
