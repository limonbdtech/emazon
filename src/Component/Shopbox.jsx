import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../fakeData';
import Order from './Order';
import Product from './Product';

const Shopbox = ({api}) => {
    let [product,setproduct] = useState([])
    let handle = (Product)=>{
      setproduct([...product,Product])
    }
    api(product)
    return (
      <div className='row '>
        <div className="products ms-auto col-8 ">
           {fakeData.map(item=><Product key={item.key} handle={handle} Product={item}/>)}
        </div>
        <div className="orderbox col-2">
            <h1>{product.length}</h1>
              <Order order={product}></Order>
        </div>
      </div>  
    )
      
}

export default Shopbox;
