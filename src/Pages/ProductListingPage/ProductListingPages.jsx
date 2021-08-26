import { MainNav, ProductCard, Filter, SortBy } from "../../Components";
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
        <div className="sort-and-filter-container">
          <SortBy />
          <Filter />
        </div>
        <div className="products-container">
          {products.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </>
  );
};
