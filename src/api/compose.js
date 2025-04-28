/*
*  套餐相关接口
*/
import Http from 'utils/request'

const hotCompose = (params) => {
    return Http.get('/hotcompose', params)
}

const composeList = (params) => {
    return Http.get('/composeList', params)
}

const getComposeDesc = (params) => {
    return Http.get('/getComposeDesc', params)
}

const addPerson = (data) => {
    return Http.post('/addPerson', data)
}
const myOrderList = (data) => {
    return Http.post('/myOrderList', data)
}
const getMyOrderList = (data) => {
    return Http.get('/myOrderList', data)
}
const getOrderInfo = (params) => {
    return Http.get('/orderInfo', params)
}

export default {
    hotCompose,
    composeList,
    getComposeDesc,
    myOrderList,
    getMyOrderList,
    getOrderInfo
}
