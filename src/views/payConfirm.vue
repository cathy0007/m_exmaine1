<template>
    <div class="pay-order">
        <!-- header -->
        <myHeader :title="'支付完成预约'" />
        <div class="order-info">
      <p>订单号：<span>{{ orderId }}</span></p>
      <p>支付金额：<span class="amount">￥{{ amount }}</span></p>
    </div>

    <div class="payment-methods">
      <p class="section-title">快捷支付：</p>
      <ul>
        <li v-for="(method, index) in paymentMethods" :key="index">
          <label class="radio-label">
            <input
              type="radio"
              name="payment"
              :value="method"
              v-model="selectedMethod"
            />
            <span class="label-text">{{ method }}</span>
          </label>
        </li>
      </ul>
    </div>

    <button class="confirm-btn" @click="confirmPayment">确定</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
          orderId: '2343422',
          amount: 1397,
          paymentMethods: ['支付宝', '微信支付', '网银支付'],
          selectedMethod: '支付宝',
        }
    },
    methods: {
      confirmPayment() {
        // 调用支付接口/ api/topay 参数：{orderid,userid}
        // 支付成功跳转到我的预约页面
        console.log('选择的支付方式是:', this.selectedMethod);
        this.$route('/subscribe')
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