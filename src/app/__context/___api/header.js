import axios from 'axios';

import API_URL from './index';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post.Accept = 'application/json';

export const driver = axios;
