import { Helmet } from "react-helmet";

const NoRoute = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Error route didn't match
      </h1>
      <Helmet>
        <meta charSet="utf-8" />
        <title>No Route</title>
      </Helmet>
    </>
  );
};

export default NoRoute;
