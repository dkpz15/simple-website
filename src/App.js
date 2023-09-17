import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Blog from "./Blog";
import DetailBlog from "./DetailBlog";
import Contact from "./Contact";
import NoRoute from "./NoRoute";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/profile"
            style={{ marginLeft: "20px", textDecoration: "none" }}
          >
            Profile
          </Link>
          <Link
            to="/blog"
            style={{ marginLeft: "20px", textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            style={{ marginLeft: "20px", textDecoration: "none" }}
          >
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<DetailBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
