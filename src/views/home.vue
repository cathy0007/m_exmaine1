<template>
  <div class="home">
    <header>
      <h1>体检预约</h1>
    </header>
    <nav>
      <ul>
        <li @click="$router.push('/compose')">
          <img src="~assets/images/home/nav_01.png" alt="我要体检" />
          <div class="info">
            <h3>我要体检</h3>
            <p>机构套餐&nbsp;随心选择</p>
          </div>
        </li>
        <li @click="$router.push('/subscribe')">
          <img src="~assets/images/home/nav_02.png" alt="我的预约" />
          <div class="info">
            <h3>我的预约</h3>
            <p>按需加项&nbsp;更改日期</p>
          </div>
        </li>
        <li @click="$router.push('/report')">
          <img src="~assets/images/home/nav_03.png" alt="我的报告" />
          <div class="info">
            <h3>我的报告</h3>
            <p>报告管理&nbsp;趋势分析</p>
          </div>
        </li>
        <li @click="$router.push('/healthManagement')">
          <img src="~assets/images/home/nav_04.png" alt="报告解读" />
          <div class="info">
            <h3>健康管理</h3>
            <p>历史数据对比&nbsp;食谱推荐</p>
          </div>
        </li>
      </ul>
    </nav>

    <div class="item hospital">
      <div class="item-hd">
        <h2>推荐机构</h2>
        <router-link to="/hospitalList">
          <span>
            <i class="iconfont icon-menu"></i>
            更多
          </span>
        </router-link>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in hospitalList" :key="index">
            <div class="inner" @click="$router.push('/hospitalDesc?id='+item.chain_id)">
              <img src="~assets/images/pic_01.jpg" alt="" />
              <h3>{{item.hospital_name}}</h3>
              <p class="item-info">{{item.countcompose}}个体检套餐</p>
            </div>
            <span class="favorite" @click="favorite($event, item.chain_id)">
              <i class="iconfont icon-like"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="item compose">
      <div class="item-hd">
        <h2>推荐套餐</h2>
        <router-link to="/composeList">
          <span>
            <i class="iconfont icon-menu"></i>
            更多
          </span>
        </router-link>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in composeList" :key="index">
            <img :src="item.thumb || defImg" :alt="item.compose_name" />
            <!-- <img src="~assets/images/pic_01.jpg" :alt="item.compose_name" /> -->
            <div class="info">
              <h3>{{item.compose_name}}</h3>
              <p>{{item.desc}}</p>
              <p>
                <span>¥{{item.oldprice}}</span>
                <span>¥{{item.price}}</span>
              </p>
              <button >立即购买</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Http from 'api/index'
import defImg from './../assets/images/pic_01.jpg'
export default {
  name: 'Home',
  data() {

    return {
      composeList: [],
      hospitalList: [],
      defImg
    }
  },
  created() {
    this.hotCompose()
    this.hotHospital()
  },
  methods: {
    favorite(e, id) {
      let className = e.currentTarget.parentElement.className
      console.log('e', className, id);
      e.currentTarget.parentElement.className = className ? '' : 'add'


    },
    async hotCompose() {
      const  { code, data }  = await Http.hotCompose()
      if ( code === '00000') {
        this.composeList = data.data
      }
    },
    async hotHospital() {
      const { code, data }  = await Http.hothospital()
      if (code === '00000') {
        this.hospitalList = data.data
        console.log(this.hospitalList)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~assets/less/variable.less');
.content {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;


  li {
    width: 33%;
    border: 1px solid #f00;
  }
}
.item-info {
  font-size: .32rem;
}
.home {
  padding-top: 1.32rem;
  background: url('~assets/images/home/bg.png') no-repeat left top;
  background-size: 100% 7rem;

  header {
    h1 {
      text-align: center;
      color: #fff;
      line-height: 1.32rem;
      font-size: 0.58rem;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-flow: wrap;

      li {
        display: flex;
        width: 4.97rem;
        padding: 0.52rem 0.22rem 0.52rem 0.52rem;
        margin-top: 0.22rem;
        background-color: #fff;
        border-radius: 0.05rem;
        box-sizing: border-box;

        img {
          display: block;
          width: 1.02rem;
          height: 1.02rem;
        }

        .info {
          line-height: 0.58rem;
          padding-left: 0.2rem;
          font-size: .28rem;
          box-sizing: border-box;

          h3 {
            font-size: 0.4rem;
          }

          p {
            color: #9e9e9e;
          }
        }
      }
    }
  }

  .item {
    padding: 0.1rem;
    box-sizing: border-box;

    &.hospital {
      p {
        color: #colors[mainColor];
      }
    }

    .item-hd {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: .38rem;
        color: #colors[mainColor];
        ;
      }
    }

    h2 {
      font-size: 0.58rem;
      font-weight: 400;
      line-height: 0.58rem;
      margin: 0.3rem 0 0.3rem;
    }

    img {
      display: block;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 0.05rem;
    }

    ul {
      display: flex;
      justify-content: space-between;
    }

    li {
      width: 3.48rem;
      position: relative;
      display: flex;
      flex-shrink: 0;

      h3 {
        font-size: .36rem;

      }

      .favorite {
        position: absolute;
        top: 0.16rem;
        right: 0.16rem;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 1.7;
        border-radius: 50%;
        background-color: #9e9e9e;
        text-align: center;

        i {
          font-size: 0.5rem;
          color: #c4c4c4;
        }
      }

      &.add {
        .icon-like {
          color: #colors[mainColor];
        }

        .favorite {
          background-color: #fff;

        }
      }
    }
  }

  .item.compose {
    ul {
      display: block;

      li {
        display: flex;
        width: auto;
        padding: 0.35rem 0.28rem;
        margin-bottom: 0.3rem;
        background-color: #fff;
        border-radius: 0.08rem;
      }

      img {
        display: block;
        width: 2.78rem;
        height: 2.78rem;
      }

      .info {
        flex: 1;
        padding-left: 0.54rem;
        color: #9e9e9e;
        line-height: 0.6rem;
        font-size: .28rem;

        h3 {
          color: #2d2d2d;
          font-size: 0.5rem;
        }

        span:nth-child(1) {
          color: #2d2d2d;
          padding-right: 0.4rem;
        }

        button {
          width: 1.82rem;
          height: 0.58rem;
          line-height: 0.58rem;
          text-align: center;
          color: #fff;
          font-size: 0.3rem;
          border: none;
          background-color: #38ad67;
          border-radius: 0.06rem;
        }
      }
    }
  }
}
</style>
