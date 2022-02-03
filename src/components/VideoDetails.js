
function VideoDetails({ title, views, createdAt }){
    return(
        <div>
            <h1>{title}</h1>
            <h4>{views} Views | Uploaded {createdAt}</h4>
        </div>
    )
}

export default VideoDetails;

