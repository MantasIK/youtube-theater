// import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row } from "react-bootstrap";
import VideoList from "./VideoList";

function Display(props) {
  //   const [videoList, setList] = useState(props.videoList);
  //   useEffect(setList(props.videoList), []);

  return (
    <Container id="displayContainer">
      <Row className="displayRow">
        <ReactPlayer
          controls={true}
          url={`https://www.youtube.com/watch?v=${props.videos.items[0].id.videoId}`}
        />
      </Row>
      {props.videos.items[1] ? (
        <Row>
          <VideoList videos={props.videos} />
        </Row>
      ) : null}
    </Container>
  );
}

export default Display;
