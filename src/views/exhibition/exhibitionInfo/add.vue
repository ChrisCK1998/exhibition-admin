<!--<template>-->
<!--  <div class="app-container">-->
<!--    展会信息添加-->
<!--  </div>-->
<!--</template>-->
<!--<template>-->
<!--  <div class="app-container">-->
<!--    展会信息列表-->
<!--  </div>-->
<!--</template>-->
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>
<script>
// 引入接口文件
// import exhibitionInfoSet from '../../../api/exhibitionInfoSet'
import exhibitionInfoSet from '@/api/exhibitionInfoSet'

export default {

  // 定义变量和初始值
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      current: 1, // 当前页
      limit: 3, // 每页显示记录数
      searchObj: {}, // 条件封装对象
      list: [], // 每页数据集合
      total: 0 // 总记录数
    }
  },
  created() { // 在页面渲染之前执行
    // 一般调用methods内定义的方法得到数据
    this.getList()
  },
  methods: {// 定义方法请求接口调用
    // 获取列表
    getList() {
      exhibitionInfoSet.getExhibitionSetList(this.current, this.limit, this.searchObj)
        .then(respose => { // respose返回接口参数
          this.list = respose.data.records
          this.total = respose.data.total
          console.log(respose)
        })// 成功后执行
        .catch(error => {
          console.log(error)
        })// 失败后执行
    }
  }

}
</script>
