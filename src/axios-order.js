import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-4ee1e-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;