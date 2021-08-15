import { CategoryCard } from ".";
import { useCategories } from "../Contexts";

export const CategoriesListing = () => {
  const {
    state: { categories },
  } = useCategories();

  console.log(categories);

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
