import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from './DrawerToggle/DrawerToggle'

import Styles from './Toolbar.module.css'
const Toolbar = (props) => {
  return (
    <div className={Styles.Toolbar}>
      <div onClick={props.clicked} className ={Styles.MobileOnly}>
        <DrawerToggle/>
      </div>
      <div className={Styles.Logo}>
        <Logo />
      </div>
      <nav className={Styles.DesktopOnly}>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default Toolbar
