<template>
  <div class="additem">
    <!-- header -->
    <myHeader :title="'添加体检人'" />
   <div class="form-item">
      <label>姓名</label>
      <span class="right">
      <input type="text" v-model="userinfo.username" maxlength="16" class="ipt" placeholder="输入体检人真实姓名[必填]" />
      </span>
    </div>

    <div class="form-item">
      <label>手机号码</label>
      <span class="right">
      <input type="text" v-model="userinfo.mobile" class="ipt" maxlength="11" placeholder="[必填]" />

      </span>
    </div>

    <div class="form-item">
      <label>婚否</label>
      <div class="radio-group right">
        <input type="radio" value="已婚" v-model="userinfo.is_marry" /> 已婚
        <input type="radio" value="未婚" v-model="userinfo.is_marry" /> 未婚
      </div>
    </div>

    <div class="form-item">
      <label>身份证号</label>
      <span class="right">
      <input type="text" v-model="userinfo.card" class="ipt"  placeholder="输入正确身份证号[必填]" />

      </span>
    </div>

    <div class="form-item">
      <label>生日</label>
      <span class="right">
      <input type="date" v-model="userinfo.birthday" />

      </span>
    </div>

    <div class="form-item">
      <label>性别</label>
      <div class="radio-group right">
        <input type="radio" value="男" v-model="userinfo.sex" /> 男
       <input type="radio" value="女" v-model="userinfo.sex" /> 女
      </div>
    </div>

    <div class="btn-box">
      <button class="submit-btn" @click="saveForm">保存</button>
    </div>
  </div>
</template>

<script>
import Http from 'api/index'
import myHeader from 'common/header'
export default {
  name: 'addPerson1',
  components: {
    myHeader
  },
  data() {
    return {
      userinfo: {
        "health_user_id":Math.floor(Math.random()+1 * 1000),
        "username": " ",
        "mobile": "",
        "birthday": "",
        "sex": 0,
        "is_marry": "1"
      }
    }
  },
  methods: {
    async saveForm() {
    if (!this.userinfo.username || !this.userinfo.mobile || !this.userinfo.card) {
      alert('请填写完整信息！');
      return;
    }
    try {
     await Http.addPerson(this.userinfo)
      // if (code === '00000') {
      alert('提交成功')
      this.$router.push('/personList'); // 成功后返回上一页 刷新上一页的体检人列表数据
      // }
      console.log(this.userinfo)
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败，请稍后重试');
    }
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
  box-shadow: 0 .04rem .08rem rgba(0, 0, 0, 0.1);
}

.info {
  display: flex;
  align-items: center;
}
.form-item{
  padding: .3rem;
  display: flex;
  color: #969FA2;
  background-color: #fff;
  label {
    width: 2.6rem;
    

  }
  .right {
    width: 60%;
    .ipt {
      border: none;
      width: 100%;
      border-bottom:solid #969FA2;
    }
  }
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
  margin-right: .1rem;
}

.original-price {
  font-size: .28rem;
  color: #999;
  text-decoration: line-through;
}

.buy-count {
  font-size: .24rem;
  color: #999;
  margin-top: .1rem;
}
</style>