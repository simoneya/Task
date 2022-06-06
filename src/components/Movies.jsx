
import React, { useState } from "react";
import movieData from "../tmdb_5000_movies.json";
import "../index.css";
import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";
import { Header, Icon, Segment, Button, Card, Image } from "semantic-ui-react";


 function Movies() {

  let i = 0;
  return (
    <>
      <Card.Group textAlign="center">
        {movieData.map((data, key) => {
          if (i < 200) {
            i++;
            return (
              <MovieCard
                img={faker.image.cats(250, 250, true)}
                title={data.title}
                tagline={data.tagline}
                release_date={data.release_date}
                vote_average={data.vote_average}
                keywords={data.keywords[0]}
              />
            );
          }
          return null;
        })}
      </Card.Group>
    </>
  );
}


function MovieCard(props) {

  const [color,setColor]=useState("#77A9D7");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
     setMouseOver(true);
   }

   function handleMouseOut() {
     setMouseOver(false);
   }



  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }



  return (
    <Card className="centered"
    style={{
      backgroundColor: "#3D85C6",
      borderColor: "#3D85C6"
      }}>
      <Card.Content>
        <Image floated="right" size="tiny" src={props.img} />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta> {props.tagline}</Card.Meta>
        <Card.Description>{props.release_date}</Card.Description>
      </Card.Content>
      <Card.Content extra>

      <div className="ui two buttons">
          <Button
             style={{background:color}}
             onClick={()=>{setColor("#77A6F7"); increase(count)}}
              >
            <Icon name="thumbs up" />
            Like
            <a class="ui basic green left pointing label">
            {count}
            </a>
          </Button>
          <Button
          style={{ backgroundColor: isMousedOver ? "red" : "#CFE2F3" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
            Dislike
            <Icon name="thumbs down" />
          </Button>
        </div>

      </Card.Content>
    </Card>
  );
}


export {
    Movies,
    MovieCard
}
