'use client'

import ProductApi from "../../_Data/ProductApi";
import BannerCrumb from "../../_Header/_BannerCrumb/BannerCrumb";
import ProductBanner from "../../Product-detils/[productId]/_Components/ProductBanner";
import ProductInfo from "../../Product-detils/[productId]/_Components/ProductInfo";
import ProductList from "../../_product/ProductList";

import { useEffect, useState } from "react";

function PrudactDetails({params}) {
    const [productDetails , setProductDetails] = useState({})
    const [productList , setProductList] = useState([]) 
  
    
    useEffect(() => {
        getProductById_()
    },[params.productId]);

    const getProductById_  =()=> {
        ProductApi.getProductById(params.productId)
        .then((res) => {
            setProductDetails(res.data.data)
            getProductListByCategory_(res.data.data)
        })
     
        const getProductListByCategory_ = (product) => {
          ProductApi.getProductByCategory(product?.attributes?.category)
          .then((res) => {
            setProductList(res.data.data)
          })
        }
    } 
  return (
    <div className=" px-10 md:px-28 py-8 ">
    
      <BannerCrumb product={productDetails} />
        <div className=" grid grid-cols-1  md:grid-cols-2 mt-10 gap-5 md:gap-5 justify-around ">
            <ProductBanner product={productDetails}/>
            <ProductInfo product={productDetails}/>
        </div>
        <h2 className=" mt-24 text-2xl mb-7">Similar Products</h2>
        <hr/>
            <ProductList productList={productList}/>
    </div>
  )
}

export default PrudactDetails;
