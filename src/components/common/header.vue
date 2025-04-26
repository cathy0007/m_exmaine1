<template>
    <header class="header">
        <span class="back" @click="$router.go(-1)" v-if="showBack">
            <span class="iconfont icon-left"></span>
            返回
        </span>
        <span class="title" ref="title">{{title}}</span>
        <span :class="'option'+' iconfont '+ classStr" v-if="option" @click="changeCol"></span>
    </header>
</template>

<script>
export default {
    name: 'myHeader',
    props: {
        title: {
            type: String,
            default: ''
        },
        option: {
            type: Boolean,
            default: false
        },
        classArr: {
            type: Array,
            default: ''
        },
        classStr:{
            type: String,
            default: ''
        },
        showBack: {
            type: Boolean,
            default: true
        },
    },
    mounted () {
        if (!this.showBack) {
            this.$refs.title.style.textIndent = '0'
        }
    },
    methods: {

        changeCol () {
            this.$emit('changeType', true)
            if (this.option) {
                this.classStr = this.classArr[1]
            } else {
                this.classStr = this.classArr[0]
            }
        }

    }

}
</script>

<style lang="less" scoped>
@import url('~less/variable.less');

.header {
    display: flex;
    line-height: 1.88rem;
    font-size: .46rem;
    padding:0 .4rem;
    box-shadow: 0 1px 1px -1px;
    background-color: #fff;

    .back {
        color: #colors[mainColor];
    }

    .title {
        flex-grow: 1;
        text-align: center;
        color: #374151;
        text-indent: -1.5rem;
    }

    .option {}
}
</style>
