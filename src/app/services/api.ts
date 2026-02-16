import axios from 'axios';

import { wait } from '../utils/wait';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// just to test latency
api.interceptors.response.use(async (data) => {
  await wait(500);
  return data;
});
