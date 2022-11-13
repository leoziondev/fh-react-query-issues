import axios from 'axios'

export const githubApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_FINE_GRAINED_TOKEN}`
  }
})