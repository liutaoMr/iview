<template>
  <div class="informationCollection">
    <Form>
      <Row style="margin-top: 5px;">
        <Col span="7">
          <Card style="width:97%;margin-left: 10px;text-align: center;">
            <p class="card-title">信息采集</p>
            <Form :model="inforCollec" :rules="ruleInfor" ref="inforCollec" :label-width="90" inline>
                  <FormItem label="姓名：" prop="name">
                    <Input type="text" v-model="inforCollec.name" style="width: 70px;"></Input>
                  </FormItem>
                  <FormItem label="年龄：" prop="age">
                    <Input type="text" v-model="inforCollec.age" style="width: 70px;"></Input>
                  </FormItem>
                  <FormItem label="性别：" prop="sex">
                    <Select v-model="inforCollec.sex"style="width: 70px;">
                      <Option value="0">男</Option>
                      <Option value="1">女</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="民族：" prop="nation">
                    <Select v-model="inforCollec.nation" style="width: 70px;">
                      <Option v-for="item,index in nationList" :value="item.key">{{item.value}}</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="户籍地址：" prop="location" >
                    <Input type="text" v-model="inforCollec.location" style="width: 250px;"></Input>
                  </FormItem>
                  <FormItem label="身份证号：" prop="cardNum">
                    <Input type="text" v-model="inforCollec.cardNum" style="width: 250px;"></Input>
                  </FormItem>
                  <FormItem label="出生日期：" prop="birth">
                    <Date-picker  placeholder="选择日期"
                                  size="large"
                                  type="datetime"
                                  v-model="inforCollec.birth"
                                  :key="inforCollec.birth"
                                  format="yyyy-MM-dd"
                                  @on-change="inforCollec.birth=$event" >
                    </Date-picker>
                  </FormItem>
              <p style="color:#24A766 ">身份证阅读器已连接！</p>
            </Form>
            <Button size="large"  type="primary" class="btn-hover" id="read" @click="handleRead()">读取</Button>
          </Card>
        </Col>
        <Col span="9">
          <Card  style="width:97%;margin-left: 5px;text-align: center;">
            <div style="text-align:center">
              <p class="card-title">照片采集</p>
              <Row>
                <Col span="10">
                  <div class="photo">
                    <img src="../../../public/images/noCamera.png" v-show="photoOk==''" style="padding: 56px 0;"  alt="">
                    <video muted ref="video" style="width: 100%;padding: 10px 0;" v-show="photoOk!==''"  autoplay></video>
                  </div>
                </Col>
                <Col span="10" style="text-align: center" >
                  <div class="photoed">
                    <img  v-show="hasImage==''" src="../../../public/images/blank.jpg" style="padding: 15px 0;" alt="">
                    <canvas v-show="hasImage!==''" ref="canvas" style="width: 100%;height:100%;"></canvas>
                  </div>
                </Col>
                <Col span="4">
                  <Button size="small" type="primary" id="photo" @click="handleCatchCode()">拍照</Button>
                  <Button size="small" type="primary" id="reconnection" @click="handleReconnection()">重连</Button>
                </Col>
              </Row>
              <Row style="border-bottom: 1px solid #eeeeee;margin: 7px 0;"></Row>
              <Row>
                <Col span="15" >
                  <i class="signatureArea">签名区
                  </i>
                  <Button size="large" type="primary" @click="handleSignature()" id="signature">签名</Button>
                </Col>
                <Col span="8" style="text-align: center">
                  <i class="iconfont icon-zhiwen" :class="{haveFingerprint:fingerprintGet==1}"></i>
                  <Button size="large" type="primary" @click="handleFingerprintGet()" id="fingerprintGet">指纹采集</Button>
                </Col>
              </Row>
              <Row style="border-bottom: 1px solid #eeeeee;margin-top: 5px;"></Row>
              <Button size="large" type="success" id="createBarcode" @click="handleCreateBarcode()">生成条码</Button>
            </div>
          </Card>
        </Col>
        <Col span="8">
          <Card  style="width:97%;text-align: center; ">
            <div style="text-align:center">
              <p class="card-title">资料完善</p>
              <Form :model="inforCollec" :rules="ruleInfor" ref="inforCollec" :label-width="90" inline>
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
                <p style="text-align: left;line-height: 30px;border-top: 1px solid #eeeeee">选择类型</p>
                <div class="typeCheck">
                  <FormItem prop="PersonnelType">
                    <CheckboxGroup v-model="inforCollec.PersonnelType" size="large">
                      <Checkbox v-for="item,index in PersonnelTypeConfig" :key="index" :label="item"></Checkbox>
                    </CheckboxGroup>
                  </FormItem>
                </div>
          </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
  import {Read,Signature,FingerprintGet,CreateBarcode} from './informationCollecFun'
    export default {
        name: "InformationCollection",
      data () {
        return {
          //表单验证
          ruleInfor:{
            name: [
              { required: true,type:'string', message: '请输入姓名', trigger: 'blur' }
            ],
            age: [
              { required: true,type:'string', message: '请输入年龄', trigger: 'blur' },
              { type: 'string',pattern:/^((1[0-5])|[1-9])?\d$/, message:'年龄有误', trigger:'blur'},
            ],
            sex: [
              { required: true,type:'number', message: '请输入性别', trigger: 'blur' }
            ],
            nation: [
              { required: true,type:'string', message: '请输入民族', trigger: 'blur' }
            ],
            location: [
              { required: true,type:'string', message: '请输入户籍地址', trigger: 'blur' }
            ],
            cardNum: [
              { required: true,type:'string', message: '请输入身份证号码', trigger: 'blur' },
              { type: 'string',pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message:'身份证填写有误', trigger:'blur'}
            ],
            birth: [
              { required: true, message: '请输入出生日期', trigger: 'blur',pattern: /.+/ }
            ],
            Iphone:[
              { required: true,type:'string', message: '请输入本人电话', trigger: 'blur' },
              { type: 'string',pattern:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, message:'手机号码格式有误', trigger:'blur'},
            ],
            dutyDoctor:[
              { required: true,type:'string', message: '责任医生不能为空', trigger: 'blur' }
            ],
            nowLocation:[
              { required: true,type:'string', message: '现住地址不能为空', trigger: 'blur' }
            ],
            emergencyName:[
              { required: true,type:'string', message: '紧急联系人不能为空', trigger: 'blur' }
            ],
            emergencyPhone:[
              { required: true,type:'string', message: '紧急联系人电话不能为空', trigger: 'blur' },
              { type: 'string',pattern:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, message:'手机号码格式有误', trigger:'blur'},
            ],
            PersonnelType:[
              { required: true, type: 'array', min: 1, message: '人员类型不能为空', trigger: 'change' },
            ]
          },
          //人员类型config
          PersonnelTypeConfig:["低保","脑卒中","普通人","残疾人","重精","糖尿病","糖尿病高危",
            "60-65岁","贫困","高血压","冠心病","高血压高危",
            "五保","老年人","计生特殊人群"],
          //民族列表
          nationList:[{key:'01',value:'汉族'},{key:'02',value:'壮族'},{key:'03',value:'满族'},{key:'04',value:'回族 '},{key:'05',value:'苗族'},{key:'06',value:'维吾尔族 '},{key:'07',value:'土家族'},{key:'08',value:'彝族'},{key:'09',value:'蒙古族'},{key:'10',value:'藏族'},{key:'11',value:'布依族'},{key:'12',value:'侗族'},{key:'13',value:'瑶族'},{key:'14',value:'朝鲜族  '},{key:'15',value:'白族'},{key:'16',value:'哈尼族'},{key:'17',value:'哈萨克族'},{key:'18',value:'黎族'},{key:'19',value:'傣族'},{key:'20',value:'畲族'},{key:'21',value:'傈僳族  '},{key:'22',value:'仡佬族'},{key:'23',value:'东乡族'},{key:'24',value:'高山族'},{key:'25',value:'拉祜族'},{key:'26',value:'水族'},{key:'27',value:'佤族'},{key:'28',value:'纳西族  '},{key:'29',value:'羌族'},{key:'30',value:'土族'},{key:'31',value:'仫佬族'},{key:'32',value:'锡伯族'},{key:'33',value:'柯尔克孜族'},{key:'34',value:'达斡尔族'},{key:'35',value:'景颇族  '},{key:'36',value:'毛南族'},{key:'37',value:'撒拉族'},{key:'38',value:'布朗族'},{key:'39',value:'塔吉克族'},{key:'40',value:'阿昌族'},{key:'41',value:'普米族'},{key:'42',value:'鄂温克族  '},{key:'43',value:'怒族'},{key:'44',value:'京族'},{key:'45',value:'基诺族'},{key:'46',value:'德昂族'},{key:'47',value:'保安族'},{key:'48',value:'俄罗斯族'},{key:'49',value:'裕固族  '},{key:'50',value:'乌兹别克族'},{key:'51',value:'门巴族'},{key:'52',value:'鄂伦春族'},{key:'53',value:'独龙族'},{key:'54',value:'塔塔尔族'},{key:'55',value:'赫哲族'},{key:'56',value:'珞巴族'},{key:'57',value:'外国血统'},{key:'58',value:'其他'}],
          inforCollec: {
            name: '刘涛',
            age: '22',
            sex:  0,
            nation: '01',
            birth:'2017-07-04',
            location:'山东省日照市山海天旅游风景度假区',
            cardNum:'371102199610281019',
            Iphone:'17806277535',
            dutyDoctor:'杨永信',
            nowLocation:'山东省青岛市李沧区银海综合大厦',
            emergencyName:'周杰伦',
            emergencyPhone:'17806277532',
            PersonnelType:["低保"],
          },

          //指纹是否采集
          fingerprintGet:1,
          //拍照相关数据
          localUpload: false,
          cameraUpload: false,
          imageUrl: '',
          hasImage:'',
          photoOk:'',
          video: undefined,
          canvas: undefined,
          mediaStream: undefined
          //拍照相关数据
        }
      },
      mounted(){
        this.localUpload = false
        this.cameraUpload = true
        this.cameraInit()
      },
      methods:{
          //摄像头调起拍照
        handleCameraUpload(){
          alert('摄像头调起拍照')
        },
        handleRead(){
          Read();
        },
        //重连方法
        handleReconnection(){
          this.cameraInit()
        },
        //签名方法
        handleSignature(){
          Signature()
        },
        //指纹采集
        handleFingerprintGet(){
          FingerprintGet()
        },
        //生成条码
        handleCreateBarcode(){
          CreateBarcode()
          var url = 'http://192.168.0.128:8080/kyjk/';
          var params = 'ok';
          this.$ajax.post(url,params).then(function (response) {
           console.log(response)
          }).catch(function (error) {
            //请求失败
            console.log(error)
          });
        },
        //相机初始化
        cameraInit () {
          this.video = this.$refs.video
          this.canvas = this.$refs.canvas
          this.handleUserCamera()
        },
        //启动相机
        handleUserCamera () {
          const video = this.video
          this.photoOk = '1'
          if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {}
          }
          if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function (constraints) {
              // 首先，如果有getUserMedia的话，就获得它
              var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia
              // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
              if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented'))
              }
              // 否则，为老的navigator.getUserMedia方法包裹一个Promise
              return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject)
              })
            }
          }
          navigator.mediaDevices.getUserMedia({video: { width: 280, height: 280 }, audio: false})
            .then(stream => {
              video.srcObject = stream
              video.onloadedmetadata = function (e) {
                video.play()
              }
              this.mediaStream = stream
            })
            .catch(err => {
              console.log(err.name + ': ' + err.message)
            })
        },
        //将拍的照片画下来
        handleCatchCode () {
          this.hasImage='1';
          const video = this.video
          const canvas = this.canvas
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          const context = canvas.getContext('2d')
          context.drawImage(video, 0, 0)
          this.handleCameraSave();
        },
        //存储照片实现
        handleCameraSave () {
          // 获取浏览器页面的画布对象
          this.imageUrl = this.canvas.toDataURL('image/jpg')
          console.log(this.imageUrl);
          this.$emit('imageUrl', this.imageUrl)
          this.cameraUpload = false
        },

      },
    }
