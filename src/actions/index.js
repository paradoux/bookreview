import axios from 'axios'

const API_key = "0a465e45d0c84f33bbc64d8b695c2b49";

export const FETCH_REVIEW = "FETCH_REVIEW";

export function fetchReview(author) {

    const request = axios.get(`http://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=${API_key}`);

    return {
        type: FETCH_REVIEW,
        payload: request
    }
}


