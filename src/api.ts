import axios from "axios";

const apiKey = 'api_key=0acf96971d8a0f3cbbfa9629ba47bee8';

const request = axios.create({
    baseURL:' https://api.themoviedb.org/3',
})

export const imageurl = 'https://image.tmdb.org/t/p/w500/';

export const api = {
    authentication: async () => {
        const req = await request('/authentication')
    },

    getTopRatedMovies: async () => {
        const req = await request(`/movie/top_rated?${apiKey}`);
        return req.data
    }
}