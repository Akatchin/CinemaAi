import axios from "axios";

const apiKey = 'api_key=0acf96971d8a0f3cbbfa9629ba47bee8';

const request = axios.create({
    baseURL:' https://api.themoviedb.org/3',
})

export const imageurl = 'https://image.tmdb.org/t/p/w500/';

export const api = {

    getTopRatedMovies: async () => {
        const req = await request(`/movie/top_rated?${apiKey}`);
        return req.data;
    },
    search: async (query: string | null) => {
        const req = await request(`/search/movie?${apiKey}&query=${query}`);
        return req.data;
    },
    getMovie: async (id: string | undefined) => {
        const req = request(`/movie/${id}?${apiKey}`)
        return (await req).data;
    }
}