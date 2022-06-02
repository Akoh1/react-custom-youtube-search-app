import React from 'react';

const VideoListItem = ({video, onSelectVideo}) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onSelectVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img alt="something is here" className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;