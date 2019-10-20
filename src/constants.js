const prod = {
  url: {
   BASE_URL: 'https://photo-blog-api.herokuapp.com',
   API_URL: 'https://photo-blog-api.herokuapp.com/api/v1',
   API_URL_AUTH: 'https://photo-blog-api.herokuapp.com/auth'
  }
 };

 const dev = {
  url: {
   BASE_URL: 'http://localhost:3000/',
   API_URL: 'http://localhost:3000/api/v1',
   API_URL_AUTH: 'http://localhost:3000/auth'
  }
 };

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;