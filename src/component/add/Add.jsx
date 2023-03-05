import React from 'react'
import Image from "../../assets/8519b282648259ad44c1d09c8c7fe2ef_original.173869.jpg"
import Image1 from "../../assets/be1338715c789a686f9ceaab73266a0d_original.498095.jpg"
import Image2 from "../../assets/f98eb7ce5d473b27b40a297945a698b1_original.596209.jpg"
import "./Add.css"
function Add() {
  return (
    <div className='add__items'>
        <div className="add">
        <span className='photo__text'> Samsung S23 series</span>
        <img src={Image1} alt="" />
        </div>
        <div className="add">
        <span className='photo__text'> Spring update</span>
        <img src={Image2} alt="" />
        </div>
        <div className="add">
        <span className='photo__text'>20% discount</span>
        <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default Add