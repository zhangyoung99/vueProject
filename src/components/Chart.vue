<template>
    <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener} from 'resize-detector'
export default {
    props: {
        option: {
            type: Object,
            default: () => {}
        }
    },
    created() {
        this.resize = debounce(this.resize, 300);
    },
    mounted() {
        this.renderChart();
        addListener(this.$refs.chartDom,this.resize)

    },
    //封装第三方库要销毁实例
    beforeDestroy() {
        removeListener(this.$refs.chartDom, this.resize);
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        resize() {
            console.log("resize");
            this.chart.resize();
        },
        renderChart() {
            // 基于准备好的dom，初始化echarts实例
            this.chart = echarts.init(this.$refs.chartDom);
            // 绘制图表
            this.chart.setOption(this.option);
        }
    }

}
</script>

<style>

</style>
