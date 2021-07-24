import React from 'react';
import VideoItem from './VideoItem';
import he from "he";

class VideoList extends React.Component {

    onTitleClick = (video) => {
        this.props.loadTitleOnClick(video)
    }


    render() {

        const videoURL = this.props.videos.map(video => {
            //const title = he.decode(video.snippet.title);
            video.snippet.title = he.decode(video.snippet.title)
            return (

                <VideoItem video={video} onTitleClick={this.onTitleClick} key={video.id.videoId} />

            )
        });


        return (
            <div className="six wide column" id="fullPageList">
                {videoURL}
            </div>
        )
    }

}

export default VideoList;