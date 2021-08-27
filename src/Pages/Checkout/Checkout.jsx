import { useCart } from "../../Contexts";
import "./Checkout.css";

export const Checkout = () => {
  const {
    state: { itemsInCart },
  } = useCart();

  const totalPrice = () => {
    return itemsInCart.reduce((acc, product) => {
      console.log("product", product);
      return product.quantity * product.product.price + acc;
    }, 0);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Order Checkout</h1>
      <div className="checkout-details">
        <div className="order-details-heading">
          <h2>Product Name</h2>
          <h2>Quantity</h2>
          <h2>Total Price</h2>
        </div>
        {itemsInCart.map((product) => {
          return (
            <div className="product-wise-detail">
              <p>{product.product.name}</p>
              <p>x{product.quantity}</p>
              <p>₹{product.quantity * product.product.price}</p>
            </div>
          );
        })}
        <p>Grand Total: ₹{totalPrice()}</p>
      </div>
    </div>
  );
};
