import request from '@/utils/request'
export function login (account, password, teamId) {
  const data = {
    account,
    password,
    teamId
  }
  return request({
    url: '',//在这里写请求接口验证地址如果地址正确，返回一个参数。
    method: 'get',
    params: data
  })
}
export function getTeamByName (username) {
  return request({
    url: '',
    method: 'get',
    params: username
  })
}

export function getUserInfo (token) {
  return request({
    url: 'api/login/userInfo.json',
    method: 'get',
    params: { token }
  })
}
export function logout () {
  return request({
    url: '',
    method: 'get'
  })
}
