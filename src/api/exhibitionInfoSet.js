import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default {
  getExhibitionSetList(current, limit, searchObj) {
    return request({
      url: `admin/info/exhibitionSet/findPageExhibitionSet/${current}/${limit}`,
      method: 'post',
      // params
      data: searchObj // 使用json进行传递
    })
  },

  // 删除展会信息
  deleteExhibitionSet(id) {
    return request({
      url: `/admin/info/exhibitionSet/${id}`,
      method: 'delete'
    })
  },

  // 批量删除展会信息
  batchExhibitionSet(idList) {
    return request({
      url: `/admin/info/exhibitionSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 添加展会信息
  saveExhibitionSet(exhibitionSet) {
    return request({
      url: `/admin/info/exhibitionSet/saveExhibitionSet`,
      method: 'post',
      dateType: 'json',
      contentType: 'application/json',
      data: exhibitionSet
      // exhibitionSet
    })
  },
  // 信息id查询
  getExhibitionSet(id) {
    return request({
      url: `/admin/info/exhibitionSet/getExhibitionSet/${id}`,
      method: 'get'
    })
  },
  // 修改展会信息
  updateExhibitionSet(exhibitionSet) {
    return request({

      url: `/admin/info/exhibitionSet/updateExhibitionSet`,
      method: 'post',
      data: exhibitionSet
    })
  }

}
