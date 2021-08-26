import { CategoryCard } from "..";
import { useCategories } from "../../Contexts";
// import { Loader } from "../../Components";
import "./CategoriesListing.css";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

export const CategoriesListing = () => {
  const {
    state: { categories, error },
  } = useCategories();

  return (
    <>
      <h2 className="categories-title">Categories</h2>
      <div className="categories-container">
        <h1>{error}</h1>
        {!categories && <h1 style={{ color: "white" }}>Hi</h1>}
        {categories?.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })}
      </div>
    </>
  );
};
