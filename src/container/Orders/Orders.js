import React, { useEffect } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionType from "../../store/actions/index"
import { connect } from 'react-redux'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

const Orders = (props) => {

    useEffect(()=>{
        props.onFetchOrder(props.token, props.userId)
    },[props])

let order = <p>There is no data found</p>
if(props.orders){
   order =  props.orders.map((order, index) => {
        return <Order ingridients = {order.ingridients} price = {order.price}  key = {index}/>
    })
 
    
}
if (props.orders.length === 0) {
    order = <p>There is no data found</p>
}
if(props.loading){
    order = <Spinner/>
}

  return (
    <div>
        {order}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        loading:state.order.loading,
        orders:state.order.orders,
        token:state.auth.token,
        userId:state.auth.userId,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder:(token,userId) => dispatch(actionType.fechOrder(token,userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (WithErrorHandler(Orders, axios))
