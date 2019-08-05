<template>
    <div ref="chartDom"> </div>
</template>

<script>
import echarts from "echarts"; 
export default {
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }
        }
    },

    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.chart = echarts.init(this.$refs.chartDom);
        // 绘制图表
        this.chart.setOption(this.option);
    },
        //封装第三方库要销毁实例
    beforeDestroy() {
        // removeListener(this.$refs.chartDom, this.resize);
        this.chart.dispose();
        this.chart = null;
    },

}
</script>

<style>

</style>
