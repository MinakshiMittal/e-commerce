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
  return (
    <>
      <h1>Product Details</h1>
      <div className="product-details-page">
        <div className="image-and-short-details">
          <div>
            <img
              className="product-image details-page"
              src={product?.imageUrl}
              alt="product"
            />
          </div>
          <div>
            <h2 className="product-name">{product?.name}</h2>
            <p className="product-price">Price: {product?.price}</p>
            <p className="product-category">Category: {product?.category}</p>
            <p className="product-offer">Offer: {product?.offer}%</p>
            <p className="product-stock">Stock: {product?.stock} left</p>
            <div className="action-buttons">
              <button className="button tertiary-btn">Add to Wishlist</button>
              <button className="button primary-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="about-the-item">
          <h1>Description</h1>
          <ul>
            {product?.aboutThisItem.map((info) => {
              return <li>{info}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
