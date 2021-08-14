import "./MainNav.css";
import { Link, useNavigate } from "react-router-dom";

export const MainNav = () => {
  const navigate = useNavigate();
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
        alt="logo"
        className="hero-image"
      ></img>
      <div className="hero-name" onClick={() => navigate("/")}>
        MITRA CART
      </div>
      <Link to="/products" className="get-started">
        Products
      </Link>
      <div class="badge-on-icon">
        <div class="icon-type wishlist">
          <i class="fas fa-heart"></i>
          <div class="badge-type count">23</div>
        </div>
      </div>
      <div class="badge-on-icon">
        <div class="icon-type cart">
          <i class="fas fa-shopping-cart"></i>
          <div class="badge-type count">23</div>
        </div>
      </div>
    </div>
  );
};
