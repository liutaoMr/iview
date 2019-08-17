<template>
  <div class="box">
    <div class="mask" v-show="modalStatus==true" @click="handleMask()">
    </div>
    <div class="modal" v-show="modalStatus==true">
      <div class="nav">
        <span>修改</span><Icon @click="close" class="close" type="md-close" />
      </div>
      <div class="content">
        <Form :model="inforCollec"   :label-width="90" inline>
          <p style="text-align: left; font-size: 16px;font-weight: 800; line-height: 30px;">基本信息</p>
          <FormItem label="所属卫生室：">
            <Select v-model="clinicSelected" style="width:200px">
              <Option v-for="item in clinicOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="本人电话：" prop="Iphone">
            <Input type="text" v-model="inforCollec.Iphone" style="width: 100px;"></Input>
          </FormItem>
          <FormItem label="责任医生：" prop="dutyDoctor">
            <Input type="text" v-model="inforCollec.dutyDoctor" style="width: 100px;"></Input>
          </FormItem>
          <FormItem label="现住地址：" prop="nowLocation">
            <Input type="text" v-model="inforCollec.nowLocation" style="width: 300px;"></Input>
          </FormItem>
          <FormItem label="紧急联系人：">
            <Row>
              <Col span="11">
                <FormItem prop="emergencyName" >
                  <Input type="text" v-model="inforCollec.emergencyName" style="width: 140px;" placeholder="联系人姓名"></Input>
                </FormItem>
              </Col>
              <Col span="2" style="text-align: center">-</Col>
              <Col span="11">
                <FormItem label=""prop="emergencyPhone">
                  <Input type="text" v-model="inforCollec.emergencyPhone" style="width: 140px;" placeholder="联系人电话"></Input>
                </FormItem>
              </Col>
            </Row>
          </FormItem>
          <p style="text-align: left; font-size: 16px;font-weight: 800; line-height: 30px;border-top: 1px solid #eeeeee">选择类型</p>
          <div class="typeCheck">
            <FormItem prop="PersonnelType">
              <CheckboxGroup v-model="inforCollec.PersonnelType" size="large">
                <Checkbox v-for="item,index in PersonnelTypeConfig" :key="index" :label="item"></Checkbox>
              </CheckboxGroup>
            </FormItem>
          </div>
          <FormItem>
            <Button @click="save()" type="primary">保存</Button>
            <Button @click="cancel()" style="margin-left: 100px;">取消</Button>
          </FormItem>
        </Form>
        <h1 style="color: black">这是条码号：{{paramsId}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "handleChange",
      props:["modalStatus","paramsId"],
      data () {
        return {
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
          inforCollec: {
            Iphone:'17806277535',
            dutyDoctor:'杨永信',
            nowLocation:'山东省青岛市李沧区银海综合大厦',
            emergencyName:'程奕迅',
            emergencyPhone:'17806277532',
            PersonnelType:["低保"],
          },
          PersonnelTypeConfig:["低保","脑卒中","普通人","残疾人","重精","糖尿病","糖尿病高危",
            "60-65岁","贫困","高血压","冠心病","高血压高危",
            "五保","老年人","计生特殊人群"],
        }
      },
      methods: {
        //模态点击消失
        handleMask(){
          this.$emit('updateModalStatus',false)
        },
        close(){
          this.$emit('updateModalStatus',false)
        },
        save(){
          this.$emit('updateModalStatus',false)
          //在这里弹窗是否确定
        },
        cancel(){
          this.$emit('updateModalStatus',false)

        },
        handleEdit (row) {
          console.log(row)
          this.$set(row, '$isEdit', true)

        },
        handleSave (row) {
          this.$set(row, '$isEdit', false)
        }
      }
    }
</script>

<style scoped>
  .mask {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#000;
    opacity:0.7;
    z-index: 999;
    height: 768px;
  }
  .modal{
    width: 660px;
    background: white;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -500px;
    margin-left: -330px;
    z-index: 1000;
    border-radius: 4px;
  }
  .modal .nav{
    color: white;
    border-radius: 4px 4px 0 0;
    text-indent: 15px;
    font-size: 26px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  }
  .close{
    float: right;
    margin-right: 5px;
    line-height: 40px;
  }
  .content{
    padding: 10px;
  }
</style>
