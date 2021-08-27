import { MainNav, ProductCard, Filter, SortBy } from "../../Components";
import "./ProductListingPage.css";

export const ProductListingPage = ({ filteredData }) => {
  return (
    <>
      <MainNav />
      <div className="products-listing">
        <div className="sort-and-filter-container">
          <SortBy />
          <Filter />
        </div>
        <div className="products-container">
          {filteredData.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </>
  );
};
