import { useParams, useNavigate } from "react-router-dom";
import { useAuth, useCart, useProducts, useWishlist } from "../../Contexts";
import { useCartActions } from "../../hooks/useCartActions";
import { useWishlistActions } from "../../hooks/useWishlistActions";
import "./ProductDetailsPage.css";
import { MainNav } from "../../Components";

export const ProductDetailsPage = () => {
  const {
    state: { products },
  } = useProducts();
  const { isUserLogin } = useAuth();
  const { addToCart } = useCartActions();
  const {
    state: { itemsInCart },
  } = useCart();
  const {
    state: { itemsInWishlist },
  } = useWishlist();
  const { addToWishlist, removeFromWishlist } = useWishlistActions();

  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products?.find((product) => product._id === productId);

  const isItemInWishlist = () => {
    return (
      itemsInWishlist?.find((item) => item.product._id === product._id) !==
      undefined
    );
  };

  const isItemInCart = () => {
    return (
      itemsInCart?.find((item) => item.product._id === product._id) !==
      undefined
    );
  };

  const addToCartHandler = () => {
    if (isUserLogin) {
      !isItemInCart() ? addToCart(product._id) : navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <MainNav />
      <h1 className="product-details">Product Details</h1>
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
            <p className="product-price">Price: ₹{product?.price}</p>
            <p className="product-category">Category: {product?.category}</p>
            {product?.offer && (
              <p className="product-offer">Offer: {product?.offer}%</p>
            )}
            <p className="product-stock">Stock: {product?.stock} left</p>
            <div className="action-buttons">
              <button
                className="button tertiary-btn"
                onClick={() =>
                  !isItemInWishlist()
                    ? addToWishlist(product._id)
                    : removeFromWishlist(product._id)
                }
              >
                {!isItemInWishlist()
                  ? "Add to Wishlist"
                  : "Remove From Wishlist"}
              </button>
              <button
                className={
                  !isItemInCart()
                    ? "button primary-btn add"
                    : "button primary-btn in-cart"
                }
                onClick={addToCartHandler}
              >
                {isUserLogin
                  ? !isItemInCart()
                    ? "ADD TO CART"
                    : "GO TO CART"
                  : "ADD TO CART"}
              </button>
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
