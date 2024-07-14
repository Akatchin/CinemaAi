 type GeneralType = {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number
    showlink: boolean;
}

type MovieType = {
    id: number;
    title: string;
    budget: number;
    revenue: number;
    runtime: string;
    overview: string;
    movie: {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number
     };
}

type CardType = {

    click: Function;
    showLink: boolean;

    movie: {
       id: number,
       title: string,
       poster_path: string,
       vote_average: number
    };
}

export type { GeneralType, MovieType, CardType }