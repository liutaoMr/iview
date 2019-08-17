const getters = {
  token: state => state.user.token,
  roles: state => state.user.userInfo.roles,
  userInfo: state => state.user.userInfo,
}

export default getters
