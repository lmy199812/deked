import router from "./router"
import store from "./store"

const whitelist = ['/login', '/404']
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  console.log(token)
  if (token) {
      if (!store.state.user.userInfo.userId) {
          // console.log(1);
          store.dispatch("user/getUserInfo", store.state.user.data.userId);
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    const isCludes = whitelist.includes(to.path)
    if (isCludes) {
      next()
    } else {
      next('/login')
    }
  }
})