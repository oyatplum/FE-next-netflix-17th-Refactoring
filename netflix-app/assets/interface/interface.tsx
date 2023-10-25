export interface RowInfo {
  title: string;
  id: string;
  isRoundRow?: boolean;
  movies: MovieDetail[];
}

export interface ButtonInfo {
  fetchId: string;
}

export interface BannerInfo {
  fetchUrl: any;
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
  //arr?: MovieDetail[];
  obj: MovieDetail;
}
