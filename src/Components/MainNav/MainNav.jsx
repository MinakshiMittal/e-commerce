import "./MainNav.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useWishlist, useAuth } from "../../Contexts";

export const MainNav = () => {
  const navigate = useNavigate();
  const {
    state: { itemsInCart },
  } = useCart();
  const {
    state: { itemsInWishlist },
  } = useWishlist();

  const { logout, isUserLogin } = useAuth();

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
      {isUserLogin && (
        <i
          className="fas fa-sign-out-alt"
          style={{ marginRight: "2rem", cursor: "pointer" }}
          onClick={() => logout()}
        ></i>
      )}
      {!isUserLogin && (
        <button
          className="button primart-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
      <Link to="/products" className="get-started">
        Products
      </Link>
      <div className="badge-on-icon">
        <div
          className="icon-type wishlist"
          onClick={() => navigate("/wishlist")}
        >
          <i className="fas fa-heart"></i>
          <div className="badge-type count">{itemsInWishlist.length}</div>
        </div>
      </div>
      <div className="badge-on-icon">
        <div className="icon-type cart" onClick={() => navigate("/cart")}>
          <i className="fas fa-shopping-cart"></i>
          <div className="badge-type count">{itemsInCart.length}</div>
        </div>
      </div>
    </div>
  );
};
