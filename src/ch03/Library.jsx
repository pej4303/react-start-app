import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="파이썬" numOfPage={400} />
            <Book name="AWS" numOfPage={500} />
            <Book name="리액트" numOfPage={350} />
        </div>
    );
}

export default Library;