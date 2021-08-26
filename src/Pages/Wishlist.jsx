import { MainNav, WishlistCard } from "../Components";
import { useWishlist } from "../Contexts";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
  } = useWishlist();

  const wishlistLength = itemsInWishlist.length;

  return (
    <>
      <MainNav />
      {wishlistLength && (
        <div className="products-listing">
          {itemsInWishlist.map((product) => {
            return (
              <WishlistCard
                product={product.product}
                key={product.product._id}
              />
            );
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
