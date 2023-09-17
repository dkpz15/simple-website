import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <h3>Please contact us at : </h3>
      <ul>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://web.whatsapp.com/">WA</a>
        </li>
      </ul>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
    </>
  );
};

export default Contact;
