<template>
  <div id="app">
    <el-container>
      <el-header
      class="header"
      id="nav">
        <el-menu
        background-color="#091C28"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal" router>
          <el-menu-item index="/">Поля</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style>
body, #app {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.header {
  background-color: #091C28;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
