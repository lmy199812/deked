<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="date" label="工单编号" width="160">
        </el-table-column>
        <el-table-column prop="date" label="设备编号" width="120">
        </el-table-column>
        <el-table-column prop="date" label="工单类型" width="120">
        </el-table-column>

        <el-table-column prop="date" label="工单方式" width="80">
        </el-table-column>

        <el-table-column prop="date" label="工单状态" width="120">
        </el-table-column>
        <el-table-column prop="date" label="运营人员" width="120">
        </el-table-column>
        <el-table-column prop="date" label="创建日期" width="160">
        </el-table-column>
        <el-table-column prop="date" label="操作" width="120">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>

<style scoped></style>
