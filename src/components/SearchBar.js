import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);

        /*Make sure we call callback from parent component*/

    }

    render() {
        return (

            <div className="ui segment search-bar" style={{ marginTop: "35px" }}>
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label htmlFor="search">Search for a youtube video</label>
                        <input type="text" name="" id="search" placeholder="Search for a youtube video" value={this.state.term} onChange={this.onInputChange} />
                    </div>

                </form>

            </div>
        )
    }

}

export default SearchBar;