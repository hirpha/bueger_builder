import React from 'react' 
import Prototype from "prop-types"
import styles from "./BurgerIngerident.module.css"

const BurgerIngerident = (props) => {

    let ingrident = null
    switch(props.type){
        case ("bread-bottom"):
         ingrident = <div className = {styles.BreadBottom}></div>
        break
        case ("bread-top"):
         ingrident = (
         <div className = {styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
         </div>)
        break
        case ("meat"):
         ingrident = <div className = {styles.Meat}></div>
        break
        case ("cheese"):
         ingrident = <div className = {styles.Cheese}></div>
        break
        case ("salad"):
         ingrident = <div className = {styles.Salad}></div>
        break
        case ("bacon"):
         ingrident = <div className = {styles.Bacon}></div>
        break
        default:
        ingrident = null
    }
  return ingrident
}

BurgerIngerident.prototype = {
    type:Prototype.string.isRequired
}

export default BurgerIngerident
