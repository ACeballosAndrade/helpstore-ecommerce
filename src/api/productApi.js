import axios from 'axios'

export const productApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1'
})