import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        videoLoad: null
    }

    componentDidMount = () => {
        this.onTermSubmit("backstreet");
    }

    onTermSubmit = async (term) => {
        try {

            const result = await youtube.get("/search", {
                params: {
                    q: term
                }
            });
            this.setState({

                videos: result.data.items,
                videoLoad: result.data.items[0]

            });
            console.log(this.state.videos);

        } catch (err) {
            throw new Error("This an error from the Youtube API: " + err);
        }


    };

    loadTitleOnClick = (video) => {
        this.setState({ videoLoad: video })

    }




    render() {




        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui internally celled grid">
                    <div className="row">
                        <VideoDetail video={this.state.videoLoad} />
                        <VideoList videos={this.state.videos} loadTitleOnClick={this.loadTitleOnClick} />
                    </div>

                </div>



            </div>
        )
    }

}

export default App;