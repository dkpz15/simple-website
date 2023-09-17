import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const reqApi = async () => {
      const fetchData = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );

      if (!fetchData.ok && fetchData.status !== 200) {
        setLoading(false);
        return setError(!error);
      }

      const jsonData = await fetchData.json();
      setData(jsonData);
      setLoading(!loading);
    };
    reqApi();
  }, []);

  if (error) {
    return <h2 className="h2-error">Error, response not found</h2>;
  }

  return (
    <>
      <h1>Blog</h1>
      {loading ? (
        <div className="circle-loading"></div>
      ) : (
        <div className="div-responsive">
          {data.results.map((obj) => {
            return (
              <div className="card-spaceflight">
                <div className="div-img">
                  <img
                    src={obj.image_url}
                    alt="img"
                    className="img-spaceflight"
                  />
                </div>
                <div className="div-letter">
                  <h2>
                    <Link
                      to={`/blog/${obj.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {obj.title}
                    </Link>
                  </h2>
                  <p>{new Date(obj.published_at).toLocaleDateString()}</p>
                  <a href={obj.url}>{obj.url}</a>
                </div>
              </div>
            );
          })}
          <Helmet>
            <meta charSet="utf-8" />
            <title>Blog</title>
          </Helmet>
        </div>
      )}
    </>
  );
};

export default Blog;
