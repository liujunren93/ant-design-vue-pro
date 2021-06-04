import axios from 'axios'
import storage from 'store'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
  withCredentials: true
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.data) {
    const data = error.data
    // 从 localstorage 获取 token
    const token = storage.get(ACCESS_TOKEN)
    const stauts = data.code
    var msg = data.msg
    if (error.config.notification !== undefined && error.config.notification.feil) {
      msg = error.config.notification.feil
    }
    switch (stauts) {
        case 403:
      alert(msg)
          break
        case 401:
         alert(1)
          if (token) {
          console.log('logout')
          }
          break
         case 420:
          alert(2333)
            break
         case 500:
          alert(2222)
          break
        default:
    }
    return Promise.reject(error.data)
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  console.log(response)
  if (response.data.code === 200) {
    if (response.config.method !== 'get') {
      var msg = '操作成功'
      var show = true
      if (response.config.notification) {
        if (response.config.notification.disable !== undefined) { // 是否显示成功提示
          show = !response.config.notification.disable
        }
        msg = response.config.notification.success
      }
      if (show) {
        alert(msg)
      }
    }
    return response.data
  } else {
   return errorHandler(response)
  }
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}
