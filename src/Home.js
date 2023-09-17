import logo from "./logo.svg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <div
        className="div-home"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="div-home-section-one">
          <h1>Welcome to my Simple Website</h1>
          <h3>My name is Darren Marcellino</h3>
          <span>
            I am a Junior Front End Developer in Samsung Technology. I like to
            use HTML, CSS, Javascript, Bootstrap, and React JS in my project
          </span>
        </div>
        <div className="div-home-section-two">
          <img
            src={logo}
            alt="logo"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
      </div>
    </>
  );
};

export default Home;