</script>

<style scoped>
  .ivu-checkbox-group {
    font-size: 16px;
  }
  .ivu-card-head {
    padding: 10px 16px;
  }
  .ivu-form-item{
    margin-bottom: 19px;
  }
  .card-title{
    padding-bottom:10px ;
    border-bottom:1px solid #eeeeee;
    margin-bottom:5px;

  }
  .informationCollection p{
    font-weight: 900;
  }
  #read{
    width:60%;
    height:30%;
    margin: 9px 0;
    border-radius:20px;
  }
  #photo{
    width:80%;
    height:30px;
    border-radius:19px;
  }
  #reconnection{
    width:80%;
    height:30px;
    border-radius:19px;
    margin-top: 20px;
  }
  .photo{
    width:90%;
    height:197px;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
  .photoed{
    width:90%;
    height:197px;
    padding: 13px 0;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
  .signatureArea{
    display: inline-block;
    line-height: 42px;
    width:60%;
    height:20%;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
  #signature{
    width:30%;
    height:20%;
    border-radius:19px;
    margin: 0 10px;
    position: relative;
    top: -2px;
  }
  .icon-zhiwen{
    font-size: 34px;
  }
  #fingerprintGet{
    width:60%;
    height:50%;
    border-radius:19px;
    position: relative;
    top: -10px;
    left: 18px;
  }
  #createBarcode{
    margin: 16px 0;
    width:50%;
    height:40%;
    border-radius:16px;
  }
  .typeCheck{
    width:100%;
    height:100%;
    background:rgba(233,245,255,1);
    border-radius:4px;
    text-align: left;
  }
  .haveFingerprint{
    color:#278AEF
  }
</style>
