'use client'

import { useEffect, useState } from "react"
import ProductApi from "../_Data/ProductApi"
import ProductList from "./ProductList"



function ProductSection() {
    const [productList , setProductList] =useState([])
    
    useEffect(()=>{
        getLatestProducts_()
    },[])
    const getLatestProducts_ =() => {
        ProductApi.getLatestProducts().then((res) => {
            
            setProductList(res.data.data)
            console.log(res.data.data)
        })
    }
  return ( 
    <div>
    
    <div className=" mt-2 flex justify-between ml-9 pb-7 text-2xl">

      <h2>Brand New</h2>

    <div className=" mr-9 text-base flex gap-2  text-teal-500 cursor-pointer ">
       <span className=" ">View All Collection </span>
        {`-->`}
      
    </div>
    </div>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection
