import React from 'react'
import './css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Registre-se</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Seu Nome '/>
          <input type="email" placeholder='Seu Email '/>
          <input type="password" placeholder='Senha' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Já tem uma conta? <span>Fazer login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>Ao continuar, concordo com os Termos de Uso e a Política de Privacidade.</p>
        </div>
      </div>
    </div>
  )
}
