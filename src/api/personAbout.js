/*
*  添加体检人相关接口
*/
import Http from 'utils/request'

const getPersonList = (params) => {
    return Http.get('/personList1', params)
}
const addPerson = (data) => {
    return Http.post('/personList1', data)
}

const delUser = (data) => {
    return Http.del('/personList1', data)
}

export default {
    getPersonList,
    addPerson,
    delUser
}