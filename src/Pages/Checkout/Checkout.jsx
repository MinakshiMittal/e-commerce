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
          <h2 className="name-heading">Product Name</h2>
          <h2 className="quantity-heading">Quantity</h2>
          <h2 className="price-heading">Total Price</h2>
        </div>
        {itemsInCart.map((product) => {
          return (
            <div className="product-wise-details">
              <p className="product-wise-name">{product.product.name}</p>
              <p className="product-wise-quantity">x{product.quantity}</p>
              <p className="product-wise-price">
                ₹{product.quantity * product.product.price}
              </p>
            </div>
          );
        })}
        <p className="grand-total">Grand Total: ₹{totalPrice()}</p>
        <button className="button primary-btn place-order">Place Order</button>
      </div>
    </div>
  );
};
