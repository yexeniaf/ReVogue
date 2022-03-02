import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'production' ? "https://git.heroku.com/revogue-backend.git" : 'http://localhost:3000';

export const api = axios.create({
    baseURL: baseUrl
})