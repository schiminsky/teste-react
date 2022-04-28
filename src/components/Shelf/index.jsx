import React, {useState} from 'react';
import Products from '../Products';

import './style.css';


const Shelf = ({addProduct}) => {
    
    return(
        <div>
            <div className="shelf-text">
                <p className="shelf-seller">Mais Vendidos</p>
            </div>
            <div className='container-shelf'>
                <Products addToCart={addProduct}/>
            </div>
        </div>
    )
}

export default Shelf;