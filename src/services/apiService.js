import axios from 'axios';

// Make a POST request to generate a token
export const fetchToken = async (email) => {
  const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', { email });
  return response.data.token;
};

// Make a GET request to fetch anime content with the authorization header
export const fetchAnimeContent = async (token) => {
  const response = await axios.get('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.content;
};
