import React, { useState } from "react";

function Buttons({ upvotes, downvotes }){

    const [up, setUp] = useState(upvotes);
    const [down, setDown] = useState(downvotes);

    function handleUpvote(){
        setUp((up) => up + 1);
    }

    function handleDownvote(event){
        setDown((down) => down + 1);
    }

    return(
        <>
            <button onClick={handleUpvote}>👍{up}</button>
            <button onClick={handleDownvote}>👎{down}</button>
            <br></br>
        </>

    )
}

export default Buttons;