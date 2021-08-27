import { useParams } from "react-router-dom";
import { useProducts } from "../../Contexts";
import "./ProductDetailsPage.css";

export const ProductDetailsPage = () => {
  const {
    state: { products },
  } = useProducts();

  const { productId } = useParams();

  const product = products?.find((product) => product._id === productId);

  console.log(product);

  const { name, imageUrl, price } = product;
  return (
    <>
      <h1>Product Details</h1>
      <div className="product-details-page">
        <div>
          <img
            className="product-image details-page"
            src={imageUrl}
            alt="product"
          />
        </div>
        <div>
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <button className="button tertiary-btn">Add to Wishlist</button>
          <button className="button primary-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};
