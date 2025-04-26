
<template>
  <div class="login">
    <h2>登录</h2>
    <div class="inner">
      <input type="text" v-model="mobile" maxlength="11" placeholder="请输入登录账号" class="ipt username" />
      <div class="code">
        <input type="text" v-model="code1" maxlength="6" placeholder="请输入验证码" class="ipt password" />
        <button class="btn-code" :disabled="disabled" @click="getCode">{{codeTip}}</button>
      </div>
    </div>
    <p class="error-tip">{{errorTip}}</p>
    <button class="btn-login" @click="goLogin">登录</button>
  </div>
</template>
<script>
import Http from 'api/index'
export default {
  data() {
    return {
      mobile: '13838899999',
      code1: '',
      codeTip: '获取验证码',
      disabled: false,
      errorTip: ''
    }
  },
  methods: {
    counTimer() {
      const speed = 1000
      let count = 60
      let timer = null
      timer = setInterval(() => {
        count--
        this.codeTip = `还剩${count}秒`
        this.disabled = true
        if (count === 0) {
          this.disabled = false
          this.codeTip = '获取验证码'
          clearInterval(timer)
        }
      }, speed);
    },
    checkValidate() {
      /*
      * 正则判断手机号 /1^开头([3,5,6,7,8,9])\d{9}$/ ?
       */
      let reg = /^1([3,5,6,7,8,9]\d{9})$/
      if (!reg.test(this.mobile)) {
         console.log('reg', reg.test(this.mobile));
        this.errorTip = '手机号不合法'
        return true
      } else {
        this.errorTip = ''
      }
    },
    async getCode() {
      if (this.checkValidate()) return
      this.counTimer()
      // await Http.sendCode({ mobile: this.mobile })
    },
    async goLogin() {
      if (this.checkValidate()) return
      const { mobile, code1 } = this
      if (code1 !== ' ') {
        this.errorTip = ''
        sessionStorage.setItem('token', '123456')
        this.$router.push(!this.$route.query.redirect ? '/home' : this.$route.query.redirect)
      } else {
        this.errorTip = 'error'
      }

    }
  },
}
</script>
<style lang="less" scoped>
@import url(~less/variable);

.error-tip {
  color: #f00;
  padding-bottom: .3rem;
}

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
