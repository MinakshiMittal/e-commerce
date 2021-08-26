import { useNavigate } from "react-router-dom";
import { MainNav, CartCard } from "../../Components";
import { useAuth, useCart } from "../../Contexts";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { itemsInCart },
  } = useCart();

  const { isUserLogin } = useAuth();
  const navigate = useNavigate();
  const cartLength = itemsInCart.length;

  const totalPrice = () => {
    return itemsInCart.reduce((acc, product) => {
      return product.quantity * product.product.price + acc;
    }, 0);
  };

  return (
    <>
      <MainNav />
      {cartLength && (
        <>
          <h1 className="total-price">Total Price: ₹{totalPrice()}</h1>
          <div className="products-listing cart">
            {itemsInCart.map((product) => {
              return (
                <CartCard
                  product={product.product}
                  quantity={product.quantity}
                  key={product._id}
                />
              );
            })}
          </div>
          <div className="checkout-btn-container">
            <button
              className="button primary-btn checkout"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
      {isUserLogin && !cartLength && (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#2cb8cb",
            marginTop: "10rem",
          }}
        >
          Cart is Empty!!!
        </h1>
      )}
    </>
  );
};
