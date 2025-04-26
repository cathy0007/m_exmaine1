<template>
    <div class="compose">
        <MyHeader :title="'套餐列表'" :showBack="true" />
        <ul>
            <!-- <li v-for="item in [1,2,3,4]" @click="$router.push({ name: 'composeList', params: { count: 6,name: 'xx'}})"> -->
            <li v-for="item in [1,2,3,4]" @click="$router.push({ path: '/composeList', query: { count: 6,name: '体检套餐列表'}})">
                <img src="~assets/images/pic_01.jpg" class="pic" alt="">
                <div class="info">
                    <h3>标题</h3>
                    <p>812个</p>
                </div>
                <span class="icon-desc">></span>
            </li>
        </ul>
    </div>
</template>
<script>
import MyHeader from 'common/header'
export default {
    name: 'index',
    components: {
        MyHeader
    },
    created() {

    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.active {
    border-bottom: 2px solid #f60;
    ;
}

.list.row ul {
    display: flex;

    li {
        display: flex;
        flex-direction: column;
    }
}

ul {
    padding: .76rem .42rem 0;
}

li {
    display: flex;
    align-items: center;
    padding: .16rem .32rem;
    border-radius: .08rem;
    margin-bottom: .56rem;
    background-color: #f4f6f6;

    .pic {
        width: 2.6rem;
        height: 2.04rem;
    }

    .info {
        padding-left: .44rem;
        font-size: .36rem;
        flex: 1;
        line-height: .68rem;

        p {
            font-size: .3rem;
        }
    }

    color: #374151;

    .icon-desc {
        color: #333;
        font-size: .3rem;
    }
}
</style>