import axios from 'axios';

const BACKEND_IP = '192.168.0.101';


export const api = axios.create({
  baseURL: `http://${BACKEND_IP}:3000`,
});