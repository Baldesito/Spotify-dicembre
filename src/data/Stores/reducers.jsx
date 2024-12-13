const initialState = {
  selectedSong: null,
  likedSongs: [],
  searchResults: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SONG":
      return { ...state, selectedSong: action.payload };
    case "LIKE_SONG":
      return {
        ...state,
        likedSongs: state.likedSongs.includes(action.payload)
          ? state.likedSongs.filter((id) => id !== action.payload)
          : [...state.likedSongs, action.payload],
      };
    case "FETCH_SONGS_SUCCESS":
      return { ...state, searchResults: action.payload, error: null };
    case "FETCH_SONGS_FAILURE":
      return { ...state, searchResults: [], error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
