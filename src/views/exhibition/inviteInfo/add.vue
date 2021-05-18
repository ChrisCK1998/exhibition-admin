<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="邀请函编号">
        <el-input v-model="inviteSet.inviteCode"/>
      </el-form-item>
      <el-form-item label="展会编号">
        <el-input v-model="inviteSet.exCode"/>
      </el-form-item>
      <el-form-item label="单位编号">
        <el-input v-model="inviteSet.unitCode"/>
      </el-form-item>
      <el-form-item label="是否参加">
        <el-switch
          v-model="inviteSet.isAttended"
          active-color="#13ce66"
          inactive-color="#ff4949"/>
        <el-form-item/>

        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import inviteInfoSet from '@/api/inviteInfoSet'
export default {
  data() {
    return {
      inviteSet: {}
    }
  },
  created() {
    // 页面渲染之前执行
    // 获取路由id值 调用接口得到设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getInviteSet(id)
    } else {
      this.inviteSet = {}
    }
  },
  methods: {
    // 根据id查询
    // getInviteSet(id) {
    //   inviteInfoSet.getInviteSet(id)
    //     .then(response => {
    //       this.inviteSet = response.data
    //     })
    // },
    // 添加
    save() {
      inviteInfoSet.saveInviteSet(this.inviteSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/exhibition/inviteInfo/list' })
        })
    },
    // 修改
    update() {
      inviteInfoSet.updateInviteSet(this.inviteSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/exhibition/inviteInfo/list' })
        })
    },

    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.inviteSet.id) { // 没有id，做添加
        this.save()
      } else { // 修改
        this.update()
      }
    },
    getInviteSet(id) {
      inviteInfoSet.getInviteSet(id)
        .then(response => {
          this.inviteSet = response.data
        })
    }

  }

}

</script>
