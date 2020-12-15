export type Result = {
    id: Number;
    title: string;
    overview: string;
    release_date: Date;
    poster_path: string;
}

export type initialStateType = {
    watchLater: Result[];
    watched: Result[];
    addMovie: (movie: Result) => void;
}