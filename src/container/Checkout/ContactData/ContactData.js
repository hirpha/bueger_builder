import React, { useState } from 'react'
import {  Navigate, useNavigate } from 'react-router'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import WithErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'

import * as actionType from '../../../store/actions/index'
const ContactData = (props) => {

    const [name , setName] =useState("")
    const [email , setEmail] =useState("")
    const [street , setStreet] =useState("")
    const [postal , setPostal] =useState("")
    const [country , setCountry] =useState("")
    const [deliveryMethod , setDeliveryMethod] =useState("Fastest")

    const contactForm = {
        name:{
          elementType:"input",
          elementConfig:{
            type:"text",
            placeholder:"Your Name"
          },
          value:""
        },
        email:{
          elementType:"input",
          elementConfig:{
            type:"email",
            placeholder:"Your Email"
          },
          value:""
        },
        street:{
          elementType:"input",
          elementConfig:{
            type:"text",
            placeholder:"Your Street"
          },
          value:""
        },
        postal:{
          elementType:"input",
          elementConfig:{
            type:"text",
            placeholder:"Your Postal"
          },
          value:""
        },
        country:{
          elementType:"input",
          elementConfig:{
            type:"text",
            placeholder:"Your Country"
          },
          value:""
        },
        deliveryMethod:{
          elementType:"select",
          elementConfig:{
            options:[
              {value:"Fastest", displayValue:"Fastest"},
              {value:"Cheapest", displayValue:"Cheapest"},
          ]
          },
          value:""
        }

    }


    const navigate= useNavigate()

    const orderHandler = (event) =>{
      event.preventDefault()
        
 const order = {
  ingridients:props.ing,
  price:props.price,
  orderData:{
    name,
    email,
    deliveryMethod,
    postal,
    street,
    country,
  },
  userId:props.userId

 }

 /////
 props.onBurgerPurchase(order, props.token)

 
    }

    const onchangeHandler = (event, identifier) =>{
      switch(identifier){
        case "name":
          setName(event.target.value)
          break
        case "email":
          setEmail(event.target.value)
          break
        case "country":
          setCountry(event.target.value)
          break
        case "postal":
          setPostal(event.target.value)
          break
        case "street":
          setStreet(event.target.value)
          break
        case "deliveryMethod":
          setDeliveryMethod(event.target.value)
          break
          default:
            break

      }
      contactForm[identifier].value = identifier
    }
    let inputs = []
    for(let key in contactForm){
      inputs.push({...contactForm[key], id:key})
    }
    let form = (
      <form className={classes.Form} onSubmit = {orderHandler}>
        {inputs.map((input, index) => (
        <Input
          key = {input.id}
          onchange = {(event) =>onchangeHandler(event, input.id)}
          input_type = {input.elementType} 
          elementConfig={input.elementConfig} 
          value={input.value}
        />)
        )}
        
        <Button btnType = "Success">Order</Button>
      </form>
    )

    if(props.loading){
      form = <Spinner/>
    }
    if(props.purchased){
      form = <Navigate to = "/"/>
    }


  return (
    <div className={classes.ContactData}>
      <h1>Enter Your Contact Data</h1>
      {form}
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    loading:state.order.loading,
    ing:state.buildReducer.ingridients,
    price:state.buildReducer.price,
    purchased:state.order.purchased,
    token:state.auth.token,
    userId:state.auth.userId,
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onBurgerPurchase:(orderData, token)=>dispatch(actionType.purchaseBurger(orderData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( WithErrorHandler( ContactData, axios))
