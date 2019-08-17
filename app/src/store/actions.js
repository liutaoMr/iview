const actions = {
  Login({commit},userInfo){
    console.log(userInfo)
  //  获取到页面的密码和用户名进行
    return new Promise((resolve, reject) => {
      login(account, password, teamId).then(response => {
        debugger
        const res = response.data
        if (res.ret) {
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
  }
}

export default actions
