 type Types = {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number
    showlink: boolean;
}

interface movieType {
    id: string;
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
    showLink: boolean;
    click: (id: number) => {}
}

export type { Types, movieType }