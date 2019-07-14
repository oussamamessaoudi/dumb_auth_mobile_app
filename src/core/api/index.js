import axios from 'axios';


const apiCallGet = (url, success = () => {}, error = () => {}) => {
  axios.get(url)
    .then(success)
    .catch(error);
};

export default apiCallGet;
