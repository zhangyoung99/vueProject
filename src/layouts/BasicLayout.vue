<template>
<div class="layout">
    <a-layout id="components-layout-custom-trigger" style="min-height: 100vh">
        <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
        >
            <div class="logo">Ant Design Vue Pro</div>
            <SideMenu />
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
                />
                <Header />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer style="text-align: center"> 
                <Footer />
                Ant Design ©2019 Created by Ant
            </a-layout-footer>
        </a-layout>
    </a-layout>
    <SettingDrawer />
</div>
    
</template>

<script>
import Header from "./header.vue";
import SideMenu from "./sideMenu.vue";
import Footer from "./footer.vue";
import SettingDrawer from "../components/SettingDrawer"

export default {
    data(){
        return {
            collapsed: false
        }
    },
    components: {
        Header,
        SideMenu,
        Footer,
        SettingDrawer
    }

}
</script>

<style lang="less" scoped>
.trigger {
    padding: 0 20px;
    line-height: 64px;
    font-size: 20px;
}
.trigger:hover {
    color: #1890ff;
}
</style>

