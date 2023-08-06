import React, { useState } from "react";
import SingleComment from "./SingleComment";

function CommentsContainer({ comments }) {
    const [isOn, setIsOn] = useState(false)
    const [currentComments, setCurrentComments] = useState([...comments])

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

    function sortComments(e) {
        if (e.target.value === "no sort") {
            setCurrentComments([...comments])

        } else if (e.target.value === "ascending") {
            const updatedComments = currentComments.sort((a, b) => a.user.localeCompare(b.user))
            setCurrentComments([...updatedComments])

        } else if (e.target.value === "descending") {
            const updatedComments = currentComments.sort((a, b) => b.user.localeCompare(a.user))
            setCurrentComments([...updatedComments])
        }
    }



    return (
        <>
            <button onClick={handleHideComments}>{isOn ? "Show Comments" : "Hide Comments"}</button>
            <h2>{isOn ? "Comments Hidden" : comments.length + " Comments"}</h2>
            {isOn
                ? null
                : <>
                    <label for="sortComments">Sort Comments: </label>
                    <select name="sortComments" id="sortComments" onChange={sortComments}>
                        <option value="no sort">No Sort</option>
                        <option value="ascending">A-Z</option>
                        <option value="descending">Z-A</option>
                    </select>
                    <label for="sortComments">Search Users: </label>
                    <input type="text" placeholder="username"></input>
                </>
            }
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