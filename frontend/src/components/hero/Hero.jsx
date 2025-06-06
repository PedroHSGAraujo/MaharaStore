import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>SOMENTE NOVIDADES</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Novas</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Coleções</p>
          <p>Pra Todo Mundo</p>
        </div>
        <div className="hero-latest-btn">
          <div>Ultima Coleção</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}
