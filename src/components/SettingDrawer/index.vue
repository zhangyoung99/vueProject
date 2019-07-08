<template>
    <div>
        <a-drawer
        placement="right"
        :closable="false"
        @close="onClose"
        :visible="visible"
        >
            <template v-slot:handle>
                <div class="handle" @click="showDrawer">
                    <a-icon :type="visible?'close':'setting'"></a-icon>
                </div>
            </template>
            <div>
                <div>
                    <h2>整体风格定制</h2>
                    <a-radio-group
                    :value="$route.query.navTheme || 'dark'"
                    @change = "e => handleSettingChange('navTheme', e.target.value)"
                    >
                        <a-radio value="dark">dark</a-radio>
                        <a-radio value="light">light</a-radio>
                    </a-radio-group>
                    <h2>导航模式</h2>
                    <a-radio-group
                    :value="$route.query.navLayout || 'left'"
                    @change = "e => handleSettingChange('navLayout', e.target.value)"
                    >
                        <a-radio value="left">左侧</a-radio>
                        <a-radio value="top">顶部</a-radio>
                    </a-radio-group>
                </div>
            </div>
        </a-drawer>
    </div>

</template>

<script>
export default {
    data (){
        return {
            visible: false
        }
    },

    methods: {
        showDrawer() {
            // this.visible = true
            this.visible = !this.visible
        },
        onClose() {
            this.visible = false
        },
        handleSettingChange(type,value) {
            this.$router.push({ query: { ...this.$route.query, [type]:value} })
        }
    }

}
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  background: #1890ff;
  color: #fff;
  text-align: center;
}
</style>
