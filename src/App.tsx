import React, { useState } from "react";
import "./App.css";

import { ProductDetail } from './pages/Product/Details'
import { ProductList } from './pages/Product/List'

function App() {
  const [productId, setProductId] = useState<number | null>(null)

  const onProductDetail = (id: number) => {
    setProductId(id)
  }

  const onBackToList = () => {
    setProductId(null)
  }

  return (
    <div className="App">
      {productId !== null ? <ProductDetail onBackToList={onBackToList} id={productId} /> : <ProductList onProductDetail={onProductDetail} />}
    </div>
  )
}

export default App;
