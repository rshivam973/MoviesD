import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';

const IMG_INITIAL_URL ="https://image.tmdb.org/t/p/w500/"

  function renderCard(val){
    const finalImgUrl=IMG_INITIAL_URL+val.poster_path
    return (
    <Cards
    key={val.id}
    name={val.title}
    img={finalImgUrl}
    releaseDate={val.release_date}
    rating={val.vote_average}
    //{...val}
    />
    );
}

function Movies(){

  const [movies, setMovies]=useState([]);
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=bb320e801ed3a5b652434c6d98f71de2";
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  },[])

  return (
    <div>
    {movies.map(renderCard)}
    </div>

  );
}



  export default Movies;
