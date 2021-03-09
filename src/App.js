import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Display from "./components/Display";
import { apiKey } from "./apiKey"; // comment this out if you placed your youtube api key directly into the axios key space

function App() {
  const [videos, setVideos] = useState({
    items: [{ id: { videoId: "9E6b3swbnWg" } }],
  });

  const submitSearch = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: "chopin+nocturne-No.2",
          type: "video",
          maxResults: 10,
          embedabble: "true",
          key: apiKey, // you can paste your api key directly in here, but comment out the import at the top
        },
      })
      .then((response) => setVideos(response.data));
  };
  useEffect(submitSearch, [videos]);

  return (
    <div className="App">
      <Header searchHandler={submitSearch} />
      <Display videos={videos} />
    </div>
  );
}

export default App;
