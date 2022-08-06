<template>
  <div>
    <div class="top">
      <!-- 搜索 -->
      <form class="search">
        <div class="left">
          <span>工单编号:</span>
          <el-input v-model="input" placeholder="请输入"></el-input>
        </div>
        <div class="right">
          <span>工单状态:</span>

          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="待办" value="1"></el-option>
            <el-option label="进行" value="2"></el-option>
            <el-option label="取消" value="3"></el-option>
            <el-option label="完成" value="3"></el-option>
          </el-select>
        </div>
        <div class="searchs">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </form>
    </div>
    <!-- 列表 -->
    <div class="list">
      <Button :name="name" :icon="icon" />
      <Button :name="name2" />
      <Lists />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/index.vue'
import Lists from '@/components/Lists/index.vue'
import { getOrderList } from '@/api/table'
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      name: '新建',
      name2: '工单配置',
      icon: 'el-icon-circle-plus-outline'
    }
  },
  components: {
    Button,
    Lists
  },

  created() {
    this.getOrderList1()
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    async getOrderList1() {
      console.log(1111)
      const res = await getOrderList()
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
.top {
  width: 96%;
  height: 64px;
  background-color: #fff;
  margin-left: 25px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  // span {
  //   width: 190px;
  // }
  // ::v-deep .el-input__inner {
  //   width: 61%;
  // }
  .search {
    display: flex;
    .left {
      margin-left: 10px;
      display: flex;
      align-items: center;
      span {
        width: 100px;
        margin-right: 10px;
      }
    }
    .right {
      margin-left: 10px;
      display: flex;
      align-items: center;
      span {
        width: 73px;
        margin-right: 10px;
      }
    }
    .searchs {
      margin-left: 10px;
    }
  }
}
.list {
  width: 96%;
  margin-left: 25px;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  height: 100%;
}
</style>
