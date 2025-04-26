<template>
    <div class="additem">
        <!-- header -->
        <myHeader :title="'添加体检人'" />
        <div class="form-item">
      <label>姓名</label>
      <input type="text" v-model="userinfo.name" placeholder="输入体检人真实姓名[必填]" />
    </div>

    <div class="form-item">
      <label>手机号码</label>
      <input type="text" v-model="userinfo.phone" placeholder="[必填]" />
    </div>

    <div class="form-item">
      <label>婚否</label>
      <div class="radio-group">
        <label><input type="radio" value="已婚" v-model="userinfo.married" /> 已婚</label>
        <label><input type="radio" value="未婚" v-model="userinfo.married" /> 未婚</label>
      </div>
    </div>

    <div class="form-item">
      <label>身份证号</label>
      <input type="text" v-model="userinfo.idCard" placeholder="输入正确身份证号[必填]" />
    </div>

    <div class="form-item">
      <label>生日</label>
      <input type="date" v-model="userinfo.birthday" />
    </div>

    <div class="form-item">
      <label>性别</label>
      <div class="radio-group">
        <label><input type="radio" value="男" v-model="form.gender" /> 男</label>
        <label><input type="radio" value="女" v-model="form.gender" /> 女</label>
      </div>
    </div>

    <div class="btn-box">
      <button class="save-btn" @click="saveForm">保存</button>
    </div>
    </div>
</template>

<script>
import Http from 'api/index'
export default {
    data() {
        return {
          userinfo: {
        name: '',
        phone: '',
        married: '',
        idCard: '',
        birthday: '',
        gender: ''
      }
        }
    },
    async saveForm() {
      if (!this.userinfo.name || !this.userinfo.phone || !this.userinfo.idCard) {
        alert('请填写完整信息！');
        return;
      }
      try {
        const { code } = await Http.addPerson(this.userinfo)
        // if (code === '00000') {
          alert('提交成功')
         this.$router.go(-1); // 成功后返回上一页 刷新上一页的体检人列表数据
        // }
      } catch (error) {
        console.error('提交失败:', error);
        alert('提交失败，请稍后重试');
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