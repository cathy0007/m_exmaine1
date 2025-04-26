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
export default {
    hotCompose,
    composeList,
    getComposeDesc
}
