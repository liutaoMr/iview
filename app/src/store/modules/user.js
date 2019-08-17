import { login, getUserInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { setItem } from '@/utils/localStorage'


const user = {
  state: {
    token: getToken(),
    userInfo: { roles: [] }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.userInfo.roles = roles
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 用户名登录
    Login ({ commit }, userInfo) {
      const account = userInfo.account.trim()
      const password = userInfo.password
      const teamId = userInfo.teamId
      return new Promise((resolve, reject) => {
        login(account, password, teamId).then(response => {
          //返回请求
          const res = response.data
          if (res.ret) { // 表示登陆成功
            commit('SET_TOKEN', res.token)
            setToken(res.token)
            setItem('account', account)
            setItem('password', password)
            setItem('teamId', teamId)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user
