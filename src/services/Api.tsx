import axios from "axios";
import { Gifs, GiphyAPIResponse } from "../models/Gifs";

const apiKey = process.env.REACT_APP_NEWS_API_KEY || '';


export function getGifs() {


    return axios.get<GiphyAPIResponse>(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
    .then((response) => response.data)

}

export function getGifsSearch(searchTerm:string) {

    return axios.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
    .then((response) => response.data);
}

