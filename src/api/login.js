import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'admin/info/loginSet/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: 'admin/info/loginSet/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'admin/info/loginSet/user/logout',
    method: 'post'
  })
}
