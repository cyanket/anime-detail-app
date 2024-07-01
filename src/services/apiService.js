import axios from 'axios';

export const fetchToken = async (email) => {
  const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', { email });
  return response.data.token;
};

export const fetchAnimeContent = async (token) => {
  const response = await axios.get('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.content;
};
