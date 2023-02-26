
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header';
import Shopbox from './Component/Shopbox';



const App = () => {

  let [data,setdata] = useState(0)
  let api =(value)=>{
 
        setdata(value.length)
    
  }
  console.log(data)

  return (
    <div>
      <Header data={data}/>
      <Shopbox api={api} />
     
    
    </div>
  );
}

export default App;




