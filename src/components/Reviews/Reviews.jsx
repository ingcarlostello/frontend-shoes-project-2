import React from 'react';

const Reviews = ({ idShoe }) => {
  return (
    <>
      <div
        className="fb-comments"
        data-href="http://localhost:3000/productDetail/1"
        data-width=""
        data-numposts="10"
      ></div>
    </>
  );
};

export default Reviews;

