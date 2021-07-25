import { useEffect, useState } from "react";
import { CategoryCard } from ".";
import axios from "axios";

export const CategoriesListing = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          "https://mitra-cart.mittalminakshi.repl.co/categories"
        );
        console.log(data.categories, status);

        if (status === 200) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [categories]);

  return (
    <>
      <h2
        style={{
          fontSize: "3rem",
          margin: "2rem 1rem 1rem 1rem",
          color: "white",
        }}
      >
        Categories
      </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {categories?.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
    </>
  );
};
