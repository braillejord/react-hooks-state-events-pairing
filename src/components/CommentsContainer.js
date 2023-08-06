import React, { useState } from "react";

function CommentsContainer({ comments }) {
    const [isOn, setIsOn] = useState(false)

    function handleHideComments() {
        setIsOn(!isOn)
    }

    return (
        <div>
            <button onClick={handleHideComments}>{isOn ? "Show Comments" : "Hide Comments"}</button>
            <h2>{isOn ? "Comments Hidden" : comments.length + " Comments"}</h2>
            {isOn
                ? null
                : comments.map((comment) => (
                    <div>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentsContainer;