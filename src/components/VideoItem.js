import React from 'react'

class VideoItem extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.onTitleClick(this.props.video);
    }

    render() {
        return (
            <div className="ui segment internally celled grid" >
                <div className="row">
                    <div className="ui small image six wide column" style={{ display: "flex", alignItems: "center" }}>
                        <a href={`https://www.youtube.com/watch?v=${this.props.video.id.videoId}`}> <img src={this.props.video.snippet.thumbnails.high.url} alt={this.props.video.snippet.title} /></a>
                    </div>

                    <div className="ten wide column" style={{ display: "flex", alignItems: "center" }}>
                        <h4 className="clicky" onClick={this.handleClick}>{this.props.video.snippet.title}</h4>

                    </div>

                </div>



            </div>
        )
    }
}

export default VideoItem;