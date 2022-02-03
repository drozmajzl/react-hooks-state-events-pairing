import video from "../data/video.js";
import RenderVideo from "./RenderVideo";
import VideoDetails from "./VideoDetails";
import Buttons from "./Buttons";
import Comments from "./Comments";
import HideComments from "./HideComments";

console.log(video)

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <RenderVideo url={video.embedUrl}/>
      <VideoDetails title={video.title} views={video.views} createdAt={video.createdAt} />
      <Buttons upvotes={video.upvotes} downvotes={video.downvotes}/>
      <HideComments comments={video.comments}/>
    </div>
  );
}

export default App;

//COMPONENTS:
// VIDEO DETAILS: Title, Views, Upload Date
// Comments
// Render Buttons
// Render Video