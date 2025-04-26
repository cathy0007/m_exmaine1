<template>
  <div class="subscribe">
    <!-- header -->
    <myHeader :title="'体检预约详情'" />
    <div class="list pd-body">
      <dl>
        <dt class="border1px">
          <span>{{ subscribeInfo.username }}</span><span>{{ subscribeInfo.mobile }}</span>
        </dt>
        <dd>
          <span>体检机构：</span>
          <span>{{ subscribeInfo.chain_name }}</span>
        </dd>
        <dd>
          <span>体检时间：</span>
          <span>{{ subscribeInfo.time }}</span>
        </dd>
        <dd>
          <span>预约单号：</span>
          <span>{{ subscribeInfo.order_no }}</span>
        </dd>
      </dl>
      <dl>
        <dt class="border1px">
          <span>订单号：</span><span>{{ subscribeInfo.order_no }}</span>
        </dt>
        <dd class="border1px" v-for="(item,index) in subscribeInfo.items" :key="index">
          <span>{{ item.compose_name }}</span>
          <span>{{ item.price }}</span>
        </dd>
        <dd class="total"><span>合计：</span><span>{{ subscribeInfo.total }}</span></dd>
      </dl>
      <!-- 已体检可以查看体检报告 -->
       <button class="btn-report">查看体检报告</button>

    </div>
    <footer class="footer-btn">
        <div class="btn-left">取消预约</div><div @click="goBuy" class="btn-right">修改时间</div>
    </footer>
  </div>
</template>

<script>
import myHeader from 'common/header'
export default {
  data () {
    return {
      subscribeInfo: {
    "code": "00000",
    "msg": "ok",
    "data": {
        "order_id": 268,
        "order_no": "TJ20211118032340",
        "health_user_id": 452,
        "username": "白某",
        "sex": 1,
        "mobile": "12221223456",
        "card": "111122223321221",
        "compose_id": 1232048,
        
        "items": [],
        "hospital_id": 1,
        "chain_id": "1,2",
        "time": "2021-11-18",
        "order_status": "未支付",//0 '未支付',1 '已支付',2 '已过期',3 '已体检',4 '申请退款中',5 '退款中',6 '已退款',7 '已取消'
        "total": "488.00",
        "addtime": 1637205820,
        "hospital_name": "慈铭体检",
        "chain_name": null,
        "compose": null,
        "additemslist": [//加项包
            {
                "order_info_id": 1,
                "compose_name": "老年人体检套餐豪华版（女）",
                "order_id": 268,
                "compose_id": 1232030,
                "item_id": 7526,
                "price": "888.00"
            },
            {
                "order_info_id": 2,
                "order_id": 268,
                "compose_name": "脑部CT",
                "compose_id": 1232030,
                "item_id": 7491,
                "price": "200.00"
            }
        ]
    }
}
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
