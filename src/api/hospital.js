
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


export default {
    hothospital,
    hospitalList
}
