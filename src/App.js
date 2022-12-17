import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Detail from "./components/Details";
import { Header } from "./components/Header";
import MovieGroup from "./components/MovieGroup"
import "./App.css";

const start_page="https://api.themoviedb.org/3/movie/now_playing?api_key=5b20a74f8f53d0cd4b45f38a49285a72&language=en-US&page=1"
function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
    
  });

  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const apiurl="https://api.themoviedb.org/3/";
  // const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";
  const api_key="5b20a74f8f53d0cd4b45f38a49285a72";
  
  const searchInput = (e) => {
    let s = e.target.value;
  
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };


const start1=()=>{
  fetch(start_page)
      // one extra step
  .then(data => {
    console.log(data)
    setState((prevState)=>{
      return {...prevState,results:data}; 
  })
  .catch(error => console.error(error));
  })
}

  const start=()=>{
    axios(start_page).then(({data})=>{
      let res=data.results;
      setState((prevState)=>{
        return {...prevState,results:res};
      })
    })
  }
  const search = (e) => {
    if (e.key === "Enter") {
      // apiurl/search/movie?api_key={api_key}&query=Jack+Reacher

      axios(apiurl+"search/movie?api_key="+api_key+"&query=" + state.s).then(({ data }) => {
        let results = data.results;
        console.log("dsta is",data )
  
        console.log("results",results);
  
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  
  const openDetail = (id) => {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    axios("https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key+"&language=en-US").then(({ data }) => {
      let result = data;
      console.warn("id is",id);
      console.warn("resut is here",result);
  
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  
  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  console.warn(state.results);
  if(state.results.length==0)
  {
    start();
  }
  
  return (
    <div className="App">
    
      <main>
        

        <div className="test">
        <Search searchInput={searchInput} search={search} /> 

        </div>
        
      
        
        <MovieGroup results={state.results} openDetail={openDetail}/>  
        {/* <Results results={state.results} openDetail={openDetail} /> */}
        {/* console.log("selected",state.selected.Title); */}
        {typeof state.selected.id != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
        
        
      </main>
    </div>
  );
}
  
export default App;