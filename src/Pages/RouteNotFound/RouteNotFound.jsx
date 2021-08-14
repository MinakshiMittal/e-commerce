import "./RouteNotFound.css";
import PageNotFound from "../../Assets/PageNotFound.svg";

export const RouteNotFound = () => {
  return (
    <div className="route-not-found">
      <img className="error-image" src={PageNotFound} alt="404 page" />
    </div>
  );
};
