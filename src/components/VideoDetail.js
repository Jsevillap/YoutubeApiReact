import React from 'react'

class VideoDetail extends React.Component {

    render() {


        if (this.props.video) {
            return (

                <div className="ten wide column " id="fullPage">
                    <iframe width="100%" style={{ aspectRatio: "16/9" }} src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="ui segment">
                        <h3>{this.props.video.snippet.title}</h3>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
                </div>

            )
        } else {
            return (

                <div className="ten wide column" id="fullPage">Search for videos and select one to watch HERE!</div>

            )
        }


    }

}

export default VideoDetail;