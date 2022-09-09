import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
import Styles from './SideDrawer.module.css'

const SideDrawer = (props) => {
  let classes = [Styles.SideDrawer, Styles.Close]
  if(props.show){
    classes = [Styles.SideDrawer, Styles.Open]
  }
  return (
    <Auxilary>
     <Backdrop show = {props.show} close = {props.closed}/>
<div className={classes.join(" ")} onClick = {props.closed}>
     <div className={Styles.logo} >
        <Logo />
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
    </Auxilary>
    
  )
}

export default SideDrawer
