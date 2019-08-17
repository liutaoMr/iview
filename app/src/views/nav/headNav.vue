<template>
    <div class="nav">
        <Row style="background:#278AEF;">
          <Col span="5">
            <MenuItem name="1" style="line-height: 62px">
              <i class="iconfont icon-zhuye" style="color: white;margin:10px 20px"></i>
              <Select v-model="clinicSelected" style="width:200px">
                <Option v-for="item in clinicOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </MenuItem>
          </Col>
          <Col span="14" style="text-align: center;line-height: 62px;">
            <span style="color: white;font-size: 20px;">信息采集--体检登记</span>
          </Col>
          <Col span="5" >
            <Menu mode="horizontal" :theme="theme1" active-name="1">
              <MenuItem  name="2">
                <Icon type="md-settings" style="color: white;font-size:25px;"/>
                <Icon type="ios-expand" style="color: white;font-size:25px;margin-left: 20px;" @click="handleFullScreen"/>
              </MenuItem>
              <Submenu name="3">
              <template slot="title" >
                <i class="iconfont icon-yonghu" style="font-size: 20px;"></i>
                <span style="color: white;font-size: 20px;">用户名</span>
              </template>
                <MenuItem name="3-1">修改密码</MenuItem>
                <MenuItem name="3-2">修改信息</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </Submenu>
            </Menu>
          </Col>
        </Row>

  </div>
</template>

<script>
    export default {
        name: "headNav",
      data () {
        return {
          //全屏
          fullscreen: false,
          theme1: 'primary',
          clinicOption:[
            {
              value: 'shiqiao',
              label: '石桥镇卫生室'
            },
            {
              value: 'heshan',
              label: '河山镇卫生室'
            },
          ],
          clinicSelected:'shiqiao',
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
      },
    }
</script>

<style scoped>
  .ivu-menu-item{
    padding: 0 6px;
  }
</style>
