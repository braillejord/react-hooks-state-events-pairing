import React from "react";

function VotingButtons({ upvotes, downvotes }) {
    return (
        <>
            <button>{upvotes + "👍"}</button>
            <button>{downvotes + "👎"}</button>
        </>
    )
}

export default VotingButtons;