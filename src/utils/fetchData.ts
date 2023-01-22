import axios from "axios";

interface IFetchDatasProps {
  url  : string ,
  numberMaxResults ?: number ,
}

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchDataFromAPI = async ( { url , numberMaxResults } : IFetchDatasProps ) => {
     return await axios({
    method:'GET' ,
    url:`${BASE_URL}/${url}${numberMaxResults ? `&maxResults=${numberMaxResults}` : ''}`,
    ...options ,
    })
}
