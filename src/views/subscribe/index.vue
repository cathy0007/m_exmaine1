<template>
  <div class="subscribe">
    <!-- header -->
    <myHeader :title="'我的预约'" />
    <div class="list pd-body">

      <dl v-for="(item, index) in list" :key="index" @click="$router.push({path:'/subscribeInfo', query:{order_status:item.order_status}})">
        <dt class="border1px">
          <span>{{ item.username }}&nbsp;{{ item.mobile }}</span>
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
          <span>{{ item.addtime }}</span>
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
import Http from 'api/index'
import myHeader from 'common/header'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    myHeader
  },
  mounted() {
    this.getList()
  },
  methods: {
   async getList () {
      const data = await Http.getMyOrderList()
      this.list = data
      console.log('list',this.list)
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
    line-height: 0.72rem;
  }
}
</style>
