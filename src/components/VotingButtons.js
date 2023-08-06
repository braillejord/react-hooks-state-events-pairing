import React, { useState } from "react";

function VotingButtons({ upvotes, downvotes }) {
    const [currentUpvotes, setCurrentUpvotes] = useState(upvotes)
    const [currentDownvotes, setCurrentDownvotes] = useState(downvotes)

    function handleUpvoteClick() {
        const newUpvotes = currentUpvotes + 1
        setCurrentUpvotes(newUpvotes)
    }

    function handleDownvoteClick() {
        const newDownvotes = currentDownvotes + 1
        setCurrentDownvotes(newDownvotes)
    }

    return (
        <div>
            <button onClick={handleUpvoteClick}>{currentUpvotes + " 👍"}</button>
            <button onClick={handleDownvoteClick}>{currentDownvotes + " 👎"}</button>
        </div>
    )
}

export default VotingButtons;