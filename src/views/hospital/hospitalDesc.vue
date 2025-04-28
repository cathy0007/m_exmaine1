<template>
    <div class="hdesc">
        <!-- header -->
        <myHeader :title="'机构主页'" />
        <div class="pd-body">
            <div class="top hd">
                <div class="hd-img">
                    <img src="~assets/images/pic_01.jpg" class="pic" alt="" />
                </div>
                <div class="hd-info">
                    <h3>{{ desc.chain_name }}</h3>
                    <p class="bottom">
                        <span class="num">{{ desc.type }}人预约</span><span class="location">约{{ desc.attr }}千米</span>
                    </p>
                    <p>有效时间：{{ time }}</p>
                </div>
            </div>
            <div class="desc">
                <p>营业时间：周一至周六 7：30-10：30</p>
                <p>电话：{{ desc.tel }}</p>
                <p>地址：{{ desc.address }}</p>
            </div>
                <ul class="item" ref="item">
                    <li v-for="(item, index) in composeList" :key="index" @click="goComposeDesc(item.compose_id)">
                        <img src="~assets/images/pic_01.jpg" :alt="item.compose_name" />
                        <div class="info">
                            <h3>{{ item.compose_name }}</h3>
                            <p class="desc1">{{ item.desc }}</p>
                            <p class="price">
                                <span class="nprice">{{ item.price }}</span><span class="oldprice">{{
                                    item.oldprice }}</span>
                            </p>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import myHeader from 'common/header'
import Http from 'api/index'
import moment from 'moment'
export default {
    components: {
        myHeader
    },
    data() {
        return {
            composeList: [],
            desc: {},
            time: ''
        }
    },
    created() {
        this.id = this.$route.params
        this.getDesc(this.id)
        this.getComposeList()
    },
    methods: {
        async getDesc() {
            const { code, data } = await Http.hospitalDesc(this.id)
            if (code === '00000') {
                this.desc = data
                this.time = moment(data.addtime).format('YYYY-MM-DD HH:mm')

            }
        },
        async goComposeDesc(id) {
            this.$router.push({path: '/composeDesc', query: {id}})
        },
        async getComposeList() {
            const { code, data } = await Http.composeList()
            if (code === '00000') {
                this.composeList = data.data
            }
        },

    }


}
</script>
<style lang="less" scoped>
.pd-body {
    padding-bottom: 1rem;
}

.hd {
    display: flex;

    .hd-img {
        width: 2.2rem;
        border-radius: .2rem;

    }

    .hd-info {
        padding: .24rem 0 0 .28rem;

        h3 {
            color: #222;
            font-size: .36rem;
        }

        .bottom {
            color: #666;
            padding-top: .3rem;
        }

        .location {
            padding-left: 1rem;
        }
    }
}

.pic {
    width: 100%;
    height: 100%;
}

.desc {
    padding-top: .5rem;
    line-height: .48rem;
}

.item {
    display: flex;
    flex-wrap: wrap;

    li {
        width: 4.5rem;
        margin-top: .2rem;
        padding: .4rem;
        background-color: #fff;
        border-radius: .08rem;
    }

    img {
        width: 100%;
    }

    .info {
        h3 {
            font-size: .32rem;
        }
    }

    .desc1 {
        color: #666;
        font-size: 0.24rem;
    }

    .btn-buy {
        color: #fff;
        background-color: #38ad67;
        border: none;
        line-height: .48rem;
        border-radius: .01rem;
        font-size: .20rem;
    }

    .price {
        padding: .05rem;
    }

    .oldprice {
        float: right;
        text-decoration: line-through;
        color: #666;
    }
}
</style>
