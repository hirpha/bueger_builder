import React from 'react'
import Styles from "./NavigationItem.module.css"
import {NavLink } from "react-router-dom"

const NavigationItem = (props) => {
  return (
    <li className={Styles.NavigationItem}>
      <NavLink 
        to={props.link} 
        className = {Styles.active}
        >{props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
