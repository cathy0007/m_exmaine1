<template>
  <div class="subscribe">
    <!-- header -->
    <myHeader :title="'体检预约详情'" />
    <div class="list pd-body">
      <dl>
        <dt class="border1px">
          <span>{{ order.username }}</span><span>{{ order.mobile }}</span>
        </dt>
        <dd>
          <span>体检机构：</span>
          <span>{{ order.chain_name }}</span>
        </dd>
        <dd>
          <span>体检时间：</span>
          <span>{{ order.addtime }}</span>
        </dd>
        <dd>
          <span>预约单号：</span>
          <span>{{ order.id }}</span>
        </dd>
      </dl>
      <dl>
        <dt class="border1px">
          <span>订单号：</span><span>{{ order.order_no  }}</span>
        </dt>
        <dd class="border1px" v-for="(item,index) in packageList" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
        </dd>
        <dd class="total"><span>合计：</span><span class="price">￥{{ total }}</span></dd>
      </dl>
      <!-- 已体检可以查看体检报告 -->
<div>
  <button v-if="order_status === '已体检'" class="btn-report btn-space" @click="checkReport(order.order_no)">查看体检报告</button>
  <button v-else class="btn-report btn-space" @click="$router.push('/addItem')">我要加项</button>

</div>
    </div>
    <!-- <footer class="footer-btn">
        <div class="btn-left">取消预约</div><div @click="goBuy" class="btn-right">修改时间</div>
    </footer> -->
  </div>
</template>

<script>
import myHeader from 'common/header'
import Http from '../../api/index'
export default {
  data () {
    return {
      order: {},
      packageList: [],
      total: 0,
      order_status: ''
    }
  },
  components: {
    myHeader
  },
  mounted () {
    this.getOrderInfo()
  },
  methods: {
   async getOrderInfo () {
    const { order, packageList} = await Http.getOrderInfo()
    this.order = order
    this.packageList = packageList
    this.total = this.packageList.reduce((sum, item) => sum + item.price, 0)
    console.log('rrr', this.$route)
    this.order_status = this.$route.query.order_status

    },
    checkReport (id) {
      this.$router.push({path: '/report', query: {id}})
    }
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
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;
    .price {
      color: #f00;
    }
  }
}
</style>
