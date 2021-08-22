import { MainNav, CartCard } from "../../Components";
import { useCart } from "../../Contexts";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { itemsInCart },
  } = useCart();

  const totalPrice = () => {
    return itemsInCart.reduce((acc, product) => {
      console.log("product", product);
      return product.quantity * product.product.price + acc;
    }, 0);
  };

  const cartLength = itemsInCart.length;

  console.log("price", totalPrice());

  return (
    <>
      <MainNav />
      {cartLength && (
        <>
          <h1
            style={{ marginTop: "5rem", color: "#2cb8cb", textAlign: "center" }}
          >
            Total Price: ₹{totalPrice()}
          </h1>
          <div className="products-listing cart">
            {itemsInCart.map((product) => {
              return (
                <CartCard
                  product={product.product}
                  quantity={product.quantity}
                  key={product.product._id}
                />
              );
            })}
          </div>
        </>
      )}
      {!cartLength && (
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
