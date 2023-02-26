import React from 'react';

const Order = ({order}) => {
    
   
    let sub = order.reduce(((total,pre)=> total + pre.price),0)

    return (
        <div>
          <h2>Price:{sub}</h2>
        
        </div>
    );
}

export default Order;
