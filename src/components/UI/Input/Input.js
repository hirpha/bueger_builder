import React from 'react'

import Styles from './input.module.css'
const Input = (props) => {
    let element = <input onChange = {props.onchange} className={Styles.InputElement}/>
    switch(props.input_type){
        case "input":
            element = <input onChange = {props.onchange} className={Styles.InputElement} {...props.elementConfig} {...props.value}/>
        break    
        case "tectArea":
            element = <textarea onChange = {props.onchange} className={Styles.InputElement} {...props.elementConfig} {...props.value}/>
        break    
        case "select":
            element = <select 
                onChange = {props.onchange} className={Styles.InputElement}
                value ={props.value}
                >
                    {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
                </select>
        break    
        default:
            element = <input onChange = {props.onchange} className={Styles.InputElement} {...props.elementConfig} {...props.value}/>
        break    

    }
  return (
    <div onChange = {props.onchange} className={Styles.Input}>
      {element}
    </div>
  )
}

export default Input
