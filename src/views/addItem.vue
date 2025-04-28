<template>
    <div class="additem">
        <!-- header -->
        <myHeader :title="'体检添加项'" />
        <h2 class="title-h2">根据您选择的套餐，推荐您增加以下体检项目：</h2>
        <div v-for="(item, index) in items" :key="index" class="item">
            <div class="info">
                <input type="radio" v-model="selected" :value="item.id" @change="handleChange" />
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
      <button class="submit-btn" @click="submitOrder">确定</button>
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
            selected: '肝功三项',
            items: [
                { id:1, name: '肝功三项', currentPrice: 60, originalPrice: 80, bought: 239 },
                { id: 2, name: '肾功三项', currentPrice: 25, originalPrice: 35, bought: 216 },
                { id: 3, name: '脑部CT', currentPrice: 300, originalPrice: 600, bought: 30 },
                { id: 4, name: '心电图', currentPrice: 99, originalPrice: 180, bought: 27 }
            ]
        }
    },
    methods: {
        handleChange (event) {
            this.selected = event.target.value
        },
        submitOrder () {
            // 点击确定为套餐添加加项 composeid，order_id，items:[1]
            sessionStorage.setItem('addItem', JSON.stringify([this.selected]))
            this.$router.push('/orderConfirm')
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
      padding: .3rem;
      margin-bottom: .2rem;
      border-radius: .16rem;
    }
    .info {
      display: flex;
      align-items: center;
    }
    .info input[type="radio"] {
      margin-right: .2rem;
    }
    .title {
      font-size: .32rem;
      font-weight: bold;
    }
    .price {
      text-align: right;
    }
    .current-price {
      font-size: .32rem;
      color: #ff4d4f;
      margin-right: .01rem;
    }
    .original-price {
      font-size: .28rem;
      color: #999;
      text-decoration: line-through;
    }
    .buy-count {
      font-size: .24rem;
      color: #999;
      margin-top: .01rem;
    }
    .btn-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: .02rem .04rem;
  box-shadow: 0 -.04rem .16rem rgba(0,0,0,0.05);
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