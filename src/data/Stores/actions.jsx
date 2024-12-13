export const fetchSongs = (query) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkY2U5YWM5MjI4ZDAwMTVmYWQzNGEiLCJpYXQiOjE3MzQwODgwMzcsImV4cCI6MTczNTI5NzYzN30.yAwtvQqo_9cVcLux1aGCj2LN4iyuaC_YCjhb5zJbY9E",
        },
      }
    );
    const data = await response.json();
    dispatch({ type: "FETCH_SONGS_SUCCESS", payload: data.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: "FETCH_SONGS_FAILURE", payload: error });
  }
};

export const selectSong = (song) => ({
  type: "SELECT_SONG",
  payload: song,
});

export const likeSong = (songId) => ({
  type: "LIKE_SONG",
  payload: songId,
});
