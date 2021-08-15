import { MainNav, ProductCard } from "../Components";
import { useCart } from "../Contexts";

export const Cart = () => {
  const {
    state: { itemsInCart },
  } = useCart();
  console.log(itemsInCart);
  return (
    <>
      <MainNav />
      <div className="products-listing">
        {itemsInCart.map((product) => {
          console.log("hi", product);
          return <ProductCard product={product.product} />;
        })}
      </div>
    </>
  );
};
