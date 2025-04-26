<template>
    <div class="report">
        <p>健康指数</p>
        <p class="score">87</p>
        <p><button class="btn-check">查看全部项目</button></p>
        <h2>历史比对</h2>
        <div class="info">
            <p><span class="left">身高</span><span>160cm</span></p>
            <p><span class="left">体重指数BMI</span><span>18.3</span></p>
            <p><span class="left">收缩压</span><span>96mmHg</span></p>
            <p><span class="left">舒张压</span><span>66mmHg</span></p>
            <p><span class="left">血小板</span><span>99.00*10^9/L</span></p>
        </div>
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
        <!-- 发邮件联系医生 -->
         <a class="btn-contact">联系医生</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>