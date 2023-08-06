import React, { useState } from "react";
import SingleComment from "./SingleComment";

function CommentsContainer({ comments }) {
    const [isOn, setIsOn] = useState(false)
    const [currentComments, setCurrentComments] = useState(comments)

    function handleHideComments() {
        setIsOn(!isOn)
    }

    function handleRemoveComment(id) {
        const updatedComments = currentComments.filter((comment) => {
            if (comment.id !== id) {
                return true;
            }
        })
        setCurrentComments(updatedComments)
    }

    return (
        <>
            <button onClick={handleHideComments}>{isOn ? "Show Comments" : "Hide Comments"}</button>
            <h2>{isOn ? "Comments Hidden" : comments.length + " Comments"}</h2>
            <div className="comments">
                {isOn
                    ? null
                    : currentComments.map((comment) => (
                        <SingleComment
                            key={comment.id}
                            id={comment.id}
                            user={comment.user}
                            comment={comment.comment}
                            upvotes={comment.upvotes}
                            downvotes={comment.downvotes}
                            onRemove={handleRemoveComment}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CommentsContainer;