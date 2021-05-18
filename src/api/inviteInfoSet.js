import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default {
  getInviteSetList(current, limit, searchObj) {
    return request({
      url: `admin/info/inviteSet/findPageInviteSet/${current}/${limit}`,
      method: 'post',
      // params
      data: searchObj // 使用json进行传递
    })
  },

  // 删除展会信息
  deleteInviteSet(invite_id) {
    return request({
      url: `/admin/info/inviteSet/${invite_id}`,
      method: 'delete'
    })
  },

  // 批量删除展会信息
  batchInviteSet(idList) {
    return request({
      url: `/admin/info/inviteSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 添加展会信息
  saveInviteSet(inviteSet) {
    return request({
      url: `/admin/info/inviteSet/saveInviteSet`,
      method: 'post',
      dateType: 'json',
      contentType: 'application/json',
      data: inviteSet
      // inviteSet
    })
  },
  // 信息id查询
  getInviteSet(invite_id) {
    return request({
      url: `/admin/info/inviteSet/getInviteSet/${invite_id}`,
      method: 'get'
    })
  },
  // 修改展会信息
  updateInviteSet(inviteSet) {
    return request({

      url: `/admin/info/inviteSet/updateInviteSet`,
      method: 'post',
      data: inviteSet
    })
  }

}
