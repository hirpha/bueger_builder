import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import Styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  let modal = <p></p>
  if(props.show){
    modal = (<Auxilary>
    <Backdrop show ={props.show} close = {props.showModal}/>
    <div className={Styles.Modal}>
  {props.children}
</div>

</Auxilary>)
  }
  return modal
}

export default Modal
