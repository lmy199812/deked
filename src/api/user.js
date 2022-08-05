import request from '@/utils/request'
import store from '@/store'
/**
 * 
 * @param {*} clientToken 验证码
 * @returns 
 */
export function photoCode (clientToken) {
  return request({
    url:`/api/user-service/user/imageCode/${clientToken}`,
    responseType:'blob'
  })
}
//登录
export function login (data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
/**
 * 
 * @param {*} id 获取用户基本信息
 * @returns 
 */
export function getUserInfo (id) {
  return request({
    url: "/api/user-service/user/" + id,
    // headers: {
    //   Authorization: `${store.state.user.token}`
    // }
  })
}