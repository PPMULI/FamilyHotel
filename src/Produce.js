import React from 'react'

const Product = ({ product, onAddToCart }) => {
    const { id, name, price, food } = product;
   
    return (
      <div className="product">
        <h3>{product.food.knownAs}</h3>
        <img src={product.food.image} alt="" />
        <p>Price: {product.food.id}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button >Details</button>
      </div>
    );
  };

export default Product;