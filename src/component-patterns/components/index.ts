import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
