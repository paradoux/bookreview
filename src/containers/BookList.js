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
                    <a href={result.url} key={result.book_title} >
                        <div className="col-md-4">
                            <li className="card">
                                <div className="card-body">
                                    <div className="title-zone">
                                        <h1 className="card-title">
                                            {result.book_title}
                                        </h1>
                                    </div>
                                    <div className="card-text">
                                        {(!result.summary) ? (<p> No summary available, click to see the review </p>) :
                                            (<p> Summary: </p> ,
                                                result.summary)
                                        }
                                    </div>
                                </div>
                            </li>
                        </div>
                    </a >
                )
            });
            return results
        }
        else return (<p> Sorry, there's no review available for the moment ! </p>)
    };



    render() {
        return (
            <div>
                <ul>
                    <div className="row">
                        {this.renderReviews()}
                    </div>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ book }) {
    return { book }
}

export default connect(mapStateToProps)(BookList)