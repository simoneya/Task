

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import movieData from "./tmdb_5000_movies.json";
import Form from "./components/Form.jsx";
import { Movies, MovieCard } from "./components/Movies.jsx";
import Statistics from "./components/Statistics";
import { Header, Icon, Segment, Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";



function App() {

  return (
    <Segment className="segment" textAlign="center" background-color="red">
      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>Several films</Header.Content>
      </Header>
      <Form />
      <Statistics />
      <Movies />
      <MovieCard />
    </Segment>
  )
}


ReactDOM.render(<App />, (document.querySelector("#root")));
