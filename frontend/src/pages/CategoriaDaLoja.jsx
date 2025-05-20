import React, { useContext } from 'react'
import './css/CategoriaDaLoja.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import { Item } from '../components/item/Item'

export const CategoriaDaLoja = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 36 produtos
        </p>
        <div className="shopCategory-sort">
          Organizar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item,i) => {
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Ver Mais
      </div>
    </div>
  )
}
