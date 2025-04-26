
<template>
  <div class="login">
    <h2>登录</h2>
    <div class="inner">
      <input type="text" v-model="mobile" placeholder="请输入登录账号" class="ipt username" />
      <div class="code">
        <input type="text" v-model="code" placeholder="请输入验证码" class="ipt password" />
        <button class="btn-code" :disabled="disabled" @click="sendCode">{{codeTip}}</button>
      </div>
    </div>

    <button class="btn-login">登录</button>
  </div>
</template>
<script>
  import Http from 'api'
export default {
  data() {
    return {
      mobile: '',
      code: '',
      disabled: false,
      codeTip: '获取验证码'
    }
  },
  created() {
  },
  methods: {
    goLogin () {

    },
    async sendCode() {
      let timer = null
      let count = 5
      let speed = 1000
      timer = setInterval(() => {
        this.disabled = true
        count--
        this.codeTip = '还剩'+count + '秒'
        if (count === 0) {
          clearInterval(timer)
          this.codeTip = '获取验证码'
          count = 60
          this.disabled = false
        }
      }, speed);
      const { mobile } = this
      console.log('mobile', mobile);
      
      const { code } =await Http.sendCode({
        mobile
      })
      if(code === '00000') return true
    }
  },
}
</script>
<style lang="less" scoped>
@import url(~less/variable);

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  background: url('~assets/images/home/bg.png') no-repeat left top;
  background-size: 100%;
  h2 {
    color: #fff;
    font-size: .6rem;
    text-align: center;
  }
  .inner {
    width: 85%;
    margin-top: 1.5rem;
  }

  .ipt {
    width: 100%;
    margin-bottom: .5rem;
    height: 1rem;
    line-height: 1rem;
    border: 1px solid #ccc;
    border-radius: .6rem;
    text-indent: .3rem;
    font-size: .3rem;
  }

  .code {
    display: flex;
    justify-content: space-between;

    .ipt {
      width: 65%;
    }
  }

  .btn-code {
    width: 30%;
    height: 1rem;
    margin-left: 4%;
    border: none;
    border-radius: .8rem;
    color: #07b2f8;
    font-weight: 600;
    font-size: .3rem;
  }

  .btn-login {
    width: 60%;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: .48rem;
    color: #fff;
    border: none;
    background-color: #colors[mainColor];
    border-radius: .8rem;
  }
}
</style>
