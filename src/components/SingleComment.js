import React, { useState } from "react";

function SingleComment({ id, user, comment, upvotes, downvotes, onRemove }) {
    const [currentUpvotes, setCurrentUpvotes] = useState(upvotes)
    const [currentDownvotes, setCurrentDownvotes] = useState(downvotes)


    function handleRemoveComment(e, id) {
        e.preventDefault()
        onRemove(id)
    }

    function handleUpvoteComment(e) {
        e.preventDefault()
        const newUpvotes = currentUpvotes + 1
        setCurrentUpvotes(newUpvotes)
    }

    function handleDownvoteComment(e) {
        e.preventDefault()
        const newDownvotes = currentDownvotes + 1
        setCurrentDownvotes(newDownvotes)
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