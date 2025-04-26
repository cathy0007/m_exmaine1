<template>
    <div class="list">  
        <myHeader :title="$route.query.name" :option="true" :classArr="['icon-row', 'icon-col']" classStr="icon-row" @changeType="changeShow" />
        <ul class="item" ref="item">
          <li v-for="(item, index) in composeList" :key="index"
          @click="$router.push({path: '/composeDesc', query: { id: index}})">
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
            padding: 0 .4rem;
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
            width: 1.2rem;
            line-height: .48rem;
            border-radius: .01rem;
            font-size: .20rem;
        }
    }
    .desc {
        color: #666;
        font-size: 0.2rem;
    }
    .price {
        padding: .05rem;
    }
    .col {
        display: block;
        li {
            width: auto;
        }
    }

</style>
