import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusivo</h1>
        <h1>Ofertas Para Você</h1>
        <p>SOMENTE EM PRODUTOS MAIS VENDIDOS</p>
        <button>Confira</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}
