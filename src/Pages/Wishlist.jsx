import { MainNav, ProductCard } from "../Components";
import { useWishlist } from "../Contexts";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
  } = useWishlist();
  console.log(itemsInWishlist);
  return (
    <>
      <MainNav />
      <div className="products-listing">
        {itemsInWishlist.map((product) => {
          console.log("hiwish", product.product);
          return <ProductCard product={product.product} />;
        })}
      </div>
    </>
  );
};
