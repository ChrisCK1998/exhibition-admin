<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="编号">
        <el-input v-model="unitSet.unitCode"/>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="unitSet.unitName"/>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="unitSet.unitPost"/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="unitSet.unitSite"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="unitSet.unitEmail"/>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="unitSet.unitPrincipal"/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="unitSet.unitPhone"/>
      </el-form-item>
      <el-form-item label="规模">
        <el-input v-model="unitSet.unitScale"/>
      </el-form-item>
      <el-form-item label="收费标准">
        <el-input v-model="unitSet.unitFee"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import unitInfoSet from '@/api/unitInfoSet'
export default {
  data() {
    return {
      unitSet: {}
    }
  },
  created() {
    // 页面渲染之前执行
    // 获取路由id值 调用接口得到设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getUnitSet(id)
    } else {
      this.unitSet = {}
    }
  },
  methods: {
    // 根据id查询
    // getUnitSet(id) {
    //   unitInfoSet.getUnitSet(id)
    //     .then(response => {
    //       this.unitSet = response.data
    //     })
    // },
    // 添加
    save() {
      unitInfoSet.saveUnitSet(this.unitSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/unit/unitInfo/list' })
        })
    },
    // 修改
    update() {
      unitInfoSet.updateUnitSet(this.unitSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/unit/unitInfo/list' })
        })
    },

    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.unitSet.id) { // 没有id，做添加
        this.save()
      } else { // 修改
        this.update()
      }
    },
    getUnitSet(id) {
      unitInfoSet.getUnitSet(id)
        .then(response => {
          this.unitSet = response.data
        })
    }

  }

}

</script>
