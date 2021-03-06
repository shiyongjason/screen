import axios from './api' // 倒入 api
/* 将所有接口统一起来便于维护
 */
// 单独倒出
// 读取配置文件
export const getconfigdata = () => {
  console.log(1)
  return axios({
    url: '/static/dataconfig/config.json',
    method: 'get'
  })
}
// 阿里云免费的天气接口 10000次以内免费
export const getWeather = (params) => {
  return axios({
     url: 'http://jisutqybmf.market.alicloudapi.com/weather/query?city=' + params.city,
   // url:"http://wthrcdn.etouch.cn/weather_mini?city="+ params.city,
    method: 'get',
    data: params,
    headers: {'Authorization': 'APPCODE d9e59ab2ea2740859a7fd075887702c8'}
  })
}
// 测试超时的接口
export const testTimeout = (params) => {
  return axios({
    url: 'https://www.facebook.com',
    method: 'get'
  })
}
// 默认全部倒出
// 根绝需要进行
export default {
  getconfigdata,
  getWeather,
  testTimeout
}
