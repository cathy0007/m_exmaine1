/*
* 用户相关的接口
* 登录/退出，个人信息等
 */

import Http from 'utils/request'

export default {
  sendCode (data){
    return Http.post('/sendcode', data)
  },
  logbymobile (data){
    return Http.post('/logbymobile', data)
  }
}
