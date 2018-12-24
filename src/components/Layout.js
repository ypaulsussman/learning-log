import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import favicon from "../img/favicon.ico";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div className="column col-sm-12 col-md-11 col-lg-10 col-xl-8 col-5 col-mx-auto">
    <Helmet
      title="Home | Learning Log"
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`
        }
      ]}
    />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
