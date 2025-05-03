<template>
    <div class="health">
      <myHeader :title="'历史数据分析'" />
      <h3>1.历史健康分数对比</h3>
      <div class="myechart" id="score">

      </div>
      <h3>2.结果分析及医生意见</h3>
      <p class="notice">
          {{notice}}
      </p>
      <h3>3.食谱推荐</h3>
      <div class="goodfood">
          <div class="item">
              <h4>低血糖饮食</h4>
              <p>   低血糖患者应选择能稳定血糖、缓慢释放能量的食物，避免高糖高脂肪的食物。以下是饮食菜谱建议：</p>
              <div class="info">
                        <pre>
早餐：
    全麦面包两片
    煮鸡蛋一个
    无糖豆浆一杯
    一小份水果（如苹果或蓝莓）
午餐：
    糙米饭一碗
    清蒸鱼或鸡胸肉
    清炒西兰花、胡萝卜等高纤维蔬菜
    紫菜蛋花汤
晚餐：
    小米粥或燕麦粥一碗
    凉拌豆腐或水煮青菜
    一个小番薯（有助于平稳释放葡萄糖）
    一杯低脂牛奶（睡前补充可防夜间低血糖）
                </pre>
                    </div>
                </div>
                <div class="item">
                    <h4>高血压饮食</h4>
                    <p>高血压患者的饮食应以低盐、低脂、富含纤维、含有丰富钾、钙、镁等矿物质的食物为主，以下是饮食菜谱建议：</p>
                    <div class="info">
                        <pre>
早餐
    全麦面包+鸡蛋+西红柿
    全麦面包富含纤维，有助于控制血压。
    鸡蛋是优质蛋白的来源，适量食用有益健康。
    西红柿富含钾，有助于维持血压正常。
    一杯无糖豆浆
    豆浆是植物蛋白的良好来源，含有丰富的钙和钾。
午餐
    清炒菠菜+糙米饭
    菠菜含有丰富的钾、镁、铁，有助于降低血压。
    糙米饭比白米更有营养，富含纤维，有助于控制血糖和血脂。
    红烧鸡胸肉（少盐）
    鸡胸肉是瘦肉，脂肪含量低，适合高血压患者食用。
    一碗紫菜汤
    紫菜含有丰富的矿物质，尤其是钙和镁，有助于维持心脏健康。
晚餐
    蒸鱼（如鳕鱼或鲈鱼）
    鱼类富含优质蛋白、Omega-3脂肪酸，有助于降低血脂和维持心血管健康。
    凉拌黄瓜+胡萝卜
    黄瓜和胡萝卜富含水分、膳食纤维，能帮助排毒和消化。
    小米粥
    小米是低GI食品，有助于保持血糖稳定，适合高血压患者。
                </pre>
                    </div>
                </div>

    </div>
  </div>
</template>
<script>
import myHeader from 'common/header'
export default {
  name: 'HealthManagement',
  components: {
            myHeader
        },
  data() {
    return {
      scoreList: [70,80,90,85,78],
      notice: '低血糖通常由饮食不当、剧烈运动、胰岛素或降糖药使用不当等引起，患者会出现头晕、出汗、心慌、乏力等症状；高血压则多与遗传、肥胖、摄盐过多、精神紧张、缺乏运动等因素有关，长期高血压会损害心脑肾等器官。医生建议，低血糖患者应规律饮食，避免空腹及剧烈运动，按时监测血糖并在出现低血糖征兆时及时补充糖分；而高血压患者需控制体重，限制钠盐摄入，坚持锻炼，保持心态平稳，并定期测量血压，如有需要应遵医嘱服用降压药物以预防并发症的发生。高血压多因遗传、肥胖、饮食高盐、缺乏运动等引起，医生建议控制饮食、适量锻炼、规律作息、监测血压并遵医嘱服药。'
    }
  },
  mounted() {
    console.log('567890',echarts)
    let myChart = echarts.init(document.getElementById('score'));

      // 指定图表的配置项和数据
     const option = {
      // title: {
      //   text: '历史健康分数对比'
      // },
        xAxis: {
          type: 'category',
          data: ['2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.scoreList,
            type: 'line'
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
#score {
  width: 100%;
  height: 10rem;
}
 .health {
  padding: .24rem;
  h3,h4 {
            font-size: .4rem;
            font-weight: 700;
            margin: .24rem 0;
        }
        .notice {
            font-size: .36rem;
        }

        .goodfood {
            font-size: .36rem;
        }
      }
</style>