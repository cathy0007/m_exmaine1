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
        <!-- 常见问题 -->
        <h2>常见问题</h2>
        <dl class="faq item" :class="show ? 'show' : ''">
            <dt class="title">1.体检前可以吃饭吗？</dt>
            <dd>
                不可以。空腹8小时是常规要求。
                <p>影响说明：进食会导致血糖升高、血脂异常，可能出现“假性异常”或掩盖实际问题。</p>
            </dd>
            <dt>2.女性月经期能做体检吗？</dt>
            <dd>
                不建议。应避开经期再进行尿检和妇科项目。
                <p>影响说明：经血可能污染尿液样本，导致尿检异常；血象、宫颈检查也可能受影响。</p>
            </dd>

            <dt>3.体检前一天能喝酒或熬夜吗？</dt>
            <dd>
                不可以。保持良好作息是必要准备。
                <p>影响说明：酒精会升高转氨酶、血脂，熬夜则可能影响心电图、血压、免疫等指标。</p>
            </dd>
            <dt>4.体检当天能喝水吗？</dt>
            <dd>
                可以少量饮水，尤其做腹部B超时建议保留尿液。
                <p>
                    影响说明：大量饮水可能稀释血液影响肾功能、血糖等指标；过少可能影响超声图像。
                </p>
            </dd>
            <dt>5.需要做空腹B超吗？</dt>
            <dd>
                是的，尤其是肝胆胰脾等腹部器官检查。
                <p>影响说明：进食后胆囊收缩，肠道充气增多，会遮挡器官、图像不清晰，易漏诊。</p>
            </dd>
            <dt>6.高血压或糖尿病患者能做体检吗？</dt>
            <dd>
                完全可以，但务必如实填写病史信息。
                <p>影响说明：医生无法判断用药或数值变化是否为病理性，可能误判病情或漏诊。</p>
            </dd>
            <dt>7.体检能查出癌症吗？</dt>
            <dd>
                部分能，但不等于确诊。建议有高风险人群定期做专科筛查。
                <p>影响说明：常规体检可发现异常信号（如肿块或肿瘤标志物升高），但需进一步确诊。</p>
            </dd>

            <dt>8.可以带药物去体检吗？</dt>
            <dd>
                可以，但应如实告知医生所服药物。
                <p>影响说明：药物如降压药、激素类等可能改变肝肾功能、血压或内分泌指标，影响数据真实性。</p>
            </dd>
            <dt>9.体检多久做一次比较合适？</dt>

            <dd>
                一般建议每年一次，根据年龄和健康状况可调整。
                <p>影响说明：间隔太久可能错过疾病早期征兆，影响早发现、早治疗。</p>
            </dd>
            <dt>10.体检报告看不懂怎么办？</dt>
            <dd>
                可电话或者邮件咨询医生或到体检机构前台咨询健康管理人员。
                <p>
                    影响说明：若不及时解读，可能错过异常指标背后的健康问题，延误干预时机。
                </p>

            </dd>
        </dl>
        <span @click="more" class="more">{{ show ? '收起' : '查看更多' }}</span>

        <!-- 联系医生 -->
        <a class="btn-contact btn-space" href="mailto:lidoc@gmail.com">发邮件联系医生</a>
        <a class="btn-contact btn-space" href="tel:15189888888">拨打电话联系医生</a>

    </div>
</template>

<script>
import myHeader from 'common/header'
export default {
    data() {
        return {
            desc: {},
            show: false
        }
    },
    components: {
        myHeader
    },
    mounted() {
        this.reportDesc()
    },
    methods: {
        more () {
            this.show = !this.show
        },
        reportDesc() {

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
    margin-top: .2rem;
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
    margin: .3rem 0;
    padding: .24rem;
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

.faq {
    font-size: .36rem;
    padding: .24rem;
    height: 8.4rem;
    overflow: hidden;
    &.show {
        height: auto;
    }
    dt {
        font-size: .42rem;
        font-weight: 700;
    }

    dd {
        padding: .32rem;
    }

    p {
        padding-top: .2rem;
        color: #f60;
        margin: 0;
    }
   
}
.more {
        display: block;
        width: 4rem;
        text-align: center;
        margin: 0 auto;
        font-weight: 700;
        font-size: .4rem;
        text-decoration: underline;
    }
</style>