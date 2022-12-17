
import React from "react";
import Result from "./Result";
const path="https://image.tmdb.org/t/p/original/";
function Detail({ selected, closeDetail }) {
  return (
    <section className="detail">
      <div className="content">
          <div className="title">
            {selected.original_title}
          </div>
        <button className="close" onClick={closeDetail}>
          Close
        </button>
        
        
          <br/>
        
        
        
  
        <div className="about">
          <img className="img_about"  src={path+selected.poster_path} alt="" /> 
          <div className="text_about">
          RElease Date: {selected.release_date}
            
            <div className="overview">{selected.overview}</div>
            <br/>
            Rating: {selected.vote_average}<span></span>
            </div>
          </div>
            
          {/* <p> plot {selected.Plot}</p> */}
  
        
       
      </div>
    </section>
  );
}
  
export default Detail;