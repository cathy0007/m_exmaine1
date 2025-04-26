<template>
  <div class="subscribe">
    <!-- header -->
    <myHeader :title="'我的预约'" />
    <div class="list pd-body">

      <dl v-for="(item, index) in list" :key="index" @click="$router.push({path:'/subscribeInfo', params: item.state})">
        <dt class="border1px">
          <span>{{ item.username }}</span>
          <span class="state" 
          :class="[
            {wait: item.order_status === '待体检'}, 
            {success: item.order_status === '已体检'},
            ]
            ">{{item.order_status}}</span>
        </dt>
        <dd>
          <span>体检机构：</span>
          <span>{{ item.chain_name }}</span>
        </dd>
        <dd>
          <span>体检时间：</span>
          <span>{{ item.time }}</span>
        </dd>
        <dd>
          <span>预约单号：</span>
          <span>{{ item.order_no }}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import myHeader from 'common/header'
export default {
  data () {
    return {
      list: [
      {
                "order_id": 1,
                "order_no": "TJ000001", //预约单号
                "user_id": 1,
                "username": "zhansan",
                "sex": 1,
                "mobile": "13000000000",
                "card": "37152519900872",
                "items": "1",
                "hospital_id": 1,
                "chain_id": "1",
                "time": "2021-06-18",//预约时间
                "order_status": "待支付",
                "total": "999",
                "addtime": 1624018444,
                "hospital_name": "慈铭体检",
                "chain_name": "慈铭体检海淀分院"
            },
            {
                "order_id": 2,
                "order_no": "TJ000002",
                "user_id": 1,
                "username": "zhansan",
                "sex": 1,
                "mobile": "13000000000",
                "card": "37152519900872",
                "items": "1",
                "hospital_id": 1,
                "chain_id": "1",
                "time": "2021-06-18",
                "order_status": "已支付",
                "total": "999",
                "addtime": 1624018444,
                "hospital_name": "慈铭体检",
                "chain_name": "慈铭体检海淀分院"
            },
            {
                "order_id": 3,
                "order_no": "TJ000003",
                "user_id": 1,
                "username": "zhansan",
                "sex": 1,
                "mobile": "13000000000",
                "card": "37152519900872",
                "items": "1",
                "hospital_id": 1,
                "chain_id": "1",
                "time": "2021-06-18",
                "order_status": "已取消",
                "total": "999",
                "addtime": 1624018444,
                "hospital_name": "慈铭体检",
                "chain_name": "慈铭体检海淀分院"
            },
            {
                "order_id": 4,
                "order_no": "TJ000004",
                "user_id": 1,
                "username": "zhansan",
                "sex": 1,
                "mobile": "13000000000",
                "card": "37152519900872",
                "items": "1",
                "hospital_id": 1,
                "chain_id": "1",
                "time": "2021-06-18",
                "order_status": "已完成",
                "total": "999",
                "addtime": 1624018444,
                "hospital_name": "慈铭体检",
                "chain_name": "慈铭体检海淀分院"
            },
            {
                "order_id": 5,
                "order_no": "TJ000005",
                "user_id": 1,
                "username": "lisi",
                "sex": 1,
                "mobile": "13000000000",
                "card": "37152519900872",
                "items": "1",
                "hospital_id": 1,
                "chain_id": "1",
                "time": "2021-06-18",
                "order_status": "待支付",
                "total": "999",
                "addtime": 1624018444,
                "hospital_name": "慈铭体检",
                "chain_name": "慈铭体检海淀分院"
            }
      ]
    }
  },
  components: {
    myHeader
  }
};
</script>

<style lang="less" scoped>
@import url(~assets/less/variable.less);

.list {
  padding: .4rem .32rem;
  background-color: #f1f5f8;
  .state {
    color: #333;

  }
  .success {
    color: #38ad67;
  }
  .wait {
    color: #ff9900;
  }
  .payed {
    color: plum;
  }
}

dl {
  margin-bottom: .4rem;
  background-color: #fff;
  border-radius: 0.08rem;
  box-sizing: border-box;
  font-size: .42rem;
  dt {
    display: flex;
    height: 1.18rem;
    padding: 0 0.38rem;
    margin-bottom: 0.15rem;
    align-items: center;


    span:nth-child(1) {
      flex: 1;
      color: #colors[primary];
    }
  }

  dd {
    padding: 0 0.38rem;
    line-height: 0.72rem;
  }
}
</style>
