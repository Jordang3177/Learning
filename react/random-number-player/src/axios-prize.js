import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://random-nunber-prize.firebaseio.com/'
})

export default instance;