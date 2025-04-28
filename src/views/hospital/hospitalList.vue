<template>
    <div class="list">
        <myHeader :title="'机构列表'" :option="true" :classArr="['icon-row', 'icon-col']" classStr="icon-row"
            @changeType="changeShow" />
        <ul class="item" ref="item">
            <li v-for="(item, index) in hospitalList" :key="index" @click="goDesc(item.chain_id)">
                <img src="~assets/images/pic_01.jpg" :alt="item.compose_name" />
                <div class="info">
                    <h3>{{ item.chain_name}}</h3>
                    <p class="desc">{{ item.address }}</p>
                    <p class="price">
                        <span class="nprice">电话：{{ item.tel }}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import myHeader from 'common/header'
import Http from 'api/index'
export default {
    components: {
        myHeader
    },
    data() {
        return {
            hospitalList: []
        }
    },
    mounted() {
        this.getHospitalList()
    },
    methods: {

        changeShow(data) {
            const className = this.$refs.item.className
            if (data) {
                this.$refs.item.className = (className == 'item' ? 'item col' : 'item')
            }
        },
        async getHospitalList() {
            const { code, data } = await Http.hospitalList()
            if (code === '00000') {
                this.hospitalList = data.data
            }
        },
        goDesc(id) {
            this.$router.push({ path: '/hospitalDesc', query: { id } })
        }
    }
}
</script>

<style lang="less" scoped>
.item {
    display: flex;
    flex-wrap: wrap;

    li {
        width: 4.6rem;
        margin-top: .2rem;
        padding: .4rem;
        background-color: #fff;
        border-radius: .08rem;
    }

    img {
        width: 100%;
    }

    .btn-buy {
        color: #fff;
        background-color: #38ad67;
        border: none;
        line-height: .48rem;
        border-radius: .01rem;
        font-size: .20rem;
    }
}

.info {
    h3 {
        font-size: .32rem;
    }
}

.desc {
    color: #666;
    font-size: 0.24rem;
}

.price {
    padding: .05rem;
}

.oldprice {
    float: right;
    text-decoration: line-through;
    color: #666;
}

.col {
    display: block;

    li {
        width: auto;
    }
}
</style>
