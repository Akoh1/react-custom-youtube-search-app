import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/videos/VideoList';
import VideoDetail from './components/videos/VideoDetail';
import HeaderNav from './components/HeaderNav';
import YTSearch from 'youtube-api-search';
import { useLocation } from "react-router-dom";
import HomeContext from "./Context";

const API_KEY = process.env.REACT_APP_API_KEY;

//const HomeContext = React.createContext();

function App() {
    const [videos, setVideos] = useState([]);
    const [videoSelected, setVideoSelected] = useState();
    const loginLocation = useLocation();
    const logIn = loginLocation.state;
    
    const [loggedIn, setLoggedIn] = useState(logIn);
    console.log("login location value: " + loggedIn);


  const videoSearch = async (term) => {
    await YTSearch({key: API_KEY, term: term}, (videoList) => {
        setVideos(videoList);
        setVideoSelected(videoList[0])
      
      
        console.log(videoList)
    });
  }
  
  const onVideoSelected = (vid) => {
      setVideoSelected(vid);
  }
  
  
  useEffect(() => {
//      setLoggedIn(loginLocation.state);
      videoSearch('dancing');
        
    }, [loginLocation]);

    return (
        <HomeContext.Provider value={setLoggedIn}>
            <div className="App">
                <HeaderNav loggedIn={loggedIn}/>
              <SearchBar onSearchTerm={term => videoSearch(term)}/>
                <div className="row detail-list">
              <VideoDetail video={videoSelected}/>
              <VideoList 
                onSelectVideo={videoselected => onVideoSelected(videoselected)}
                videos={videos}/>
                </div>
            </div>
        </HomeContext.Provider>
  );

}
{/*class App extends Component {
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
        <HeaderNav/>
      <SearchBar onSearchTerm={term => this.videoSearch(term)}/>
        <div className="row detail-list">
      <VideoDetail video={this.state.videoSelected}/>
      <VideoList 
        onSelectVideo={videoSelected => this.setState({videoSelected: videoSelected})}
        videos={this.state.videos}/>
        </div>
    </div>
  );
  }
}
*/}

export default App;




