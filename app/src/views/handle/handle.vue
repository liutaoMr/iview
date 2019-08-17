<template>
  <div class="handleBox">
    <head-nav></head-nav>
    <div class="simpleInfor">
      <span>条码号：</span><span>1234567890000</span>
    </div>
  </div>
</template>

<script>
    import HeadNav from "../nav/headNav";
    export default {
        name: "handle",
      components: {HeadNav}
    }
</script>

<style scoped>
.simpleInfor{
  width: 100%;
  background: #F4F3FC;
}
</style>
