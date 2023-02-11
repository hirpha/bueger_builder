import style from './App.module.css';
import Layout from './container/layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import { BrowserRouter , Navigate, } from 'react-router-dom';
import { Routes, Route } from "react-router"

import { connect } from 'react-redux';

import * as actionTypes from "./store/actions/index"
import { useEffect } from 'react';

import Auth from './components/Auth/Auth';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';
import Logout from './components/Auth/Lougut/Logout';
import ContactData from './container/Checkout/ContactData/ContactData';



function App(props) {

  useEffect(()=>{
    props.onAutoLogin()
  })

  let routes = (
    <Routes>
          <Route path='/auth' element = {<Auth/>}/>
          <Route path='/' exact element = {<BurgerBuilder/>}/>
          <Route path='*' element={<Navigate to="/" replace />}/>
    </Routes>
  ) 
  if( props.isAuth) {
    routes= <Routes>
     <Route path='/checkout'  element = {<Checkout/>}/>
      <Route path='/orders' element = {<Orders/>}/>
      <Route path= {"/checkout/contact-data"} exact element = {<ContactData/>} ></Route>
      <Route path='/logout' element = {<Logout/>}/>
      <Route path='/' exact element = {<BurgerBuilder/>}/>
      <Route  path="*" element={<Navigate to="/" replace />}/>
      
    
  </Routes>
  }
  return (
    
      <div className={style.App}>
        
        <Layout>
        {routes}
        </Layout>
        
      </div>
    
  );
}

const mapStateToProps = state =>{
  return {
    isAuth:state.auth.token != null
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onAutoLogin:()=> dispatch(actionTypes.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
