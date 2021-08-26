import "./CartCard.css";
import { Loader } from "../../Components";
import { useLoader } from "../../Contexts";
import { useCartActions } from "../../hooks/useCartActions";

export const CartCard = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCartActions();
  const { loader, setLoader } = useLoader();

  return (
    <div className="cart-product-container" key={product._id}>
      <img
        className="product-image cart"
        src={product.imageUrl}
        alt="product"
      />
      <div className="card-details">
        <div className="product-name-with-wishlist-icon cart">
          <h4 className="product-name">{product.name}</h4>
        </div>
        <div className="product-price">
          <p className="current-product-price">₹{product.price * quantity}</p>
        </div>
        <div className="update-quantity-container">
          {quantity > 1 && (
            <button
              className="button primary-btn decrement"
              onClick={() => {
                setLoader("loading");
                updateQuantity(product._id, quantity - 1);
              }}
            >
              -
            </button>
          )}
          {quantity === 1 && (
            <i
              className="far fa-trash-alt button"
              onClick={() => removeFromCart(product._id)}
            ></i>
          )}
          {loader === "loading" ? (
            <Loader />
          ) : (
            <p className="quantity">{quantity}</p>
          )}
          <button
            className="button primary-btn increment"
            onClick={() => updateQuantity(product._id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="card-dismiss-button"
        onClick={() => removeFromCart(product._id)}
      >
        <i className="fas fa-lg fa-times"></i>
      </button>
    </div>
  );
};
