import React from 'react';
import Comment from './Comment';

const VideoDetail = ({video}) => {
  
  if (!video) {
    return <div>Loading.....</div>
  }
  
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log("video: " + videoId )

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <Comment etag={videoId}/>
      </div>
    </div>
  );
};

export default VideoDetail;
