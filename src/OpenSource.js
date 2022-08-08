import React from "react";
import "./OpenSource.css";
export default function OpenSource() {
  return (
    <div className="open-source">
      <a
        href="https://github.com/Sophie-CR/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="open-source-link"
        title="View the source code on GitHub"
      >
        Open source code
      </a>
      by Sophie Rosenberg
    </div>
  );
}
