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
        <div class="top">
          <a href="#" class="menu_icon">
            <i class="material-icons">dehaze</i>
          </a>
        </div>
        <p>
          <span>&#9776;</span>
        </p>
      </div>
    </header>
  );
}
