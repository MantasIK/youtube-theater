// import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col, Image } from "react-bootstrap";

function VideoList(props) {
  //   const [videoList, setList] = useState(props.videoList);
  //   useEffect(setList(props.videoList), []);
  console.log(props.videos);
  return (
    <Container id="displayContainer">
      {
        <Row className="displayRow" md="4">
          {props.videos.items.map((video) => (
            <Col xs>
              <Image src={video.snippet.thumbnails.medium.url} />
            </Col>
          ))}
        </Row>
      }
    </Container>
  );
}

export default VideoList;
