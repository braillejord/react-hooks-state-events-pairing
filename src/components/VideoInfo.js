import React from "react";

function VideoInfo({ video }) {
    return (
        <>
            <h1>{video.title}</h1>
            <p>{video.views + " Views  |  Uploaded " + video.createdAt}</p>
        </>
    )
}

export default VideoInfo;