import React from 'react'
import "./Payment.css"
import {BsPersonVcardFill,BsFillCreditCardFill} from "react-icons/bs"
import {AiFillShop} from "react-icons/ai"
import {FaShoppingBag} from "react-icons/fa"
import {FaBalanceScale} from "react-icons/fa"


function Payment() {
  return (
    <div className='payment'>
        <div className="payment__items">
            <BsPersonVcardFill className='icon'/>
            <p>IMEI registration</p>
        </div>
        <div className="payment__items">
        <AiFillShop className='icon'/>
            <p>Shop</p>
        </div>
        <div className="payment__items">
        <FaShoppingBag className='icon'/>
        <p>Services</p>
        <p className='new'>New</p>
          
            
        </div>
        <div className="payment__items">
        <BsFillCreditCardFill className='icon'/>
            <p>Payment and transfers</p>
            
        </div>
        <div className="payment__items">
        <FaBalanceScale className='icon'/>
            <p>Extra balance</p>
            
        </div>
        <div className="payment__items">
        <BsPersonVcardFill className='icon'/>
            <p>Tariffs</p>
            
        </div>
    </div>
  )
}

export default Payment