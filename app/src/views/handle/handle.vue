<template>
  <div class="handleBox">
    <head-nav></head-nav>
    <person-type-nav></person-type-nav>
    <router-link to="/heightWeight">身高体重</router-link>
    <router-link to="/bloodPressure">血压</router-link>
    <router-link to="/bSuper">B超</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
    import HeadNav from "../nav/headNav";
    import PersonTypeNav from "./personTypeNav/personTypeNav";
    import heightWeight from "./heightWeight/heightWeight"
    export default {
        name: "handle",
      components: {PersonTypeNav, HeadNav,heightWeight}
    }
</script>

<style scoped>
</style>
