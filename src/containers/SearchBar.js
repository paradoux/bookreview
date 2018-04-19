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
        this.setState({ author: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchReview(this.state.author.replace(/ /g, "%20"));
        this.setState({ author: '' });
    }

    render() {
        return (
            <div className="heightsetter">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Type an author's first and last name"
                        value={this.state.author}
                        onChange={this.onInputChange}
                        className="form-control form-control-lg"
                    />
                </form>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchReview }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);