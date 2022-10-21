import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from "./axios"
import requests from './Request';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);
      return request;
    }

    fetchData();
  }, [])


 // console.log(movie);

    const Truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
    <div className='banner_contents'>
        <h1 className='banner_title'>{movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
        <button className = 'banner_button'>Play</button>
          <button className = 'banner_button'>My List</button>
        </div>
        <h1 className="banner_description">
          {Truncate(movie?.overview, 150)}
        </h1>
    </div>

    <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner