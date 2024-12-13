// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong, likeSong } from "../data/Stores/actions";

const Results = () => {
  const searchResults = useSelector((state) => state.searchResults ?? []);
  const likedSongs = useSelector((state) => state.likedSongs ?? []);
  const dispatch = useDispatch();

  if (!searchResults.length) {
    return <div>No results found</div>; // Messaggio in caso di risultati vuoti
  }

  return (
    <div className="results">
      {searchResults.map((song) => (
        <div key={song.id} className="song">
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="cover"
          />
          <p>
            Track: &quot;{song.title}&quot;
            <br />
            Artist: {song.artist.name}
          </p>
          <div className="d-flex justify-content-center">
            <button
              className="btn-circle btn-play"
              onClick={() => dispatch(selectSong(song))}
            >
              <i className="bi bi-play-circle-fill text-white"></i>
            </button>
            <button
              className="btn-circle btn-heart"
              onClick={() => dispatch(likeSong(song.id))}
            >
              {likedSongs.includes(song.id) ? (
                <i className="bi bi-heart-fill"></i>
              ) : (
                <i className="bi bi-heart"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
