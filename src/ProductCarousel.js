import React, { useState } from "react";
import products from "./products.json";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        position: "relative",
      }}>
      <button onClick={prevSlide} style={ {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  }}>{"<"}</button>
      <div style={ {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    textAlign: "center",
  }}>
        {products.map((product, index) => (
          <div
            key={product.id}
            
          >
            <img src={product.image} alt={product.product} style={{
    width: "200px",
    height: "200px",
    objectFit: "cover",
  }} />
            <h3>{product.product}</h3>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} style={ {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  }}>{">"}</button>
    </div>
  );
};


export default ProductCarousel;