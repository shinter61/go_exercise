import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:1323', // バックエンド のURL:port を指定する
  timeout: 3 * 60 * 1000, // 3分
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  responseType: 'json'
});

export default client;
