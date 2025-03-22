import React from 'react';

export default function Satesto({ product }) {
  return (
    <>
      <div className="card" style={product.price > 100 ? {border: '2px solid black'} : {border: '2px solid red'}}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h2>{product.price}$</h2>
        <h5>{product.category}</h5>
        <p>{product.description.slice(0, 200)}...</p>
      </div>
    </>
  );
}
