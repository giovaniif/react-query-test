import React, { useState, useEffect } from 'react'

import Axios from 'axios'

import { Product } from '../../../types/product'
import { useQuery } from 'react-query'

const fetchProducts = () => Axios.get('http://localhost:3333/products').then(res => res.data)

type Props = { onProductDetail: (id: number) => void }

export const ProductList = ({ onProductDetail }: Props) => {

  const { data: products, isLoading } = useQuery<Product[]>(['products'], () => fetchProducts())

  if (isLoading || !products) {
    return <h1>Loading products list...</h1>
  }

  return (
    <div className="container">
      <h1>Products list</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <a href="#" onClick={() => onProductDetail(product.id)}>Detail</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
