<template>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
        <template v-slot:handle>
          <div class="handle" :visible="visible" @click="showDrawer">
              <a-icon type="setting"></a-icon>
          </div>
        </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
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
            this.visible = true
        },
        onClose() {
            this.visible = false
        },
    }

}
</script>

<style>

</style>
