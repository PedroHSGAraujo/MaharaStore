import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

export const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">R${product.old_price}</div>
                <div className="productdisplay-right-price-new">R${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis.
                Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Sapien in monti palavris qui num significa nadis i pareci latim.
                Delegadis gente finis, bibendum egestas augue arcu ut est.
            </div>
            <div className="productdisplay-right-size">
                <h1>Selecionar Tamanho</h1>
                <div className="productdisplay-right-sizes">
                    <div>P</div>
                    <div>M</div>
                    <div>G</div>
                    <div>GG</div>
                    <div>G1</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD AO CARRINHO</button>
            <p className='productdisplay-right-category'><span>Categoria: </span>Pulseira</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Recente, Verão</p>
        </div>
    </div>
  )
}
