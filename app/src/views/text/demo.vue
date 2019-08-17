<template>
  <div>
    <div class="btn-fullscreen" @click="handleFullScreen">
      <button placement="bottom">
       全屏
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "demo",
      data(){
          return{
            fullscreen: false
          }
      },
      methods:{
        handleFullScreen(){
          let element = document.documentElement;
          if (this.fullscreen) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            }
          } else {
            if (element.requestFullscreen) {
              element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
            }
          }
          this.fullscreen = !this.fullscreen;
        },
      }
    }
</script>

<style scoped>

</style>
