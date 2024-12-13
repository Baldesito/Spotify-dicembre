// eslint-disable-next-line no-unused-vars
import React from "react";
import MusicSection from "./MusicSection";

const Main = () => (
  <div className="col-12 col-md-9 offset-md-3 mainPage">
    {/* Sezioni di musica */}
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
    </div>
    <div className="row">
      <div className="col-10 text-white">
        <MusicSection title="Rock Classics" artist="queen" id="rockSection" />
      </div>
    </div>
    <div className="row">
      <div className="col-10  text-white">
        <MusicSection title="Pop Culture" artist="katyperry" id="popSection" />
      </div>
    </div>
    <div className="row">
      <div className="col-10  text-white">
        <MusicSection title="#HipHop" artist="eminem" id="hipHopSection" />
      </div>
    </div>
  </div>
);

export default Main;
