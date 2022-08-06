import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/api/task-service/task/search',
    params
  })
}

// export function getOrderList(pageIndex, pageSize, orderNo, startDate, endDate) {
//   return request({
//     url: '/api/order-service/order/search',
//     method: 'get',
//     params: {
//       pageIndex,
//       pageSize,
//       orderNo,
//       startDate,
//       endDate
//     }
//   })
// }
