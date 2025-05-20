import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receba Promoções Exclusivas Por E-mail</h1>
      <p>Se inscreva na nossa newsletter e se mantenha atualizado</p>
      <div>
        <input type="email" placeholder='seuemail@exemplo.com' />
        <button>Inscrever-se</button>
      </div>
    </div>
  )
}
