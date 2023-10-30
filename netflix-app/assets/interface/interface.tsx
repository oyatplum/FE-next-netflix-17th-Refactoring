export interface RowInfo {
  title: string;
  id: string;
  isRoundRow?: boolean;
  movies: MovieDetail[];
}

export interface HeaderMovies {
  movies: MovieDetail[];
}

export interface MovieDetail {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieTypeArray {
  obj: MovieDetail;
}

export interface TvShowDetail {
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids?: number[];
  id?: number;
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  title?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface TvShowTypeArray {
  arr?: TvShowDetail[];
  obj?: TvShowDetail;
}

export interface IsSearch {
  isSearch: boolean;
}

export interface VideoResult {
  key: string;
}

export interface MovieVideoInfo {
  title: string;
  overview: string;
}

export interface MovieVideo {
  getVideo: {
    id: number;
    results: VideoResult[];
  };
}

export interface VideoDetailPageProps {
  params: {
    slug: string[];
  };
}

export interface FrameType {
  movieKey: string;
}
