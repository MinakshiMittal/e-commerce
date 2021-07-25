import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-demo"
      onClick={() => navigate(`/categories/${category._id}`)}
      key={category._id}
    >
      <img className="category-image" src={category.imageUrl} alt="product" />
      <h1 className="category-name">{category.name}</h1>
    </div>
  );
};
