 type Types = {
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
    props: {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number
     };
}

type CardType = {

    click: Function;
    movie: {
       id: number,
       title: string,
       poster_path: string,
       vote_average: number
    };
    showLink: boolean;
  
}

export type { Types, MovieType, CardType }