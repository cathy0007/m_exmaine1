<template>
  <div class="select-person list">
    <!-- header -->
    <myHeader :title="'选择体检人'" />
    <div v-for="(item, index) in personList" :key="item.id" class="person-item li"
      :class="{ active: selectedId === item.health_user_id }">
      <label class="info"  @click="selectPerson(item.health_user_id)">
        <input type="radio" v-model="selectedId" :value="item.health_user_id">
        {{ item.username }}-{{ item.mobile }} <span v-if="index === personList.length - 1" class="def">默认</span>
      </label>
      <span style="color:red" @click="delHealthUser(item.health_user_id)">
        删除
      </span>
    </div>
    <div class="btn-space" @click="goAddPerson">添加体检人</div>
    <div class="btn-box">
      <button class="submit-btn" @click="confirmSelect">选择</button>
    </div>
  </div>
</template>

<script>
import Http from 'api/index'
import myHeader from 'common/header'
export default {
  name: 'personList',
  components: {
    myHeader
  },
  data() {
    return {
      user_id :'',
      personList: [],
      selectedId: -1 // 默认选中小二
    }
  },
  mounted(){
    this.user_id = JSON.parse(sessionStorage.getItem('user')) && JSON.parse(sessionStorage.getItem('user')).userinfo.user_id
    this.getPersonList()
  },
  methods: {

    async getPersonList () {
      const data = await Http.getPersonList()
      console.log('体检人列表', data)
      this.personList = data
      const def = this.personList[this.personList.length-1]
      this.selectedId = def.health_user_id

    },

    selectPerson(val) {
      this.selectedId = val
    },
    goAddPerson() {
      // 跳转到添加体检人页面
      this.$router.push('/addPerson1')
    },
    delHealthUser (health_user_id) {
      // health_user_id
      Http.delUser({health_user_id})
      // if (code === '00000') {
        alert('删除成功')
        this.getPersonList()
      // }
    },
    confirmSelect() {
      const selected = this.personList.find(p => p.health_user_id=== this.selectedId)
      console.log('选中的体检人:', selected.username)
      // 然后进入 支付完成预约页面 orderConfirm,把用户名带过去显示在页面上；
      sessionStorage.setItem('user_order_info', JSON.stringify({health_user_id: selected.health_user_id, username:selected.username}))
      this.$router.go(-1)

    }
  }

}
</script>

<style lang="less" scoped>
.list {
  padding-top: .2rem;
}

.li {
  display: flex;
  padding: .3rem;
  font-size: .32rem;
  justify-content: space-between;
}

.btn-select {
  background: #38ad67;
}

.def {
  color: #38ad67;
  font-weight: 550;
  font-size: .28rem;
}
</style>