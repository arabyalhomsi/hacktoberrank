import axios from 'axios'

const port = process.env.VUE_APP_DEFAULT_BACKEND_PORT || 8001
const host = process.env.VUE_APP_DEFAULT_BACKEND_HOST || 'http://localhost'

const api = {
  getPulls (year) {
    return axios.get(`${host}:${port}/api/v1/pulls/${year}`)
  }
}

export default api
