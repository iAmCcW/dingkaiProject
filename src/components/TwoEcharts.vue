<template>
<div>
  <div class="filter-charts">
      <el-date-picker style="margin: 20px" v-model="month" value-format="yyyy-MM" size="small" type="month" placeholder="选择月份"></el-date-picker>
      <el-button style="margin-left: 15px; margin-bottom: 20px" type="primary" @click="handleSure">确定</el-button>
    </div>
  <div class="two-charts" style="margin-left: 20px">
    <div id="chartOne" class="chart"></div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      month: '',
      myChartOne: null,
      dataAll: {
        dataOne: [10, 15, 28, 12, 15, 10, 10, 10, 10, 10],
        dataTwo: [15, 10, 20, 18, 10, 10, 10, 10, 10, 10],
        dataThree: [10, 20, 30, 20, 10, 10, 10, 10, 10, 10]
      },
      date: '',
      typeBoolean: true
    }
  },
  computed: {
    type: function () {
      return this.typeBoolean ? 'bar' : 'line'
    }
  },
  methods: {
    initCharts () {
      this.myChartOne = echarts.init(document.getElementById('chartOne'))
      this.myChartOne.setOption({
        title: {text: this.date},
        legend: {
          data: ['one'],
          right: 10
        },
        grid: {
          top: 100
        },
        yAxis: [
          {
            name: '业绩',
            type: '',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#666',
              fontSize: 12
            }
          }
        ],
        xAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#666',
            fontSize: 10,
            margin: 10
          },
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
        },
        series: [
          {
            name: 'one',
            yAxisIndex: 0,
            data: [],
            type: 'bar',
            color: '#00B5FF'
          }
        ]
      })
      this.myChartOne.showLoading()
    },
    handleSure () {
      if (this.date === '') return
      var newSeries = []
      if (this.typeBoolean) {
        newSeries = [
          {
            name: 'one',
            type: this.type,
            color: '#00B5FF'
          }
        ]
      } else {
        newSeries = [
          {
            name: 'one',
            type: this.type,
            color: '#00B5FF',
            symbolSize: 6,
            lineStyle: {
              width: 4
            }
          }
        ]
      }
      this.myChartOne.setOption({
        title: {
          text: this.date
        },
        series: [{...newSeries[0], data: this.dataAll.dataTwo}, {...newSeries[1], data: this.dataAll.dataOne}]
      })
    }
  },
  mounted () {
    this.initCharts()
    var $this = this
    setTimeout(function () {
      $this.myChartOne.setOption({
        series: [
          {
            name: 'one',
            data: $this.dataAll.dataOne
          }
        ]
      })
      $this.myChartOne.hideLoading()
    }, 1000)
  }
}
</script>
<style scoped lang="scss">
@import '~@/common/css/base.scss';
.filter-charts {
  border: 0px solid rgba(155, 155, 155, 0.2)
}
.two-charts {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  .chart {
    height: 300px;
    @media screen and (min-width: $smallSize){
      height: 500px;
    }
    width: 50%;
    min-width: 300px;
    padding-top: 0px
  }
}
</style>
