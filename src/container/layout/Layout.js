import React, { useState } from 'react'
import Auxilary from '../../hoc/Auxilary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Style from "./Layout.module.css"

const Layout = (props) => {

   const [showSideDrawer , setShowSideDrawer] = useState(false);

   const closeSideDrawer = () =>{
      setShowSideDrawer(false)
   }

   const showSideDrawerHandler =() =>{
      console.log(showSideDrawer)
      setShowSideDrawer(!showSideDrawer)
   }

   return(
 <Auxilary>
   <Toolbar clicked = {showSideDrawerHandler}/>
   <SideDrawer show = {showSideDrawer} closed = {closeSideDrawer} />
    <main className={Style.Content}>
       { props.children}
    </main>
 </Auxilary>
   )
 
   }

export default Layout
