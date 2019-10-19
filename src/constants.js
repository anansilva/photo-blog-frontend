const prod = {
  url: {
   API_URL: 'https://photo-blog-api/api/v1',
   API_URL_AUTH: 'https://photo-blog-api/auth'
  }
 };

 const dev = {
  url: {
   API_URL: 'http://localhost:3000/api/v1',
   API_URL_AUTH: 'http://localhost:3000/auth'
  }
 };

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;