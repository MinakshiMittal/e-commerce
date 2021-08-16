import "./ProductCard.css";
import { useCartActions } from "../../hooks/useCartActions";
import { useCart } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCartActions();
  const {
    state: { itemsInCart },
  } = useCart();
  const navigate = useNavigate();

  console.log(itemsInCart);

  const inWishlist = {
    color: "",
  };

  const isItemInCart = () => {
    return (
      itemsInCart?.find((item) => item.product._id === product._id) !==
      undefined
    );
  };

  console.log("function", isItemInCart());
  return (
    <>
      <div className="card-demo" key={product._id}>
        <div className="card-container">
          <img className="product-image" src={product.imageUrl} alt="product" />
          <div className="product-name-with-wishlist-icon">
            <h4 className="product-name">{product.name}</h4>
            <i className="fas fa-heart fa-2x wishlist" style={inWishlist}></i>
          </div>
          <p className="product-description-text"></p>

          <div className="product-price">
            <p className="current-product-price">₹{product.price}</p>
            {/* <small className="striked-original-price">₹1299</small>
            <small className="amount-saved">Save: ₹700</small> */}
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
