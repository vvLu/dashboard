<template>
  <div id="app">
    <mu-appbar title="DASHBOARD" >
      <mu-icon-button icon="menu" slot="left"  @click="toggle(true)"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-menu @itemClick="docked ? '' : toggle()">
        <mu-menu-item :activeClass="active" exact to="/" title="平台概览"/>
        <mu-menu-item :activeClass="active" to="/Platyewu" title="平台业务"/>
        <mu-menu-item :activeClass="active" to="/Platflow" title="平台流量"/>
        <mu-menu-item :activeClass="active"  to="/Platuser" title="平台用户"/>
        <mu-menu-item :activeClass="active" to="/Platrecommend" title="报备分析"/>
        <mu-menu-item :activeClass="active" to="/Platgoneng" title="导出分析"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        <!-- <mu-menu-item to="/Platuser" title="平台用户"/> -->
      </mu-menu>
    </mu-drawer>
    <router-view class="contents"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      open: false,
      docked: false,
      active: 'active'
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #E2E6EC;
  height: 100%
}
.contents{
  margin: 10px;
  margin-top: 56px;
}
.mu-appbar{
  background-color: #4977E0;
  position: fixed;
  top: 0;
  left: 0;
}
.mu-appbar .mu-appbar-title{
  font-size: 16px
}
.router-link-active{
  background: #ccc
}
.active{
  background: #ccc
}
.mu-drawer{
  width: 100px
}
.router-link-exact-active{
  background: #ccc;
}
.mu-menu-item-wrapper{
  background: #000;
}
</style>
