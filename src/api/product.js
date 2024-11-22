import request from '@/utils/request'

export const getProList = (paramsObj) => {
  const { categoryId, goodsName, page } = paramsObj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId: goodsId
    }
  })
}

export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId: goodsId,
      limit: limit
    }
  })
}
