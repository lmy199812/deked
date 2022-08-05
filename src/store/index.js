import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
    // 插件
  plugins: [
    createVuexPersisted({
      reducer(state){
        // 返回什么对象，把什么对象本地存储
        return{
          user:{
            token: state.user.token,
            data: state.user.data,
            userInfo:state.user.userInfo
        }
        }
      }
    })
  ]
})

export default store
