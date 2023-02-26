import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/fontawesome-svg-core"






const Product = ({Product,handle}) => {
   
    return (
        <div className='d-flex'>
            <div className="image">
                <img src={Product.img} alt="" />
            </div>
            <div className='p-5'>


            <h5>{Product.name}</h5>
            <br />
            <p> by: {Product.seller}</p>
            <h4> Price: {Product.price}</h4>
            <small>only {Product.stock} left in stock - order soon</small>
            <br />
            <button onClick={()=>handle(Product)}  className="btn m-3 bg-info">
              
<FontAwesomeIcon icon={faShoppingCart} /> Add to Card</button>
            </div>
        </div>
    );
}

export default Product;
