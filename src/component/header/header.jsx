import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {BsFillSearchHeartFill} from "react-icons/bs"
import "./header.css"
function Header() {
  return (
    <div>
        <div className="header">
            <div className="header__items">
                <div className="header__user">
                    <FaUserAlt className='header__icon'/>
                    <span>Log in</span>
                </div>
                <div className="header__search">
                      <BsFillSearchHeartFill className='header__icon'/>
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header