import React from "react";
import Result from "./Result";
  
function Results({ results, openDetail }) {
  return (
    <>
    
    <div className="most_recent">
        <div className="new_project1">

        </div>
    <section className="results">

      {typeof results != "undefined" ? (
        results.map((result) => (
          <Result key={result.imdbID} result
              ={result} openDetail={openDetail} />
        ))
      ) : (
        results.map((result) => (
          <Result key={result.imdbID} result
              ={result} openDetail={openDetail} />
        ))
      )}
      
    </section>
    </div>
    </>
  );
}
  
export default Results;