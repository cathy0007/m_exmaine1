<template>
    <div class="list">
        <myHeader :title="'套餐列表'" :option="true" :classArr="['icon-row', 'icon-col']" classStr="icon-row" @changeType="changeShow" />
        <ul class="item" ref="item">
          <li v-for="(item, index) in composeList" :key="index"
          @click="goDesc(item.compose_id)">
            <img src="~assets/images/pic_01.jpg" :alt="item.compose_name" />
            <div class="info">
              <h3>{{item.compose_name}}</h3>
              <p class="desc">{{ item.desc }}</p>
              <p class="price">
                <span class="nprice">{{ item.price }}</span><span class="oldprice">{{ item.oldprice}}</span>
              </p>
              <button class="btn-buy">立即购买</button>
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
        data () {
            return {
               composeList: []
            }
        },
        mounted () {
            this.getComposeList()
        },
        methods: {

            changeShow (data) {
                const className = this.$refs.item.className
                if (data) {
                    this.$refs.item.className = (className == 'item' ? 'item col' : 'item')
                }
            },
            async getComposeList() {
                const  { code, data }  = await Http.composeList()
                if ( code === '00000') {
                    this.composeList = data.data
                }
            },
            goDesc (id) {
                this.$router.push({path: '/composeDesc', query: { id}})
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
            color:#fff;
            background-color: #38ad67;
            border:none;
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
