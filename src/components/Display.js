// import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "react-bootstrap";
import VideoList from "./VideoList";
import spinner from "../spinner.gif";

function Display(props) {
  //   const [videoList, setList] = useState(props.videoList);
  //   useEffect(setList(props.videoList), []);

  return (
    <Container id="displayContainer">
      <Row className="displayRow">
        <Col lg="auto">
          <ReactPlayer
            light
            controls={true}
            url={`https://www.youtube.com/watch?v=${props.videos.items[0].id.videoId}`}
          />
        </Col>
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
