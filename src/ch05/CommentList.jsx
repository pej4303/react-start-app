import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"박은주"} comment={"이것은 리액트"}/>
        </div>
    );
}

export default CommentList;