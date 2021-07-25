import { useNavigate } from "react-router";
import { CategoriesListing, MainNav } from "../../Components";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNav />
      <div className="home-page">
        <div
          className="image-container"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="home-page-cover-img"
            src="https://cdn.pixabay.com/photo/2019/07/03/13/53/brain-4314636_1280.jpg"
            alt="cover img"
          />
          <div className="text-overlay"></div>
        </div>
        <div className="text-container">
          <p className="get-paid-text">Look out for yourself</p>
          <p className="description-text">
            <span className="styled-text">
              Self-care is how you take your power back.
            </span>
            <br /> This is an initiative to take care of your mental health by
            listing out few things which you can buy and will help you bring peace of mind.
          </p>
        </div>
        <button
          className="getting-started"
          onClick={() => navigate("/coder/login")}
        >
          Get Started
        </button>
        <CategoriesListing />
      </div>
    </>
  );
};
