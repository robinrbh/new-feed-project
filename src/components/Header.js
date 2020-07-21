import React from "react";

export default function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <img
          class="logo-img"
          src="https://www.nuerburgring.de/typo3temp/fl_realurl_image/nuerburgring-gesamtstrecke-copyright-01-36.jpg"
        />
      </div>
      <div className="title">
        <h1>The world of Racetracks</h1>
      </div>
      <div className="menu">
        <span>
          <p>
            <span style={{ cursor: "pointer" }}>&#9776;</span>
          </p>
        </span>
      </div>
    </header>
  );
}
