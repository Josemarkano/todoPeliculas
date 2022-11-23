export interface Tserie {
    page:          number;
    results:       Serie[];
    total_pages:   number;
    total_results: number;
}

export interface Serie {
    backdrop_path?:    null | string;
    first_air_date?:   Date;
    genre_ids?:        number[];
    id:                string;
    name:              string;
    origin_country?:   string[];
    original_language?:string;
    original_name?:    string;
    overview:          string;
    popularity?:       number;
    poster_path:       string;
    vote_average:      number;
    vote_count?:       number;
    genres:            any;
    type:              string;
}
