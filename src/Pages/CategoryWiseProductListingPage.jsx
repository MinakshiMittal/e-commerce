import axios from "axios";
import { useEffect, useState } from "react";
import { MainNav, ProductCard, SortBy, Filter } from "../Components";
import { useParams } from "react-router-dom";

export const CategoryWiseProductListingPage = () => {
  const { categoryId } = useParams();
  const [categoryWiseProducts, setCategoryWiseProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `https://mitra-cart-2.mittalminakshi.repl.co/categories/${categoryId}`
        );

        if (status === 200) {
          setCategoryWiseProducts(data.category.products);
        }
        console.log(data.category.products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setCategoryWiseProducts, categoryId]);

  return (
    <>
      <MainNav />
      <div className="products-listing">
        <div className="sort-and-filter-container">
          <SortBy />
          <Filter />
        </div>
        <div className="products-container">
          {categoryWiseProducts.map((productItem) => {
            return (
              <ProductCard
                product={productItem.product}
                key={productItem.product._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
