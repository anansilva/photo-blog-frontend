
export const FETCH_POSTS = 'FETCH_POSTS';
export const GET_USER = 'GET_USER';

const fetchedPosts = posts => ({type: FETCH_POSTS, posts, payload: posts});
const currentUser = data => ({type: GET_USER, data, payload: data});

export const fetchPosts = (token = '') => {
  return dispatch =>
    fetch('http://localhost:3000/api/v1/posts', {
      method: 'GET',
      headers: { 'TOKEN': token }
    })
    .then(response => response.json())
    .then(posts => dispatch(fetchedPosts(posts)))
    .catch(error => console.log(error));
}

export const requestUserLogin = (request) => {
  const formData = new FormData();
  formData.append("user[email]", request.user.email);
  formData.append("user[password]", request.user.password);
  
  return dispatch =>
  fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => dispatch(currentUser(data)))
    .catch(error => console.log(error)
  );
}
