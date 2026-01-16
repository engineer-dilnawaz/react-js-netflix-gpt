export const APP_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_ACCOUNT_PHOTO = "https://avatar.iran.liara.run/public";

export const API_CONSTANTS = {
  access_token: import.meta.env.VITE_ACCESS_TOKEN,
  base_url: "https://api.themoviedb.org/3",
  posters: {
    original: "https://image.tmdb.org/t/p/original/",
    medium: "https://image.tmdb.org/t/p/w500/",
    small: "https://image.tmdb.org/t/p/w200",
  },
  youtube_base_url: "https://www.youtube.com/watch?v=",
  gpt_api_key: import.meta.env.VITE_GPT_API_KEY,
  google_studio_api_key: import.meta.env.VITE_GOOGLE_STUDIO_API_KEY,
};

export const API_ENDPOINTS = {
  MOVIES_LIST: {
    NOW_PLAYING: "/movie/now_playing",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    IMAGES: (movieId) => `/movie/${movieId}/images`,
    VIDEOS: (movieId) => `/movie/${movieId}/videos`,
  },
};

export const VIDEO_TYPES = {
  TRAILER: "Trailer",
};
