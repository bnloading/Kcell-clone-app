import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiSquares2X2} from "react-icons/hi2"
import {RiShoppingBag3Fill} from "react-icons/ri"
import {SiCashapp} from "react-icons/si"
import "./navbar.css"
function Navbar() {
  return (
    //rgb(49,50,56)
    //rgb(28,29,33)
    <div className='nav'>
        <ul className='navbar__list'>
            <li className='nav__name'>
                
                </li>
                <li className='nav__icon'>
            <AiFillHome/>
            <span className='text'>Home</span>  
            
            </li> 
            <li className='nav__name'>
                
                </li>
                <li className='nav__icon'>
            <SiCashapp/>
            <span className='text'>Bank</span>
            </li>
            <li className='nav__name'>
               
                </li>
                <li className='nav__icon'>
            <RiShoppingBag3Fill/>
            <span className='text' >Store </span>
            </li>
            <li className='nav__name'>
              
                </li>
                <li className='nav__icon'>
            <HiSquares2X2/>
            <span className='text'>More</span>
            </li>
            
            

        </ul>
        


    </div>
  )
}

export default Navbar