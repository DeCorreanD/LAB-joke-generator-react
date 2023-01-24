import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist,sexist,explicit&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

export default getJoke;
