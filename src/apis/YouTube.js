import axios from 'axios'

const KEY = "AIzaSyA_gdsnlfWOyuoeKwnv4KG3ISaF62fU8n0";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})