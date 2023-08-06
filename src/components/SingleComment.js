import React, { useState } from "react";

function SingleComment({ id, user, comment, upvotes, downvotes, onRemove }) {
    const [currentUpvotes, setCurrentUpvotes] = useState(upvotes)
    const [currentDownvotes, setCurrentDownvotes] = useState(downvotes)


    function handleRemoveComment(e, id) {
        e.preventDefault()
        onRemove(id)
    }

    function handleUpvoteComment(e, id) {
        e.preventDefault()
        console.log(id)
    }

    function handleDownvoteComment(e, id) {
        e.preventDefault()
        console.log(id)
    }

    return (
        <div className="singleComment">
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={handleUpvoteComment}>{currentUpvotes + " 👍"}</button>
            <button onClick={handleDownvoteComment}>{currentDownvotes + " 👎"}</button>
            <button onClick={(e) => handleRemoveComment(e, id)}>Delete</button>
        </div>
    )
}

export default SingleComment;