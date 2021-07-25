import "./MainNav.css";
import { Link } from "react-router-dom";
// import { useCoderAuth } from "../../Context";

export const MainNav = () => {
  // const { isCoderLogin, logout } = useCoderAuth();
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
        alt="logo"
        className="hero-image"
      ></img>
      <div className="hero-name">CODE-N-MINGLE</div>
      {/* {!isCoderLogin && ( */}
      <Link to="/products" className="get-started">
        Products
      </Link>
      {/* {
      )} */}
      {/* {!isCoderLogin && (
        <Link className="login" to="/coder/login">
          Log In
        </Link>
      )}
      {isCoderLogin && <Link to="/coder/dashboard">Dashboard</Link>}
      {isCoderLogin && (
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      )}
      {!isCoderLogin && <Link to="/buyer">Become a Buyer</Link>} */}
    </div>
  );
};
