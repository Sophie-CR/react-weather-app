import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/Sophie-CR/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
          title="View the source code on GitHub"
        >
          Open source code
        </a>{" "}
        by Sophie Rosenberg
      </div>
      <div>
        <a
          href="https://phenomenal-empanada-255bed.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
          title="View my portfolio website"
        >
          Click here
        </a>{" "}
        to view my portfolio
      </div>
    </div>
  );
}
