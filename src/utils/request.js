import axios from 'axios'
axios.defaults.baseURL = '/api'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code != '00000') {
    // alert(response.data.msg)
    console.log('response!=00000')
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  // alert('请求有误，⽹络开⼩差')
  console.log('response!=请求有误，⽹络开⼩差')
  return Promise.reject(error);
});
const get = (url, params) => {
  return axios.get(url, { params })
}
const post = (url, data) => {
  return axios.post(url, data)
}
const del = (url, data) => {
  return axios.delete(url, data)
}
export default { get, post,del }
