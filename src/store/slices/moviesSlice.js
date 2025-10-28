import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: [],
  popular: [],
  upcoming: [],
  topRated: [],
  heroMovie: {
    mainMovie: {},
    posters: [],
    movieTrailers: [],
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addHeroMovie: (state, action) => {
      state.heroMovie.mainMovie = action.payload;
    },
    addHeroMoviePoster: (state, action) => {
      state.heroMovie.posters = action.payload;
    },
    addHeroMovieTrailer: (state, action) => {
      state.heroMovie.movieTrailers = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopular,
  addTopRated,
  addUpcoming,
  addHeroMovie,
  addHeroMoviePoster,
  addHeroMovieTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
