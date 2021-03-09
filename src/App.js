import { useState, useEffect } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import { apiKey } from "./apiKey";

//     &videoEmbeddable=true

function App() {
  const [videoList, setList] = useState([]);
  const submitSearch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet
    &q=chopin+nocturne-No.2
    &type=video
    &embedabble=true
    &key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setList(data))
      .then(() => console.log(videoList));
  };
  useEffect(submitSearch, []);

  return (
    <div className="App">
      <Header searchHandler={submitSearch} />
      <Display videoList={videoList} />
    </div>
  );
}

export default App;
