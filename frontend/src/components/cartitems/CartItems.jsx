import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png'

export const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Produtos</p>
                <p>Título</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>R${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>R${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Total do Carrinho</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub-total</p>
                            <p>R${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Frete</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>R${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Ir Para o Pagamento</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Se tiver um cupom de desconto, ponha-o aqui!</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Cupom' />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
