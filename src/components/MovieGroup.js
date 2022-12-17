import React from "react";
import Result from "./Result";
import Notfound from "./Notfound"
function Results({ results, openDetail }) {
  return (
    <>
    
    
      
    <section className="results">

      {typeof results != "undefined" ? (
        results.map((result) => (
          <Result key={result.imdbID} result
              ={result} openDetail={openDetail} />
        ))
      ) : 
        <Notfound/>

        }
      
    </section>
   
    </>
  );
}
  
export default Results;