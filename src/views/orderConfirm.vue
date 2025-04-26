<template>
  <div class="orderconfirm">
    <!-- header -->
    <myHeader :title="'支付完成预约'" />
    <div class="package-list">
      <div class="package-item" v-for="item in packageList" :key="item.name">
        <span>{{ item.name }}</span>
        <span>¥{{ item.price }}</span>
      </div>
    </div>

    <div class="total">
      <span>合计</span>
      <span class="total-price">¥{{ totalPrice }}</span>
    </div>

    <div class="info-list">
      <div class="info-item">
        <span>体检机构</span>
        <select v-model="selectedAgency" class="select-box">
          <option disabled value="">请选择机构</option>
          <option v-for="agency in agencies" :key="agency" :value="agency">
            {{ agency }}
          </option>
        </select>
      </div>

      <div class="info-item">
        <span>体检人</span>
        <span class="clickable" @click="goToPersonPage">
          {{ selectedPerson || '未选择' }}
        </span>
      </div>

      <div class="info-item">
        <span>体检日期</span>
        <input type="date" v-model="selectedDate" class="date-input" />
      </div>
    </div>

    <div class="btn-box">
      <button class="submit-btn" @click="submitOrder">立即预订</button>
    </div>

  </div>
</template>

<script>
// 根据id查询详情接口获取数据
export default {

  data() {
    return {
      packageList: [
        { name: '老年人体检套餐豪华版（女）', price: 998 },
        { name: '脑部CT', price: 300 },
        { name: '心电图', price: 99 }
      ],
      agencies: ['【慈铭】广州体育中心体检中心', '【慈铭】北京体检中心', '【慈铭】上海体检中心'],
      selectedAgency: '',
      selectedPerson: '',
      selectedDate: ''
    }
  },
  computed: {
    totalPrice() {
      return this.packageList.reduce((sum, item) => sum + item.price, 0)
    }
  },
  methods: {
    submitOrder() {
      if (!this.selectedAgency || !this.selectedPerson || !this.selectedDate) {
        alert('请完整填写体检机构、体检人和体检日期！');
        return;
      }
      //  提交接口携带参数：health_user_id,compose_id,user_id;得到orderid，跳转到订单详情页面
      this.$router.push({ path: '/payConfirm' });
    },
    goToPersonPage() {
      this.$router.push({ path: '/addPerson' });
    }
  }

}
</script>

<style lang="less" scoped>
.orderconfirm {
  padding: 20px;
  min-height: 100vh;
}
.package-list {
  border-bottom: 8px solid #f5f5f5;
}

.package-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 16px;
  color: #333;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 18px;
  color: #f60;
  border-bottom: 8px solid #f5f5f5;
  font-weight: bold;
}

.total-price {
  color: #f60;
}

.info-list {
  margin-top: 10px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #666;
}

.select-box, .date-input {
  width: 60%;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
}

.date-input {
  height: 34px;
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
  padding: 10px 20px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #6dbb8b;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 6px;
}
</style>