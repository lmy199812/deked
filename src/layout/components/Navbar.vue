<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->

    <div class="right-menu">
      <div class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="$store.state.user.userInfo.image" class="user-avatar" />
          <div class="el-icon-caret" @click.native="logout">
            退出<i class="el-icon-caret-bottom"></i>
          </div>
          <span>欢迎您，{{ $store.state.user.userInfo.userName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb,
    // Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      // this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      console.log(111)
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(83, 115, 224);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 999;
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    color: #fff;
    // background-color: #333;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        // margin-top: 5px;
        position: relative;
        width: 185px;
        span {
          margin-left: 10px;
          color: #fff;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          // margin-top: 30px;
        }
        .el-icon-caret {
          position: absolute;
          right: -31px;
          color: #fff;
          font-size: 15px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -19px;
          bottom: 1px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
