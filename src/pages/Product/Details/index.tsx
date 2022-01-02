import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import { Product } from '../../../types/product'
import { useQuery } from 'react-query'

const fetchProduct = (id: number) => Axios.get(`http://localhost:3333/products/${id}`).then(res => res.data)

type Props = { 
  id: number
  onBackToList: () => void
}

export const ProductDetail = ({ id, onBackToList }: Props) => {
  const { data: product, isLoading } = useQuery<Product>([`/products/${id}`], () => fetchProduct(id))

  if (isLoading || !product) {
    return <h1>Loading product...</h1>
  }

  return (
    <div className="container">
      <a href="#" onClick={() => onBackToList()}>Voltar a lista de produtos</a>

      <div className="row">
        <label>ID: </label>
        {product.id}
      </div>

      <div className="row">
        <label>Name: </label>
        {product.name}
      </div>

      <div className="row">
        <label>Price: </label>
        {product.price}
      </div>

      <div className="row">
        <label>Description: </label>
        {product.description}
      </div>

      <div className="row">
        <label>Image: </label>
        <img src={product.image} />
      </div>
    </div>
  )
}
