<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="编号">
        <el-input v-model="exhibitionSet.exCode"/>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="exhibitionSet.exName"/>
      </el-form-item>
      <el-form-item label="地点">
        <el-input v-model="exhibitionSet.exSite"/>
      </el-form-item>
      <el-form-item label="场馆">
        <el-input v-model="exhibitionSet.exVenue"/>
      </el-form-item>
      <el-form-item label="展会时间">
        <!--        <el-input v-model="exhibitionSet.exST"/>-->
        <el-date-picker
          v-model="exhibitionSet.exST"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"/>
        <el-col :span="2" class="line">-</el-col>
        <el-date-picker
          v-model="exhibitionSet.exET"
          type="datetime"
          placeholder="选择结束时间"
          value-format="yyyy-MM-dd HH:mm:ss"/>
      </el-form-item>
      <!--      format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒"-->
      <!--      <el-form-item label="结束时间">-->
      <!--        &lt;!&ndash;        <el-input v-model="exhibitionSet.exET"/>&ndash;&gt;-->
      <!--        -->
      <!--      </el-form-item>-->

      <el-form-item label="参展商要求">
        <el-input v-model="exhibitionSet.exRequire"/>
      </el-form-item>
      <el-form-item label="收费标准">
        <el-input v-model="exhibitionSet.exRates"/>
      </el-form-item>
      <el-form-item label="食宿安排">
        <el-input v-model="exhibitionSet.exRoom"/>
      </el-form-item>
      <el-form-item label="会展组织机构">
        <el-input v-model="exhibitionSet.exOrganization"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import exhibitionInfoSet from '@/api/exhibitionInfoSet'
export default {
  data() {
    return {
      exhibitionSet: {}
    }
  },
  created() {
    // 页面渲染之前执行
    // 获取路由id值 调用接口得到医院设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getExhibitionSet(id)
    } else {
      this.exhibitionSet = {}
    }
  },
  methods: {
    // 根据id查询
    // getExhibitionSet(id) {
    //   exhibitionInfoSet.getExhibitionSet(id)
    //     .then(response => {
    //       this.exhibitionSet = response.data
    //     })
    // },
    // 添加
    save() {
      exhibitionInfoSet.saveExhibitionSet(this.exhibitionSet)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/exhibition/exhibitionInfo/list' })
        })
    },
    // 修改
    update() {
      exhibitionInfoSet.updateExhibitionSet(this.exhibitionSet)
        .then(response => {
        // 提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/exhibition/exhibitionInfo/list' })
        })
    },

    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.exhibitionSet.id) { // 没有id，做添加
        this.save()
      } else { // 修改
        this.update()
      }
    },
    getExhibitionSet(id) {
      exhibitionInfoSet.getExhibitionSet(id)
        .then(response => {
          this.exhibitionSet = response.data
        })
    }

  }

}

</script>
