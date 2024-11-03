import { useEffect, useState } from 'react'

export const useFetch = (apipath,queryTerm="") => {
    const [data,setdata] = useState([]);
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch(url);
            const json = await response.json();
            setdata(json.results);
        }
        fetchMovies();
    },[url])
  return {data}
}
