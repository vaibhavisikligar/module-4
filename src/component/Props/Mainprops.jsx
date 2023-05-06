import React, { useState } from 'react'
import Productlist from './Productlist'
import { Products } from './Products' 

function Mainprops() {
  const [productData, setProductData]= useState(Products)
  return (
   <div className='container py-5'>
    <div className='row'>
    <h2 className='mb-5'>Best Sellers in Computers & Accessories: {productData.length}</h2>
    {
      productData.map((item)=>{
        const {id,productImg,productTitle,productDesc,productPrice,link} = item
        return <Productlist key={id} productImg={productImg} productName={productTitle} productDesc={productDesc} productPrice={productPrice} productInfo={link}/>
      })
    }
    </div>
   </div>
  )
}

export default Mainprops