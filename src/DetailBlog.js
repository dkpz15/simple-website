import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailBlog.css";
import { Helmet } from "react-helmet";

const DetailBlog = () => {
  const paramsReact = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const reqApi = async () => {
      const fetchData = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${paramsReact.id}`
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
  }, [paramsReact]);

  if (error) {
    return <h2 className="h2-error">Error, response not found</h2>;
  }

  return (
    <>
      <h1>Detail Blog</h1>
      {loading ? (
        <div className="circle-loading"></div>
      ) : (
        <div className="div-responsive">
          <img src={data.image_url} alt="img" />
          <hr />
          <div className="letter-detail">
            <h3>Title : {data.title}</h3>
            <h3>
              Published : {new Date(data.published_at).toLocaleDateString()}{" "}
              {new Date(data.published_at).toLocaleTimeString()}
            </h3>
            <h3>
              Updated : {new Date(data.updated_at).toLocaleDateString()}{" "}
              {new Date(data.updated_at).toLocaleTimeString()}
            </h3>
            <h3>News Site : {data.news_site}</h3>
            <h3>Summary : {data.summary}</h3>
            <h3>
              Source : <a href={data.url}>{data.url}</a>
            </h3>
          </div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.title}</title>
          </Helmet>
        </div>
      )}
    </>
  );
};

export default DetailBlog;
