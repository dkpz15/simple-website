import "./Profile.css";
import logo from "./logo.svg";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <div className="div-profile">
        <div className="div-name">
          <h1>Darren Marcellino Setiawan</h1>
          <h3>
            Junior Front End Developer and Senior Graphic Designer <br />
            in Samsung Technology
          </h3>
          <button>Learn More</button>
        </div>
        <div className="div-image">
          <img src={logo} alt="img" />
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Profile</title>
        </Helmet>
      </div>
    </>
  );
};

export default Profile;
