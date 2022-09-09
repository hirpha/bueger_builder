import React from 'react'
import Styles from './Backdrop.module.css'
const Backdrop = (props) =>  props.show? 
        <div className={Styles.Backdrop} onClick ={props.close}/>:null 
   
    
    
    
  

export default Backdrop
