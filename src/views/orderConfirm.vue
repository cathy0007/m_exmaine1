<template>
  <div class="orderconfirm">
    <!-- header -->
    <myHeader :title="'支付完成预约'" />
    <div class="package-list">
      <div class="package-item" v-for="item in packageList" :key="item.name">
        <span>{{ item.name }}</span>
        <span>¥{{ item.price }}</span>
      </div>
      <div class="total">
        <span>合计</span>
        <span class="total-price">¥{{ totalPrice }}</span>
      </div>
    </div>
    <div class="info-list">
      <div class="info-item">
        <span>体检机构</span>
        <select v-model="params.chain_name" class="select-box">
          <option disabled value="">请选择机构</option>
          <option v-for="agency in agencies" :key="agency.chain_id" :value="agency.chain_id">
            {{ agency.chain_name }}
          </option>
        </select>
      </div>

      <div class="info-item">
        <span>体检人</span>
        <span class="clickable" @click="goToPersonPage">
          {{ params.username || '未选择' }}
        </span>
      </div>

      <div class="info-item">
        <span>体检日期</span>
        <input type="date" v-model="params.addtime" class="date-input" />
      </div>
    </div>

    <div class="btn-box">
      <button class="submit-btn" @click="submitOrder">立即预订</button>
    </div>

  </div>
</template>

<script>
import myHeader from 'common/header'
export default {
  components: {
    myHeader
  },
  data() {
    return {
      packageList: [
        { name: '老年人体检套餐豪华版（女）', price: 998 },
        { name: '脑部CT', price: 300 },
        { name: '心电图', price: 99 }
      ],
      agencies: [{
            "chain_id": 28,
            "hospital_id": 5,
            "chain_name": "北大医院海淀分支",
            "chain_no": "JG20210605073704",
            "is_use": 1,
            "privice": 130000,
            "city": 130200,
            "disct": null,
            "address": "学清路88号",
            "thumb": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2530869004,2317526421&fm=26&gp=0.jpg",
            "type": 1,
            "attr": 1,
            "tel": "0635-546601",
            "coordinate": "1000,20000",
            "addtime": 1622878624,
            "is_hot": 0,
            "hospital_name": "北大医院"
        },
        {
            "chain_id": 27,
            "hospital_id": 5,
            "chain_name": "北大医院朝阳分支",
            "chain_no": "JG20210605073307",
            "is_use": 1,
            "privice": 130000,
            "city": 130200,
            "disct": null,
            "address": "青年路08号",
            "thumb": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2530869004,2317526421&fm=26&gp=0.jpg",
            "type": 1,
            "attr": 1,
            "tel": "0635-546601",
            "coordinate": "1000,20000",
            "addtime": 1622878387,
            "is_hot": 0,
            "hospital_name": "北大医院"
        }],
      params: {
        order_no:'TJ'+(Math.floor(Math.random()+100 * 1000)),
        chain_name: '',
        username: '',
        addtime: '',
        // health_user_id: 0,
        // compose_id:0,
        user_id: 0,
        order_status: '待体检'
      }
    }
  },
  computed: {
    totalPrice() {
      return this.packageList.reduce((sum, item) => sum + item.price, 0)
    }
  },
  mounted(){
    const user = JSON.parse(sessionStorage.getItem('user')).userinfo
    const userinfo = JSON.parse(sessionStorage.getItem('user_order_info'))
    const orderinfo = JSON.parse(sessionStorage.getItem('order_info'))
    this.params.username = userinfo.username
    this.params.health_user_id = userinfo.health_user_id
    this.params.compose_id = orderinfo.compose_id
    this.params.user_id = user.user_id
  },
  methods: {
    async submitOrder() {
      if (!this.params.chain_name || !this.params.username || !this.params.addtime) {
        alert('请完整填写体检机构、体检人和体检日期！');
        return;
      }
      //  提交接口携带参数：health_user_id,compose_id,user_id;得到orderid，跳转到订单详情页面
      sessionStorage.setItem('orderList', JSON.stringify(this.params))
      console.log('orderList', this.params)
      this.$router.push('/payConfirm');
    },
    goToPersonPage() {
      this.$router.push('/personList')
    }
  }

}
</script>

<style lang="less" scoped>

.package-list,.package-item ,.info-item{
  padding: .2rem;
  border-bottom: .16rem solid #f5f5f5;
  background-color: #fff;
}
.select-box ,.date-input {
  border:none;
}

.package-item {
  display: flex;
  justify-content: space-between;
  padding: .24rem;
  font-size: .32rem;
  color: #333;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: .24rem 0;
  font-size: .36rem;
  color: #f60;
  border-bottom: .16rem solid #f5f5f5;
  font-weight: bold;
}

.total-price {
  color: #f60;
}

.info-list {
  margin-top: .2rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .28rem 0;
  border-bottom: 1px solid #eee;
  font-size: .32rem;
  color: #666;
}

.select-box,
.date-input {
  width: 60%;
  padding: .12rem;
  font-size: .32rem;
  border-radius: .08rem;
  color: #333;
}

.total,.info-item{
  padding-left:.24rem;
  padding-right:.24rem;

}

.clickable {
  color: #409EFF;
  cursor: pointer;
}

.btn-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: .2rem .4rem;
  box-shadow: 0 -.04rem .16rem rgba(0, 0, 0, 0.05);
}

.submit-btn {
  width: 100%;
  padding: .24rem;
  background-color: #6dbb8b;
  color: #fff;
  font-size: .36rem;
  border: none;
  border-radius: .12rem;
}
</style>