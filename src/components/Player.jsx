// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column text-white bg-dark justify-content-center align-items-center">
            {selectedSong ? (
              <>
                <div>
                  <p>
                    Now Playing: {selectedSong.title} by{" "}
                    {selectedSong.artist.name}
                  </p>
                </div>
                <div className="col-6 col-md-4 playerControls">
                  <div className="d-flex">
                    <a href="#">
                      <img
                        src="assets/playerbuttons/shuffle.png"
                        alt="shuffle"
                      />
                    </a>
                    <a href="#">
                      <img src="assets/playerbuttons/prev.png" alt="prev" />
                    </a>
                    <a href="#">
                      <img src="assets/playerbuttons/play.png" alt="play" />
                    </a>
                    <a href="#">
                      <img src="assets/playerbuttons/next.png" alt="next" />
                    </a>
                    <a href="#">
                      <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                    </a>
                  </div>
                  <div className="progress mt-3"></div>
                </div>
              </>
            ) : (
              <p>Select a song to play!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
