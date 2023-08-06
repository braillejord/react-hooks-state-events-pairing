import React from "react";

function CommentsContainer({ comments }) {
    return (
        <div>
            <button>Hide Comments</button>
            <h2>Number of Comments</h2>
            {comments.map((comment) => (
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