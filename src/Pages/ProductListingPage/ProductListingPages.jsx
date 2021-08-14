import { MainNav, ProductCard } from "../../Components";
import { useProducts } from "../../Contexts";
import "./ProductListingPage.css";

export const ProductListingPage = () => {
  const {
    state: { products },
  } = useProducts();
  return (
    <>
      <MainNav />
      <div className="products-listing">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};
