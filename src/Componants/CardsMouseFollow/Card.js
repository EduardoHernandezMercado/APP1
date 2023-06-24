import React, { useState, useRef } from "react";
import "./Card.css";

export default function Card() {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  return (
    
      <div
        className="card"
        ref={cardRef}
      >
        <img
          ref={imgRef}
          src={require("./IMG/xbox.png")}
          alt="xbox"
          className="sneaaker-img"
        />
        <h1 className="title" ref={titleRef}>
           CURSO DE REACT
        </h1>
        <p ref={descRef}>
            Instructor Benito Samuel López Razo
        </p>
       
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" >
            ir al sitio web
          </button>
        </div>
      </div>
  );
}
