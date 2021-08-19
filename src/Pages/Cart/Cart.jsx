import { MainNav, CartCard } from "../../Components";
import { useCart } from "../../Contexts";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { itemsInCart },
  } = useCart();
  return (
    <>
      <MainNav />
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
  );
};
