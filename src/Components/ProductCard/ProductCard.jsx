import "./ProductCard.css";
import { useCartActions } from "../../hooks/useCartActions";
import { useWishlistActions } from "../../hooks/useWishlistActions";
import { useCart, useWishlist } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCartActions();
  const { addToWishlist, removeFromWishlist } = useWishlistActions();
  const {
    state: { itemsInCart },
  } = useCart();
  const navigate = useNavigate();

  const {
    state: { itemsInWishlist },
  } = useWishlist();

  const inWishlist = {
    color: "#f50057",
  };

  const notInWishlist = {
    color: "#1c4757",
  };

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

  return (
    <>
      <div className="card-demo" key={product._id}>
        <div className="card-container">
          <img
            className="product-image"
            src={product.imageUrl}
            alt="product"
            onClick={() => navigate(`/products/${product._id}`)}
          />
          <div className="product-name-with-wishlist-icon">
            <h4
              className="product-name"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              {product.name}
            </h4>
            <i
              className="fas fa-heart fa-2x wishlist"
              style={!isItemInWishlist() ? notInWishlist : inWishlist}
              onClick={() =>
                !isItemInWishlist()
                  ? addToWishlist(product._id)
                  : removeFromWishlist(product._id)
              }
            ></i>
          </div>
          <p className="product-description-text"></p>

          <div className="product-price">
            <p
              className="current-product-price"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              ₹{product.price}
            </p>
          </div>
          <button
            className="button primary-btn add-to-cart"
            onClick={() => {
              !isItemInCart() ? addToCart(product._id) : navigate("/cart");
            }}
          >
            {!isItemInCart() ? "ADD TO CART" : "GO TO CART"}
          </button>
          <div className="card-badge-offer">
            {product.discount && (
              <div className="badge-type offer">{product.offer}% off</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
