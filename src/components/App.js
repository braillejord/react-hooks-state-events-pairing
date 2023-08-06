import React from "react";
import VideoInfo from "./VideoInfo.js";
import VotingButtons from "./VotingButtons.js";
import CommentsContainer from "./CommentsContainer.js";

import video from "../data/video.js";

function App() {
  return (
    <div className="App">
      <iframe
        width="700"
        height="400"
        src={video.embedUrl}
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo video={video} />
      <VotingButtons upvotes={video.upvotes} downvotes={video.downvotes} />
      <CommentsContainer comments={video.comments} />

    </div>
  );
}

export default App;
