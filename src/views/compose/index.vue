<template>
    <div class="compose">
        <MyHeader :title="'套餐列表'" :showBack="true" />
        <ul>
            <li v-for="(item, index) in composeCate" :key="index" @click="$router.push('/composeList')">
                <img src="~assets/images/pic_01.jpg" class="pic" alt="">
                <div class="info">
                    <h3>{{ item.name }}</h3>
                    <p>{{item.count}}个</p>
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
            composeCate: [
            {
                "name": "优雅绅士 男性套餐",
                "count": 6
            },
            {
                "name": "粉红挚爱 女性套餐",
                "count": 8
            },
            {
                "name": "关爱父母 老人套餐",
                "count": 8
            },
            {
                "name": "职场无忧 入职体检",
                "count": 2
            }
            ]
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