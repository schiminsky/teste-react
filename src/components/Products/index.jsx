import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import api from '../../services/api';
import formatValue from "../../services/formatValue";
import './style.css';

const Products = ({addToCart}) => {
    const settings={
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    className: "shelf-content",
  }
    const [products, setProducts] = useState([])
    useEffect(()=>{
        api.get("products").then(response=>{
            setProducts(
                response.data.map(product=>{
                    console.log(product)
                    return {...product}
                })
            )
        })
    })
    return(
        <Slider {...settings}>
          {products.map(({imageUrl, listPrice, price, productId, productName, stars, installments})=>{
            console.log(installments[0])
            return(
              <div className="shelf-item" id={productId} data-product-name={productName}>
                  <div className="box-image">
                    <img src={imageUrl}  alt="" className="product-image"/>
                      {listPrice ? (<p className="product-flag"></p>) : ''}
                    </div>
                  <div className="product-info">
                      <p className="product-info-name">{productName}</p>
                      <div className="product-info-rating" >
                        {stars > 0 ? (<span className="star checked"></span>) : (<span className="star"></span>)}
                        {stars > 1 ? (<span className="star checked"></span>) : (<span className="star"></span>)}
                        {stars > 2 ? (<span className="star checked"></span>) : (<span className="star"></span>)}
                        {stars > 3 ? (<span className="star checked"></span>) : (<span className="star"></span>)}
                        {stars > 4 ? (<span className="star checked"></span>) : (<span className="star"></span>)}
                      </div>
                      <div className="product-info-price"> 
                        <p className="list-price">{listPrice ? 'de ' + formatValue(String(listPrice)) : ''}</p>
                        <p className="price">Por {formatValue(String(price))}</p>
                      </div>
                      <p className="product-info-installment">
                        {installments[0] ? `ou em ${installments[0].quantity} x de ${formatValue(String(installments[0].value))}` : ''} 
                      </p>                    
                  </div>
                  <button className="buy-btn" onClick={addToCart}>COMPRAR</button>
              </div>
            )            
          }) }
        </Slider>
      )

}

export default Products;