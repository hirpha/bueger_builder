import React from 'react'
import BurgerLogo from '../../assets/images/burger-logo.png';
import Styles from  "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={Styles.Logo} >
      <img src={BurgerLogo} alt = "Logo"></img>
    </div>
  )
}

export default Logo
