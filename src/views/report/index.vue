<template>
    <div class="report">
         <!-- header -->
        <myHeader :title="'体检报告'" />
        <div class="item top">
            <p>健康指数</p>
            <p class="score">87</p>
        </div>
        <div class="item">
            <h2>历史比对</h2>
            <div class="info">
                <p><span class="left">身高</span><span>160cm</span></p>
                <p><span class="left">体重指数BMI</span><span>18.3</span></p>
                <p><span class="left">收缩压</span><span>96mmHg</span></p>
                <p><span class="left">舒张压</span><span>66mmHg</span></p>
                <p><span class="left">血小板</span><span class="tip">99.00*10^9/L</span></p>
            </div>
        </div>
       <div class="item">
        <h2>异常指标</h2>
        <p class="warning"><span class="left">血小板偏低</span><span>103.00*10^9/L</span></p>
        <h2>终检结论</h2>
        <pre>
血液常规提示：血小板值偏低[103.00*10^9/L]。建议内科复查随访
医疗保健
1.血小板减少：
血小板是血液基本成分之一，参与止血和血栓形成，血小板计数是每单位容积周围血液中血小板的数量，低于100*10（9次方）/L为血小板计数减少。清晨、女性月经前可呈一过性减少，一般无临床意义。病理性减少见于原发性血小板减少性紫癜、再生障碍性贫血、放射性损伤、某些药物反应、脾功能亢进等。
建议您复查血常规、内科随访。
        </pre>
       </div>
        <!-- 发邮件联系医生 -->
        <a class="btn-contact btn-space" href="mailto:lidoc@gmail.com">联系医生</a>
    </div>
</template>

<script>
import myHeader from 'common/header'
import Http from '../../api/index'
export default {
    data() {
        return {
            desc: {}
        }
    },
    components: {
        myHeader
    },
    mounted() {
        this.reportDesc()
    },
    methods: {
        reportDesc () {
            
        }
    }
}
</script>

<style lang="less" scoped>
.report {
    background-color: rgba(244, 246, 246, 1);
    height: 100vh;
}
.item {
    margin-top:.2rem;
    padding: .24rem;
    background-color: #fff;
}
.top {
    margin-top: 0;
    text-align: center;
    font-size: .52rem;
    color: #222;
    .score {
        font-weight: 700;
        margin-top: .3rem;
    }

}
h2 {
    color: #666;
    font-size: .34rem;
}
p {
    line-height: .7rem;
}
.info {
    p {
        display: flex;
        justify-content: space-between;
    }
    .tip {
        color: #f00;
    }
}

</style>