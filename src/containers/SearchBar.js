import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReview } from '../actions/index'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            author: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        //let input = e.target.value;
        this.setState({ author: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchReview(this.state.author.replace(/ /g, "%20"));
        console.log(this.state.author)
        this.setState({ term: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Chercher votre livre"
                    value={this.state.author}
                    onChange={this.onInputChange}

                />
                <span>
                    <button type="submit"> Submit </button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchReview }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);