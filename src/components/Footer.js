import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // Spaces between link and text
    <div className="footer">
      <h3>
        Linkedin:
        <a href="https://www.linkedin.com/in/tobiaspaulsen/">Tobias Paulsen</a>
      </h3>
      <h3>
        Email:
        <a href=" mailto:tobiasrp98@gmail.com">tobiasrp98@gmail.com</a>
      </h3>
      <h3>
        Github:
        <a href="https://github.com/tobiaspaulsen/">tobiaspaulsen</a>
      </h3>
    </div>
  );
}

export default Footer;
