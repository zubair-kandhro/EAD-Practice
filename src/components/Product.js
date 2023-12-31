import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Product = () => {
    const {productId} = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
          setData(response.data);
          console.log(response);
        });
      }); 

  return (
    <div className='container' style={{width: '100%', height: '80vh'}}>
      <div className='row mt-5'>
        <div className='col mt-5'>
            <img src={data.image} alt={data.image} style={{width: '400px'}}/>
        </div>
        <div className='col mt-5'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
