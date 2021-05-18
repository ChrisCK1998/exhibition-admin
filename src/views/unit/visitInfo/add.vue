<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="单位编号">
        <el-input v-model="visitSet.unitCode"/>
      </el-form-item>
      <el-form-item label="员工编号">
        <el-input v-model="visitSet.visitCode"/>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="visitSet.visitName"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="visitSet.visitSex"/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="visitSet.visitPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import visitInfoSet from '@/api/visitInfoSet'
export default {
  data() {
    return {
      visitSet: {}
    }
  },
  created() {
    // 页面渲染之前执行
    // 获取路由id值 调用接口得到设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getVisitSet(id)
    } else {
      this.visitSet = {}
    }
  },
  methods: {
    // 根据id查询
    // getVisitSet(id) {
    //   visitInfoSet.getVisitSet(id)
    //     .then(response => {
    //       this.visitSet = response.data
    //     })
    // },
    // 添加
    save() {
      visitInfoSet.saveVisitSet(this.visitSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/unit/visitInfo/list' })
        })
    },
    // 修改
    update() {
      visitInfoSet.updateVisitSet(this.visitSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/unit/visitInfo/list' })
        })
    },

    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.visitSet.id) { // 没有id，做添加
        this.save()
      } else { // 修改
        this.update()
      }
    },
    getVisitSet(id) {
      visitInfoSet.getVisitSet(id)
        .then(response => {
          this.visitSet = response.data
        })
    }

  }

}

</script>
