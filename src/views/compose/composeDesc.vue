<template>
    <div class="desc">
        <!-- header -->
        <myHeader :title="'套餐详情'" />
        <div class="pd-body">
            <div class="top">
                <div class="picture">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="item in [1,2]" :key="item"><img class="pic" src="~assets/images/pic_01.jpg"
                                alt="心电图套餐">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="info">
                        <h3>{{desc.compose_name}}</h3>
                        <p class="desc">{{ desc.desc }}</p>
                        <p class="price">
                            <span class="nprice">{{ desc.price }}</span><span class="oldprice">{{ desc.oldprice}}</span>
                            <span class="right">销量：{{ desc.privice }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="hd">
                    <span v-for="(item, index) in ['图文详情', '体检项目']" :key="item" @click="changeNum(index)"
                        :class="{'active': num === index }"> {{item}}</span>
                </div>
                <div class="desc1" v-if="num === 0">
                    <h3>套餐介绍</h3>
                    <p>60岁以上的女性长者，为相关科室诊断提供重要依据</p>
                    <p>使用规则:</p>
                    <pre>
请至少提前一天预定；
2、线上预约完后，体检日拿身份证到医院前台等级即可开始体检；
3、医院提供营养早餐一份；
4、体检者可或免费停车票；
                    </pre>
                   <img class="pic" src="~assets/images/pic_01.jpg"
                                alt="心电图套餐">
                    <img class="pic" src="~assets/images/pic_01.jpg"
                                alt="心电图套餐">
                    <h3>适用机构</h3>
                    <div class="list">
                        <ul>
                            <li v-for="(item, index) in hospitalList" :key="index">
                            <div class="inner">
                                <img src="~assets/images/pic_01.jpg" alt="" />
                                <h3>{{item.hospital_name}}</h3>
                                <p>{{item.countcompose}}个体检套餐</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                </div>
                <div class="desc2" v-else>

                    一般情况

                    身高、体重、血压、脉搏

                    了解身体一般状况
                    <div class="item">
                        <div class="box-text"><span class="text-title">项目名称</span><span>一般情况</span></div>
                        <div class="box-text"><span class="text-title">检查范围</span><span>身高、体重、血压、脉搏</span></div>
                        <div class="box-text"><span class="text-title">检查意义</span><span>了解身体一般状况</span></div>
                    </div>
                    <div class="item">
                        <div class="box-text"><span class="text-title">项目名称</span><span>内科</span></div>
                        <div class="box-text"><span class="text-title">检查范围</span><span>身高、体重、血压、脉搏</span></div>
                        <div class="box-text"><span class="text-title">检查意义</span><span>了解身体一般状况</span></div>
                    </div>
                    <div class="item">
                        <div class="box-text"><span class="text-title">项目名称</span><span>体成分测定</span></div>
                        <div class="box-text"><span class="text-title">检查范围</span><span>身高、体重、血压、脉搏</span></div>
                        <div class="box-text"><span class="text-title">检查意义</span><span>了解身体一般状况</span></div>
                    </div>
                    <h3>适用机构</h3>
                    <div class="list">
                        <ul>
                            <li v-for="(item, index) in hospitalList" :key="index">
                            <div class="inner">
                                <img src="~assets/images/pic_01.jpg" alt="" />
                                <h3>{{item.hospital_name}}</h3>
                                <p>{{item.countcompose}}个体检套餐</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                </div>
            </div>
        </div>
        <footer class="footer-btn">
        <div class="btn-left">￥{{ desc.price }}</div><div @click="goBuy" class="btn-right">预约购买</div>
    </footer>

    </div>
   
</template>

<script>
import myHeader from 'common/header'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Http from 'api/index'
export default {
    components: {
        Swiper,
        SwiperSlide,
        myHeader
    },
    data() {
        return {
            showCalendar: true,
            num: 0,
            hospitalList: [],
            isShowCalendar: true,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                autoplay: {
                    delay: 3000
                },
                initialSlide: 1,
                id: 0,
            },
            desc: {}
        }
    },
    created(){
        this.id = this.$route.params
        this.getDesc(this.id)
        this.hotHospital()
    },
    methods: {
        changeDate(date) {
            console.log('date', date)
        },
        changeNum(index) {
            this.num = index
        },
        async getDesc (id) {
           const data =  await Http.getComposeDesc(id)
            this.desc = data.data
        },
        async hotHospital() {
        const { code, data }  = await Http.hothospital()
        if (code === '00000') {
            this.hospitalList = data.data.slice(0,2)
            console.log(this.hospitalList)
        }
        },
        goBuy () {
            const { chain_id} = this.desc
            sessionStorage.setItem('order_info',JSON.stringify({ compose_id:this.$route.query.id, chain_id }))
            this.$router.push({path: '/additem'})
        }
    }


}
</script>
<style lang="less" scoped>
.swiper-pagination-fraction {
    text-align: right;
}
.pd-body {
    padding-bottom: 1rem;
}
.pic {
    width: 100%;
    height: 100%;
}
ul {
      display: flex;
      justify-content: space-between;
    }

    li {
      width: 5rem;
      position: relative;
      display: flex;
      flex-shrink: 0;
      img {
        width: 100%;
      }

      h3 {
        font-size: .36rem;

      }
    }
.hd {
    display: flex;
    border-bottom: 1px solid #ccc;
    span {
        padding: 0 1rem;
    }
}
.hd .active {
    border-bottom: 1px solid #38ad67;
}

.swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        background-color: white;
    }
}
.item {
    background-color: #f2f2f2;
    border-radius: .1rem;
    padding: .4rem;
    margin-bottom: .2rem;
}
.text-title {
    padding-right:.4rem;
}
.info {
    padding-top: .3rem;
}
.right {
    color: #666;
    float: right;
}
.price {
    color: #333;
}
.oldprice {
    color: #666;
    text-decoration: line-through;
    padding-left: 1rem;
}

</style>
