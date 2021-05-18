import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default {
  getUnitSetList(current, limit, searchObj) {
    return request({
      url: `admin/info/unitSet/findPageUnitSet/${current}/${limit}`,
      method: 'post',
      // params
      data: searchObj // 使用json进行传递
    })
  },

  // 删除展会信息
  deleteUnitSet(unit_id) {
    return request({
      url: `/admin/info/unitSet/${unit_id}`,
      method: 'delete'
    })
  },

  // 批量删除展会信息
  batchUnitSet(idList) {
    return request({
      url: `/admin/info/unitSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 添加展会信息
  saveUnitSet(unitSet) {
    return request({
      url: `/admin/info/unitSet/saveUnitSet`,
      method: 'post',
      dateType: 'json',
      contentType: 'application/json',
      data: unitSet
      // unitSet
    })
  },
  // 信息id查询
  getUnitSet(unit_id) {
    return request({
      url: `/admin/info/unitSet/getUnitSet/${unit_id}`,
      method: 'get'
    })
  },
  // 修改展会信息
  updateUnitSet(unitSet) {
    return request({

      url: `/admin/info/unitSet/updateUnitSet`,
      method: 'post',
      data: unitSet
    })
  }

}
