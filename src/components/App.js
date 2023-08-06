import React from "react";
import VideoInfo from "./VideoInfo.js";

import video from "../data/video.js";

function App() {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo video={video} />
      {/* <VotingButtons />
      <CommentsContainer /> */}

    </div>
  );
}

export default App;
