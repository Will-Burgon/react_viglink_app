import React from 'react';
import Product from './product/product'

const Products = (props) => props.products.map((product, index)=>{
    return (
      
         <Product
         name = {product.name}
         price = {product.price}
         merchant = {product.merchant}
         url = {product.url}
         img = {product.imageUrl}
         key = {product.feedMerchantId + index}
         />
        
        
    )
})

export default Products