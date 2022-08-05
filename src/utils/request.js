// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  
}) // 创建一个axios的实例
service.interceptors.request.use(
  (config) => {
    // 当前请求的配置
    // console.log(config)
    // console.log(store.state.user.token)
    if (store.state.user.token) {
      config.headers.Authorization = store.state.user.token
      // console.log(store.state.user.token)
      // console.log(111)
    }
  return config
  }
) // 请求拦截器
service.interceptors.response.use(
  (res) => {
    // console.log(res)
  //   // 请求成功的函数
    const { data } = res
    // console.log(data);
    return data
  }
) // 响应拦截器
export default service // 导出axios实例
