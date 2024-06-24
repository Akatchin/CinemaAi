import axios from "axios";

const request = axios.create({
    baseURL:' https://api.themoviedb.org/3',
})

export const api = {
    authentication: async () => {
        const req = await request('/authentication')
    },

    movieList: async () => {
        const req = await request('/movie/changes');
        return req.data;
    }
}