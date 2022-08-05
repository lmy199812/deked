<template>
  <div id="app">
    <div class="middles">
      <div class="middle">
        <img class="img" src="../../assets/图片.png" />
        <div style="margin: 20px"></div>
        <el-form
          ref="loginFrom"
          auto-complete="on"
          :label-position="labelPosition"
          :model="formLabelAlign"
          :rules="loginFormRules"
        >
          <el-form-item prop="loginName">
            <el-input
              v-model="formLabelAlign.loginName"
              placeholder="请输入账号"
            >
              <i slot="prefix" class="el-icon-mobile"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formLabelAlign.password"
              :type="this.change === true ? 'password' : 'text'"
              placeholder="请输入密码"
            >
              <i slot="prefix" class="el-icon-lock"></i>
              <i @click="btnChange" slot="suffix" v-if="change"
                ><svg-icon iconClass="eye"></svg-icon
              ></i>
              <i @click="btnChange" slot="suffix" v-else
                ><svg-icon iconClass="eye-open"></svg-icon
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="formLabelAlign.code"
              class="inputEnd"
              placeholder="请输入验证码"
            >
              <i slot="prefix" class="el-icon-folder-checked"></i>
              <!-- <i slot="append">123</i> -->
            </el-input>
            <div class="verification" @click="photoCode">
              <a><img :src="$store.state.user.photo" alt="" /></a>
            </div>
          </el-form-item>
          <div class="logins">
            <el-form-item>
              <el-button
                type="primary"
                class="login"
                @click="login"
                :plain="true"
                >登录
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { photoCode } from '@/api/user'
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: ''
      },
      loginFormRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '账号格式不正确',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '密码格式不正确',
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      change: true,
      imgs: ''
    }
  },

  created() {
    this.photoCode()
  },

  methods: {
    // 点击显示隐藏密码
    btnChange() {
      this.change = !this.change
      console.log(111)
    },
    // 验证码
    async photoCode() {
      try {
        this.formLabelAlign.clientToken = Math.floor(Math.random() * 10000)
        // // console.log(sum)
        // const res = await photoCode(this.formLabelAlign.clientToken)
        // console.log(res)
        // const captchaImg = window.URL.createObjectURL(res.data)
        // this.imgs = captchaImg
        // console.log(this.imgs)
        this.$store.dispatch('user/getPhoto', this.formLabelAlign.clientToken)
      } catch (error) {}
    },
    // 登录判断
    async login() {
      try {
        await this.$refs.loginFrom.validate()
        // console.log(this.formLabelAlign)
        this.$store.dispatch('user/getLogin', this.formLabelAlign).then(() => {
          if (this.$store.state.user.data.success === false) {
            this.$message({
              showClose: true,
              message: this.$store.state.user.data.msg,
              type: 'error'
            })
          } else if (this.$store.state.user.data.success === true) {
            this.$router.push('/')
          }
        })
        // console.log(111)
        // console.log(this.$store.state.user.data)
      } catch (error) {
        console.log(222)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.middles {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(../../assets/背景图.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.middle {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 76px 35px 0;
  border-radius: 10px;
}
.img {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
}
.el-icon-mobile {
  font-size: 19px;
}
.el-icon-lock {
  font-size: 19px;
}
.el-icon-folder-checked {
  font-size: 19px;
}
.inputEnd {
  width: 70%;
}
.inputs {
  width: 40%;
}
::v-deep .el-input__inner {
  height: 52px;
}
// /deep/.el-form-item .is-required{
//   // height:52px;
// }
.logins {
  display: flex;
  justify-content: center;
  width: 450px;
  height: 50px;
}
.login {
  // margin-left: 100px;
  width: 450px;
  height: 50px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
}
::v-deep .el-input__prefix {
  display: flex;
  align-items: center;
}
::v-deep .el-input__suffix {
  display: flex;
  align-items: center;
  width: 24px;
}
::v-deep .el-form-item__content {
  display: flex;
  align-items: center;
}
.verification {
  width: 30%;
  // background-color: #333;
  height: 52px;
}
</style>
