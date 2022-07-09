import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom'
import { currency, getProductById } from 'home/products'

import placeAddToCard from 'addtocart/placeAddToCart'

const PDPContent = () => {
  const { id } = useParams()

  const addToCart = useRef(null)

  const [product, setProduct ] = useState(null)

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct)
    } else {
      setProduct(null)
    }
  }, [id])

  useEffect(() => {
    if(addToCart.current) {
      placeAddToCard(addToCart.current, product.id)
    }
  }, [product])

  if (!product) return null

  return(
    <div className="grid grid-cols-2 gap-5">
     <div>
      <img src={product.image} alt={product.name} />
     </div>
     <div>
      <div className="flex"> 
        <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
        <p className="font-bold text-3xl flex-end">
          {currency.format(product.price)}
        </p>
      </div>

      <div ref={addToCart}></div>
      <p className="mt-10">{product.description}</p>
      <p className="mt-10">{product.longDescription}</p>
     </div>
    </div>
  )
}

export default PDPContent
