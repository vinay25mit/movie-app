import React from "react";
const path="https://image.tmdb.org/t/p/original/";
function Result({ result, openDetail }) {
  return (
    
    <div className="box" onClick=
        {() => openDetail(result.id)}>
        
      <div className="movie_card">
    <div>{result.vote_average}</div>
     <img className="movie_poster" src={path+result.poster_path}/>
      <div className="movie_name">{result.original_title}</div>
      </div>
    </div>
  );
}
  
export default Result;