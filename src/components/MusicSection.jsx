// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSong, likeSong } from "../data/Stores/actions";
import Button from "react-bootstrap/Button";

const MusicSection = ({ title, artist, id }) => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs ?? []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkY2U5YWM5MjI4ZDAwMTVmYWQzNGEiLCJpYXQiOjE3MzQwODgwMzcsImV4cCI6MTczNTI5NzYzN30.yAwtvQqo_9cVcLux1aGCj2LN4iyuaC_YCjhb5zJbY9E",
            },
          }
        );
        const data = await response.json();
        if (data.data) {
          setSongs(data.data.slice(0, 4));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, [artist]);

  return (
    <div className="col-10">
      <h2>{title}</h2>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
        id={id}
      >
        {songs.map((song) => (
          <div key={song.id} className="col text-center">
            <img
              className="img-fluid"
              src={song.album.cover_medium}
              alt="track"
            />
            <p>
              Track: &quot;{song.title}&quot;
              <br />
              Artist: {song.artist.name}
            </p>
            <div className="d-flex justify-content-center">
              <Button
                className="btn-circle btn-play btn-play"
                onClick={() => dispatch(selectSong(song))}
              >
                <i className="bi bi-play-circle-fill text-black"></i>
              </Button>
              <Button
                className="btn-circle btn-heart"
                onClick={() => dispatch(likeSong(song.id))}
              >
                {likedSongs.includes(song.id) ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
