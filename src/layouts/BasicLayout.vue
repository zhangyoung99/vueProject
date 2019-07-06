<template>
<div class="layout">
    <Header />
    <SideMenu />
    <Footer />
    <router-view></router-view>
</div>
    
</template>

<script>
import Header from "./header.vue";
import SideMenu from "./sideMenu.vue";
import Footer from "./footer.vue";

export default {
    data(){
        return {
            collapsed: false,
        }
    },
    components: {
        Header,
        SideMenu,
        Footer
    }
}
</script>

<style>

</style>
