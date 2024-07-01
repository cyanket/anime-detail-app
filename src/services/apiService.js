import axios from 'axios';

// Make a POST request to generate a token
export const fetchToken = async (email) => {
  try {
    const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', { email });
    return response.data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw new Error('Unable to fetch token. Please try again later.');
  }
};

// Make a GET request to fetch anime content with the authorization header
export const fetchAnimeContent = async (token) => {
  try {
    const response = await axios.get('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.content;
  } catch (error) {
    console.error('Error fetching anime content:', error);
    throw new Error('Unable to fetch anime content. Please try again later.');
  }
};
