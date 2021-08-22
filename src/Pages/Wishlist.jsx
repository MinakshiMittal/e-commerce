import { MainNav, WishlistCard } from "../Components";
import { useWishlist } from "../Contexts";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
  } = useWishlist();
  console.log(itemsInWishlist);

  const wishlistLength = itemsInWishlist.length;

  return (
    <>
      <MainNav />
      {wishlistLength && (
        <div className="products-listing">
          {itemsInWishlist.map((product) => {
            console.log("hiwish", product.product);
            return <WishlistCard product={product.product} />;
          })}
        </div>
      )}
      {!wishlistLength && (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#2cb8cb",
            marginTop: "10rem",
          }}
        >
          Wishlist is Empty!!
        </h1>
      )}
    </>
  );
};
