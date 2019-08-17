import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// request 拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // 让每个请求携带token-- ['Token']为自定义key
    config.headers['Token'] = getToken()
  }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// responee 拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  })

export default service
