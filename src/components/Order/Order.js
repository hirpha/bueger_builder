import React from 'react'
import Styles from './Order.module.css'

const Order = (props) => {
    // let order = []

   let order=  Object.keys(props.ingridients).map(order =>{
        
        return (<p key={order} className={Styles.Ingr}>{order}({props.ingridients[order]}) </p>)

    })
    
  return (
    <div className={Styles.Order}>
      <div >
        Ingridents: {order}
      </div>
      
      <p>price:<strong>USD {props.price}</strong></p>
    </div>
  )
}

export default Order
