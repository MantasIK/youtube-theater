import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row } from "react-bootstrap";
import spinner from "../spinner.gif";

function Display(props) {
  const [videoList, setList] = useState(props.videoList);
  useEffect(setList(props.videoList), []);

  return (
    <Container id="displayContainer">
      <Row className="displayRow">
        <ReactPlayer
          controls="true"
          //   url={`https://www.youtube.com/watch?v=${videoId}`}
        />
      </Row>
    </Container>
  );
}

export default Display;
