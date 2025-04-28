<template>
  <div class="pay-order">
    <!-- header -->
    <myHeader :title="'支付完成预约'" />
    <div class="pd10">
      <div class="order-info">
      <p>订单号：<span>{{ order_no }}</span></p>
      <p>支付金额：<span class="amount">￥{{ amount }}</span></p>
    </div>

    <div class="payment-methods">
      <p class="section-title">快捷支付：</p>
      <ul>
        <li v-for="(method, index) in paymentMethods" :key="index">
          <label class="radio-label">
            <input type="radio" name="payment" :value="method" v-model="selectedMethod" />
            <span class="label-text">{{ method }}</span>
          </label>
        </li>
      </ul>
    </div>
    </div>

    <div class="btn-box">
      <button class="submit-btn" @click="confirmPayment">确定</button>
    </div>
  </div>
</template>

<script>
import myHeader from 'common/header'
import Http from '../api/index'
export default {
  components: {
    myHeader
  },
  data() {
    return {
      amount: 0,
      order_no: '',
      paymentMethods: ['支付宝', '微信支付', '网银支付'],
      selectedMethod: '支付宝',
    }
  },
  mounted() {
    //获取接口getOrderList 拿到订单总金额
    this.amount = 1397
    this.order_no = 'IRYx0000000112'
    // 
  },
  methods: {
    async confirmPayment() {
      // 调用支付接口/ api/topay 参数：{orderid,userid}
      // 支付成功跳转到我的预约页面
      console.log('选择的支付方式是:', this.selectedMethod);
      // 获取订单数据
      const params = JSON.parse(sessionStorage.getItem('orderList'))
      // 支付成功 调取我的预约接口添加数据
      // 模拟已体检的状态
      params.order_status = '已体检'
      await Http.myOrderList(params)
      // 路由跳转到我的预约页面
      this.$router.push('/subscribe')
    }
  }

}
</script>

<style lang="less" scoped>
.order-info p {
  margin: 12px 0;
  font-size: 16px;
  line-height: 1.4;
}

.amount {
  color: #ff4d4f;
  font-weight: bold;
  font-size: 20px;
}

.payment-methods {
  margin-top: 24px;
}

.section-title {
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 12px;
}

.payment-methods ul {
  list-style: none;
  padding: 0;
}

.payment-methods li {
  margin-bottom: 14px;
}

.radio-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.radio-label input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: relative;
}

.radio-label input[type="radio"]:checked {
  border-color: #52c41a;
}

.radio-label input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  background-color: #52c41a;
  border-radius: 50%;
}

.label-text {
  margin-left: 10px;
}

.confirm-btn {
  width: 100%;
  margin-top: 30px;
  padding: 14px 0;
  background-color: #52c41a;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>