<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logoreal.jpg" alt="logo" height="50px">
      <h1>Inkdrop</h1>
      <div class="topNav">
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
}
.header {
  display:flex;
  padding: 10px;
  align-items: center;
  background-color: rgb(23, 25, 41);
	width: 100%;
  position: relative;
}
.header h1 {
	color: white;
	display: inline-block;
	font-size: 18px;
	font-weight: lighter;
}
.topNav {
	background-color: rgb(223, 222, 222);
	height: 7px;
	width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
