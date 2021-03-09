import { useState, useEffect } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import { apiKey } from "./apiKey";

function App() {
  const [videos, setVideos] = useState({
    items: [{ id: { videoId: "9E6b3swbnWg" } }],
  });
  const submitSearch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet
    &q=chopin+nocturne-No.2
    &type=video
    &embedabble=true
    &key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
    // .then(() => console.log(videos));
  };
  useEffect(submitSearch, []);

  return (
    <div className="App">
      <Header searchHandler={submitSearch} />
      <Display videos={videos} />
    </div>
  );
}

export default App;
