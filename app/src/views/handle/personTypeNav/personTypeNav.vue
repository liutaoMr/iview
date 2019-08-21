<template>
  <div class="simpleInfor">
    <Row style="height: 36px" class="inforNav">
      <Col span="6">
        <span style="margin-left: 30px">条码号：</span>
        <span>1234567890000</span>
        <span>张三</span>
        <span>男</span>
        <span>69</span>
      </Col>
      <Col span="18">
        <div class="personnelType">
          <span>老年人</span>
          <span>低保</span>
          <span>高糖</span>
          <span>高度不能自理</span>
          <span>血糖高危患者</span>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "personTypeNav"
    }
</script>

<style scoped>
  .simpleInfor{
    width: 100%;
    background: #F4F3FC;
  }
.inforNav span{
  margin: 0 10px;
  line-height: 36px;
}
  .personnelType span{
    font-weight: 700;
  }
</style>
