import React from "react";

import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/";

const product = {
  id: "1",
  title: "Coffee",
  img: "./coffee-mug.png",
};

function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe rico!!" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Cafe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
