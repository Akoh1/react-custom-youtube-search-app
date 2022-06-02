import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/videos/VideoList';
import VideoDetail from './components/videos/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.REACT_APP_API_KEY;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [] ,
      videoSelected: null,
    };

    this.videoSearch('dancing');

  }

  async videoSearch(term) {
    await YTSearch({key: API_KEY, term: term}, (videos) => {
      
      this.setState({
        videos: videos,
        videoSelected: videos[0]
      }) // when key and property are the same variable name
      // this.setState({videos: videos})
      console.log(videos)
    });
  }

  render() {
    return (
    <div className="App">
      <SearchBar onSearchTerm={term => this.videoSearch(term)}/>
      <VideoDetail video={this.state.videoSelected}/>
      <VideoList 
        onSelectVideo={videoSelected => this.setState({videoSelected: videoSelected})}
        videos={this.state.videos}/>
    </div>
  );
  }
}

export default App;




