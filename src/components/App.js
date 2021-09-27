import React from 'react';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "../API/requests";
import './App.css';

const  App=()=> {
  return (
    <div className="app">
      {/**NAV */}
      <Nav/>
      {/*BANNER*/}
      <Banner />

      <Row
        title="Originais Netflix"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Em Alta"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Melhores Avaliados"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Filmes de Ação"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Filmes de Comédia"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Filmes de Terror"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Filmes de Romance"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentários"
        id="DM"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
    
  );
}


export default App;
