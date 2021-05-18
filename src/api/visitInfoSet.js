import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default {
  getVisitSetList(current, limit, searchObj) {
    return request({
      url: `admin/info/visitSet/findPageVisitSet/${current}/${limit}`,
      method: 'post',
      // params
      data: searchObj // 使用json进行传递
    })
  },

  // 删除展会信息
  deleteVisitSet(visit_id) {
    return request({
      url: `/admin/info/visitSet/${visit_id}`,
      method: 'delete'
    })
  },

  // 批量删除展会信息
  batchVisitSet(idList) {
    return request({
      url: `/admin/info/visitSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 添加展会信息
  saveVisitSet(visitSet) {
    return request({
      url: `/admin/info/visitSet/saveVisitSet`,
      method: 'post',
      dateType: 'json',
      contentType: 'application/json',
      data: visitSet
      // visitSet
    })
  },
  // 信息id查询
  getVisitSet(visit_id) {
    return request({
      url: `/admin/info/visitSet/getVisitSet/${visit_id}`,
      method: 'get'
    })
  },
  // 修改展会信息
  updateVisitSet(visitSet) {
    return request({

      url: `/admin/info/visitSet/updateVisitSet`,
      method: 'post',
      data: visitSet
    })
  }

}
