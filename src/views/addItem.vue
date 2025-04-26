<template>
    <div class="additem">
        <!-- header -->
        <myHeader :title="'体检添加项'" />
        <h2>根据您选择的套餐，推荐您增加以下体检项目：</h2>
        <div v-for="(item, index) in items" :key="index" class="item">
            <div class="info">
                <input type="radio" v-model="selected" :value="item.name">
                <div>
                    <div class="title">{{ item.name }}</div>
                    <div class="buy-count">已有 {{ item.bought }} 购买</div>
                </div>
            </div>
            <div class="price">
                <div>
                    <span class="current-price">¥{{ item.currentPrice }}</span>
                    <span class="original-price">¥{{ item.originalPrice }}</span>
                </div>
            </div>
        </div>
   
    <div class="btn-box">
      <button class="submit-btn" @click="submitOrder">立即预订</button>
    </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            selected: '肝功三项',
            items: [
                { name: '肝功三项', currentPrice: 60, originalPrice: 80, bought: 239 },
                { name: '肾功三项', currentPrice: 25, originalPrice: 35, bought: 239 },
                { name: '脑部CT', currentPrice: 300, originalPrice: 600, bought: 239 },
                { name: '心电图', currentPrice: 99, originalPrice: 180, bought: 239 }
            ]
        }
    }

}
</script>

<style lang="less" scoped>
.item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .info {
      display: flex;
      align-items: center;
    }
    .info input[type="radio"] {
      margin-right: 10px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .price {
      text-align: right;
    }
    .current-price {
      font-size: 16px;
      color: #ff4d4f;
      margin-right: 5px;
    }
    .original-price {
      font-size: 14px;
      color: #999;
      text-decoration: line-through;
    }
    .buy-count {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
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