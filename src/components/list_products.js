import React from 'react';
import ProductItem from './product_item';

const ProductList = () => {
  return (
    <div className="product-list">
      <h3>Products:</h3>
      <ul className="product-list-ul">
        <ProductItem />
      </ul>
    </div>
  );
}

export default ProductList;
