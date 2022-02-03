import react, { useState} from "react";
import Comments from "./Comments";

function HideComments({ comments }){

const [isHidden, setIsHidden] = useState(false)

function handleHide(){
    setIsHidden((isHidden) => !isHidden);
}
      
    return(
        <>
        <button onClick={handleHide}>{isHidden ? 'Show Comments' : 'Hide Comments'}</button>
        <hr></hr>
        {isHidden ? null : <Comments commentArr={comments}/>}
        </>
    )
}

export default HideComments;