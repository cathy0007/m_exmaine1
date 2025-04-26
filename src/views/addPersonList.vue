<template>
    <div class="select-person">
        <!-- header -->
        <myHeader :title="'选择体检人'" />
        <div
      v-for="(item, index) in personList"
      :key="item.id"
      class="person-item"
      :class="{ active: selectedId === item.id }"
      @click="selectPerson(item.id)"
    >
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="phone">{{ item.phone }}</div>
        <span v-if="item.isDefault" class="default-tag">默认</span>
      </div>
      <div class="circle">
        <div class="inner-circle" v-if="selectedId === item.id"></div>
      </div>
    </div>

    <div class="add-btn" @click="addPerson">添加体检人</div>

    <div class="bottom-bar">
      <button class="choose-btn" @click="confirmSelect">选择</button>
    </div>
    </div>
</template>

<script>
import Http from 'api/index'
export default {
    data() {
        return {
          personList: [
            { id: 1, name: '小一', phone: '13418480993', isDefault: true },
            { id: 2, name: '小二', phone: '15809282910', isDefault: false },
            { id: 3, name: '小三', phone: '13909872398', isDefault: false }
          ],
          selectedId: 2 // 默认选中小二
        }
    },
    methods: {
      selectPerson(id) {
      this.selectedId = id
    },
    addPerson() {
      // 跳转到添加体检人页面
      this.$router.push('/addPerson')
    },
    confirmSelect() {
      const selected = this.personList.find(p => p.id === this.selectedId)
      console.log('选中的体检人:', selected)
      alert(`你选择了 ${selected.name}`)
      // 拿到health_user_id, compose_id, userid 存储到本地缓存
      // 然后进入 支付完成预约页面 orderConfirm,把用户名带过去显示在页面上；
      this.$route({path:'/orderConfirm', params: {}})
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
</style>