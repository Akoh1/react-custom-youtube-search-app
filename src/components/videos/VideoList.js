import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  // const videos = props.videos;
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onSelectVideo={props.onSelectVideo}
        key={video.etag}
        video={video}/>
    );
  });
  return (
      <div className="col-md-4">
    <ul className="list-group">
      {videoItems}
    </ul>
      </div>
  )
};


export default VideoList;