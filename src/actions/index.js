
const ROOT_URL = 'http://localhost:3000/api/v1/posts';

export const FETCH_POSTS = 'FETCH_POSTS';

const fetchedPosts = posts => ({type: FETCH_POSTS, posts, payload: posts});

export const fetchPosts = () => {
  return dispatch =>
    fetch(`${ROOT_URL}`)
    .then(response => response.json())
    .then(posts => dispatch(fetchedPosts(posts)))
}
