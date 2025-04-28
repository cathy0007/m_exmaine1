
/*
*  机构相关接口
*/
import Http from 'utils/request'

const hothospital = (params) => {
    return Http.get('/hothospital', params)
}
const hospitalList = (params) => {
    return Http.get('/hospitalList', params)
}
const hospitalDesc = (params) => {
    return Http.get('/hospitalDesc', params)
}

export default {
    hothospital,
    hospitalList,
    hospitalDesc
}
