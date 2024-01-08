import Navigation from "./navbar/Navigation";
import Footer from "./footer/Footer";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Navigation />
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <Footer />
    </>
  );
};

export default Error;
