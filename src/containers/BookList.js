import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends React.Component {
    constructor() {
        super();
        this.renderReviews = this.renderReviews.bind(this);
    }


    renderReviews() {
        let res = this.props.book[0]
        if (res) {
            let results = res.results.map((result) => {
                return (
                    <li>
                        <div>
                            {result.book_title}
                        </div>
                        <div>
                            {result.summary}
                        </div>
                        <div>
                            <a href={result.url}> Link to "{result.book_title}" review </a>
                        </div>
                    </li>)
            });
            return results
        }
        else return <li> Waiting for Author</li>
    };



    render() {
        return (
            <div>
                <ul>
                    {this.renderReviews()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ book }) {
    return { book }
}

export default connect(mapStateToProps)(BookList)