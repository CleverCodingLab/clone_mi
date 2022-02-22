import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductReviewsCard key={item.image} name = {item.name} price = {item.price} image = {item.image} review = {item.review} index = {index}/>
        ))}
    </div>
  )
}
export default ProductReviews