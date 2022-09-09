import React from 'react'
import styles from "./Burger.module.css"
import BurgerIngerident from './BurgerIngerident/BurgerIngerident'

const Burger = (props) => {

  let transformedIngridient = Object.keys(props.ingridients)
      .map(ingKey =>{
        return [...Array(props.ingridients[ingKey])].map((_, index) =>{
          return <BurgerIngerident key ={ingKey + index} type = {ingKey}/>
        })
      }).reduce((arr, el)=>{
        return arr.concat(el)
      }, [])
      if(transformedIngridient.length === 0){
        transformedIngridient = <p>Please start adding ingridients</p>
      }
  return (
    <div className={styles.Burger}>
      <BurgerIngerident type = "bread-top"/>
      {transformedIngridient}
      <BurgerIngerident type = "bread-bottom"/>
    </div>
  )
}

export default Burger
