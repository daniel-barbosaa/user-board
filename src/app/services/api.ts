import axios from 'axios';

import { ENV } from '../utils/env';
import { wait } from '../utils/wait';

export const api = axios.create({
  baseURL: ENV.API_URL,
});

// just to test latency
api.interceptors.response.use(async (data) => {
  await wait(500);
  return data;
});
