<template>
  <div class="bloodPressureBox">
    <Card>
      <div class="content">
        <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
          <Row>
            <Col span="4">血压</Col>
            <Col span="1" offset="19"><Button type="primary">保存</Button></Col>
          </Row>
        </div>
        <div class="contentData">
          <Row>
            <Col span="14">
              <div class="content-left">
                <Form style="padding:40px 20px;text-align: center" inline>
                  <FormItem label="左侧血压" :label-width="120" class="formItem">
                    <Input type="text"   style="width:120px;">
                    </Input>
                    <span style="font-size: 20px;margin: 0 10px;color: #D2D2D2">/</span>
                    <Input type="text"  style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="脉率" :label-width="120" class="formItem">
                    <Input type="text"   style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="右侧血压" :label-width="120" class="formItem">
                    <Input type="text"   style="width:120px;">
                    </Input>
                    <span style="font-size: 20px;margin: 0 10px;color: #D2D2D2">/</span>
                    <Input type="text"  style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="呼吸频率" :label-width="120" class="formItem">
                    <Input type="text"   style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem class="measureBloodBox">
                    <span>连接血压计失败</span>
                    <Button size="large" type="primary" id="bloodPressureMeasure">测量</Button>
                  </FormItem>
                  <FormItem label="端口号":label-width="80" style="margin-top: 60px;">
                    <Select  style="width:90px;" v-model="port">
                      <Option value="8080">8080</Option>
                    </Select>
                    <Icon type="md-sync" size="24" />
                  </FormItem>
                </Form>
              </div>
            </Col>
            <Col span="10">
              <div class="content-right">
                <div class="friendNotoce" >友情提示</div>
                <div class="notice">
                  <p>右侧血压过高</p>
                  <p>
                    <span>风险评估：</span><span>患高血压、糖尿病风险较高</span>
                  </p>
                  <p>
                    <span>医生建议：</span><span>多运动、锻炼身体、多吃青菜多运动、锻炼身体、多吃青菜、锻炼身体</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
    export default {
        name: "bloodPressure"
    }
</script>

<style scoped>
  .content-left{
    height:370px;
    border-radius:4px;
    border:1px solid rgba(6,169,237,1);
  }
  .content-right{
    padding: 10px;
    margin-left: 15px;
    height:370px;
    border-radius:4px;
    border:1px solid rgba(6,169,237,1);
  }
  .notice p{
    text-indent: 10px;
    font-weight: 700;
  }
  .notice p:first-child{
    font-size: 20px;
    color: red;
  }
  .friendNotoce{
    color: white;
    margin: 20px auto;
    text-align: center;
    width:118px;
    height:36px;
    line-height: 36px;
    background:rgba(255,140,140,1);
    border-radius:4px;
  }
  .formItem>:first-child{
    font-size: 18px;
  }
  .measureBloodBox{
      margin-top: 60px;position: relative
  }
  .measureBloodBox span{
    color: red;position: absolute;top: -38px;left: 286px;
   }
  #bloodPressureMeasure{width:200px;
    height:40px;
    border-radius:20px;
    margin-left: 236px}
</style>
