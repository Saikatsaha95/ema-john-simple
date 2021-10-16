import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, img, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => props.handleRemove(key)} className="btn-regular">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
