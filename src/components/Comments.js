
import Buttons from "./Buttons";

function Comments({ commentArr }){

    function removeComment(event){
        event.target.parentNode.remove();
    }

const comments = commentArr.map((comment) => {
    return (
        <div key={comment.id}>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
        <button onClick={removeComment}>Remove Comment</button>
        <Buttons upvotes={0} downvotes = {0}/>
        </div>
    )
})

    return(
        <div>
        {comments}
        </div>
    )
}

export default Comments;