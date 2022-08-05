import { login,photoCode,getUserInfo } from "@/api/user"
export default {
  namespaced: true,
  state: {
    token: '',
    data: {},
    photo: '',
    userInfo: {},
  },
  mutations: {
    setLogin (state,payload) {
      state.token = payload.token
      state.data = payload
      // console.log(state.data)
      
    },
    setPhoto (state,payload) {
      state.photo = payload
      
    },
    setUserInfo(state, payload) {
      state.userInfo = { ...payload };
    },
  },
  actions: {
   async getLogin (context,payload) {
      const res = await login(payload)
      // console.log(res)
      context.commit('setLogin', res)
      // localStorage.setItem('token', res.data.token)
    },
    async getUserInfo(context, payload) {
      const res = await getUserInfo(payload);
      console.log(res);
      context.commit("setUserInfo", res);
    },
    async getPhoto (context,payload) {
      const res = await photoCode(payload)
      // console.log(res)
      const captchaImg = window.URL.createObjectURL(res)
      context.commit('setPhoto',captchaImg)
    },
        // 退出
    logout (context) {
      context.commit('setLogin', '')
      context.commit('setUserInfo',{})
    }
  },
  getters: {},
}
