import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/";

const options = {
    method: "GET",
    url: BASE_URL,
    params: {
        maxResults: "6",
    },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_REPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const AreaAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};

// 하다말앗음ㅁㄻㄻㄻㄻㄻㅁㄻㄻㄹ
