import React from 'react'
import Styles from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.label}</div>
        <button className={Styles.Less} onClick = {props.removeIngridient} disabled = {props.disabled}>less</button>
        <button className={Styles.More} onClick = {props.addIngridient}>more</button>
    </div>
  )
}

export default BuildControl
