import React from 'react';

export default function Satesto({ product }) {
  return (
    <>
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h5>{product.category}</h5>
        <p>{product.description.slice(0, 200)}...</p>
      </div>
    </>
  );
}
