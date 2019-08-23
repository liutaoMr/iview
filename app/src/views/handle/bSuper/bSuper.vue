<template>
  <div class="bSuperBox">
    <div class="Card">
      <Row>
        <Col span="8" style="background:white; border-radius:4px;">
          <div class="xcBox">
            <h3>信息采集</h3>
            <div class="xcImageBox"></div>
          </div>
          <div class="imageBox">
            <Row>
              <Col span="12">
                <div class="img1">
                  <p>照片1</p>
                  <div class="img1Box">
                    <Icon type="md-camera" class="icon-camera" size="30" color="#2E84F0"/>
                  </div>
                </div>
              </Col>
              <Col span="12">
                <div class="img2">
                  <p>照片2</p>
                  <div class="img1Box">
                    <Icon type="md-camera" class="icon-camera" size="30" color="#2E84F0" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span="16">
         <div class="bSuperCheck">
           <div>
             <Row>
               <Col span="4" style="border-right: 1px solid #eeeeee;height: 340px">
                 <div class="bSuperTypeBox">
                   <div class="bSuperType" v-for="item,index in bSuperType" @click="bSuperTypeClick(index)" :class="{clicked:index==current}">
                     <i :class="item.class"></i><span>{{item.text}}</span>
                     <i class="iconfont icon-sanjiao" v-show="current==index"></i>
                   </div>
                 </div>
               </Col>
               <Col span="20">
                 <Tabs type="card" :animated="false" style="margin:15px 0 0 5px;">
                   <TabPane v-for="item,index in bSuperTypeChecked" :label="item.navTitle">
                      <template v-for="text,index1 in item.checkBox">
                        <div class="inputTheme">
                          <template v-if="index==0">
                            <input type="checkbox" :value="index1" v-model="bSuperChecked[current][index]" @change="handleCommon()">
                            <span>{{text}}</span><br>
                          </template>
                          <template v-else>
                            <input type="checkbox" :value="index1" v-model="bSuperChecked[current][index]"@change="handleIll()">
                            <span>{{text}}</span><br>
                          </template>
                        </div>
                      </template>
                     <p>{{bSuperChecked[0]}}</p>
         n           <p>{{bSuperChecked[1]}}</p>
                     <p>{{bSuperChecked[2]}}</p>
                   </TabPane>
                 </Tabs>
               </Col>
             </Row>
           </div>
         </div>
          <div class="bSuperResult">
            <Row>
              <Col span="14">
                <h3>B超所见</h3>
                <div class="BsuperWatch" contenteditable="true">
            <!--腹部正常-->
                  <p v-if="bSuperChecked[0][0].includes(0)">肝脏大小形态尚可，被膜光滑，肝实质回声均匀。门脉及肝内外胆管未见扩张。</p>
                  <!-- 肝脏所见-->
                  <p v-for="item,index in BsTemplate.liverSee" v-if="bSuperChecked[0][1].includes(index)">{{item}}</p>
                  <!-- 脾脏所见-->
                  <p v-for="item,index in BsTemplate.spleenSee" v-if="bSuperChecked[0][2].includes(index)">{{item}}</p>
                  <!-- 胰腺所见-->
                  <p >胰腺所见为空</p>
                  <!-- 肾脏所见-->
                  <p v-for="item,index in BsTemplate.kidneySee" v-if="bSuperChecked[0][4].includes(index)">{{item}}</p>
                  <!--胆囊所见-->
                  <p v-for="item,index in BsTemplate.cholecystSee" v-if="bSuperChecked[0][5].includes(index)">{{item}}</p>
                  <!--肠胃所见-->
                  <p>肠胃所见为</p>
                </div>
              </Col>
              <Col span="10">
                <h3>B超结论</h3>
                <div class="BsuperConclusion" contenteditable="true">
          <!--腹部结论-->
                  <!--正常结论 -->
                  <p v-for="item,index in bSuperAbdomenConfig[0].checkBox" v-text="item" v-if="bSuperChecked[0][0].includes(index)"></p>
                  <!--肝脏结论 -->
                  <p v-for="item,index in bSuperAbdomenConfig[1].checkBox" v-text="item" v-if="bSuperChecked[0][1].includes(index)"></p>
                  <!--脾脏结论 -->
                  <p v-for="item,index in bSuperAbdomenConfig[2].checkBox" v-text="item" v-if="bSuperChecked[0][2].includes(index)"></p>
                  <!--胰腺结论 -->
                  <p v-for="item,index in bSuperAbdomenConfig[3].checkBox" v-text="item" v-if="bSuperChecked[0][3].includes(index)"></p>
                  <!--肾脏结论 -->
                  <p v-for="item,index in bSuperAbdomenConfig[4].checkBox" v-text="item" v-if="bSuperChecked[0][4].includes(index)"></p>
                  <!--胆囊结论-->
                  <p v-for="item,index in bSuperAbdomenConfig[5].checkBox" v-text="item" v-if="bSuperChecked[0][5].includes(index)"></p>
                  <!--肠胃结论-->
                  <p v-for="item,index in bSuperAbdomenConfig[6].checkBox" v-text="item" v-if="bSuperChecked[0][6].includes(index)"></p>
          <!--妇科结论-->
                  <p v-for="item,index in bSuperWomenSubjectConfig[0].checkBox" v-text="item" v-if="bSuperChecked[1][0].includes(index)"></p>
                  <p v-for="item,index in bSuperWomenSubjectConfig[1].checkBox" v-text="item" v-if="bSuperChecked[1][1].includes(index)"></p>
                  <p v-for="item,index in bSuperWomenSubjectConfig[2].checkBox" v-text="item" v-if="bSuperChecked[1][2].includes(index)"></p>
          <!--泌尿结论-->
                  <p v-for="item,index in bSuperUrinaryConfig[0].checkBox" v-text="item" v-if="bSuperChecked[2][0].includes(index)"></p>
                  <p v-for="item,index in bSuperUrinaryConfig[1].checkBox" v-text="item" v-if="bSuperChecked[2][1].includes(index)"></p>
                  <p v-for="item,index in bSuperUrinaryConfig[2].checkBox" v-text="item" v-if="bSuperChecked[2][2].includes(index)"></p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bSuper",
      data(){
          return{
            current:0,
            bSuperType:[
              {text:'腹部',class:'iconfont icon-zhengxingke'},
              {text:'妇科',class:'iconfont iconfont icon-fuke'},
              {text:'泌尿',class:'iconfont iconfont icon-miniaoke'}
            ],
            bSuperTypeChecked:[],
            bSuperAbdomenConfig:[
              {navTitle:'正常',checkBox:['肝、胆、胰、脾、肾未见异常','请结合临床及其他检查','建议进一步检查']},
              {navTitle:'肝脏',checkBox:['肝脏血管瘤','肝脏钙化灶','肝囊肿','肝内实性占位','肝脏实质弥漫性损害','脂肪肝']},
              {navTitle:'脾脏',checkBox:['脾内钙化灶']},
              {navTitle:'胰腺',checkBox:['胰肿大']},
              {navTitle:'肾脏',checkBox:['肾结石','肾积水','肾囊肿','肾实质斑片状强回声(考虑肾实质钙化)','肾实质略强回声结节(考虑肾错构瘤)','肾萎缩']},
              {navTitle:'胆囊',checkBox:['胆囊结石','胆囊大','胆囊息肉']},
              {navTitle:'肠胃',checkBox:['肠胃炎','肠肿','胃胀']},
            ],
            bSuperWomenSubjectConfig:[
              {navTitle:'正常',checkBox:['子宫卵巢正常']},
              {navTitle:'子宫',checkBox:['子宫厚','子宫脱落']},
              {navTitle:'卵巢',checkBox:['卵巢炎','卵巢肿','囊肿']}
            ],
            bSuperUrinaryConfig:[
              {navTitle:'正常',checkBox:['泌尿正常']},
              {navTitle:'双尿输尿管',checkBox:['输尿管堵塞','输尿管**']},
              {navTitle:'尿道',checkBox:['尿道炎','**']}
            ],
            bSuperChecked:[
              [
                [1],
                [0,1,2],
                [0],
                [0],
                [0],
                [1],
                [0],
              ],
              [
                [],
                [1],
                [1]
              ],
              [
                [],
                [1],
                [0]
              ]
            ],
            BsTemplate:{
              normal:['肝、胆、胰、脾、肾未见异常','请结合临床及其他检查','建议进一步检查'],
              liverSee:[
                '  肝内可见一大小约  <em style="color: red">*</em>  mm中强回声结节，边界清晰，回声均匀。',
                '肝脏大小形态可，被膜光滑，于肝内见一处强回声斑块，大小约  *  mm，后方伴声影，余肝实质回声均匀，血管纹理走向清晰，肝内胆管未见扩张。',
                ' 肝脏大小形态可，被膜光滑，于肝内见（一）个无回声区，大小约  *  mm，边界清晰，内透声尚可，余肝实质回声均匀。门脉及肝内胆管未见扩张。',
                '肝脏大小形态尚可，被膜光滑，于肝 左/右 叶探及 * mm  回声包块，边界清，形态不规则，内回声不均，余肝实质回声均匀。门脉及肝内外胆管未见扩张。',
                '肝脏大小尚可，被膜尚光滑，实质回声增强、增粗，肝内管道纹理尚清晰，门静脉无扩张。',
                ' 肝脏体积尚可，被膜光滑，实质回声细密增强，分布尚均匀，后场回声衰减，肝内血管纹理尚清晰，门脉系统及肝内胆管未扩张。',
              ],
              cholecystSee:[' 胆囊大小尚可，壁不厚，毛糙，囊腔内透声差，内见密集点状强回声漂浮，测值范围 * mm。','胆囊大小形态尚可，壁尚光滑，囊内可见（一）个强回声斑块，大小约  *  mm，后伴声影，随体位改变移动。','胆囊大小测值 <em style="color: red">* </em>mm，张力高，壁厚 mm，毛糙/不毛糙，腔内透声尚可。','胆囊大小形态正常，壁不厚，附壁探及 个中强回声，大小测值 * mm，后无声影，不随体位改变而移动。'],
              spleenSee:[' 脾脏形态、大小正常，边界清晰，内部回声不均匀，内可见一或多个强光团伴声影。',],
              kidneySee:['双肾大小形态正常，被膜光整，实质回声未见异常，集合系统无分离。于 左/右/双 肾探及斑片状强回声，后伴声影，大者测值 * mm。','双肾大小形态正常，被膜光整，实质回声未见异常，左/右肾集合系统分离  mm，于左/右肾探及 个斑片状强回声，大者测值 * mm，后伴声影。',' 左/右/双肾体积大，被膜不光整，于左/右/双肾实质内探及 个囊性结节，壁薄，内透声尚可，大者测值 * mm。',' 双肾大小形态正常，被膜光整，于左/右/双肾实质内探及 个斑片状强回声，大者测值 * mm。',' 双肾大小形态正常，被膜光整，于 左/右 肾实质内探及 个略强回声结节，边界清，内回声均，大小测值 * mm。',' 左/右肾体积小，测值 * mm，被膜不光整，实质回声变薄，结构层次不清，集合系统有/无分离。'],
            },
          }
      },
      methods:{
        bSuperTypeClick(index){
          this.current=index;
            if(index==0){
              this.bSuperTypeChecked=this.bSuperAbdomenConfig;
            }else if(index==1){
              this.bSuperTypeChecked=this.bSuperWomenSubjectConfig;
            }else if(index==2){
              this.bSuperTypeChecked=this.bSuperUrinaryConfig;
            }
          },
        //点击正常去掉症状
        handleCommon(){
          if(this.current==0&&this.bSuperChecked[0][0].includes(0)){
            console.log('腹部正常')
            for(let i=1;i<this.bSuperChecked[0].length;i++){
              this.bSuperChecked[0][i].splice(0);
            }
          }
          if(this.current==1&&this.bSuperChecked[1][0].includes(0)){
            console.log('妇科正常')
            for(let i=1;i<this.bSuperChecked[1].length;i++){
              this.bSuperChecked[1][i].splice(0);
            }
          }
          if(this.current==2&&this.bSuperChecked[2][0].includes(0)){
            console.log('泌尿正常')
            for(let i=1;i<this.bSuperChecked[2].length;i++){
              this.bSuperChecked[2][i].splice(0);
            }
          }

        },
        //点击症状去掉正常
        handleIll(){
          if(this.current==0){
            for(let i=1;i<this.bSuperChecked[0].length;i++){
              if(this.bSuperChecked[0][i].length!==0){
                this.bSuperChecked[0][0].splice(this.bSuperChecked[0][0].indexOf(0),1);
                break;
              }
            }
          }
          if(this.current==1){
            for(let i=1;i<this.bSuperChecked[1].length;i++){
              if(this.bSuperChecked[0][i].length!==0){
                this.bSuperChecked[1][0].splice(this.bSuperChecked[1][0].indexOf(0),1);
                break;
              }
            }
          }
          if(this.current==2){
            for(let i=1;i<this.bSuperChecked[2].length;i++){
              if(this.bSuperChecked[0][i].length!==0){
                this.bSuperChecked[2][0].splice(this.bSuperChecked[2][0].indexOf(0),1);
                break;
              }
            }
          }

        },
      },
      mounted() {
          this.bSuperTypeChecked=this.bSuperAbdomenConfig;
      },
      watch:{
      }
    }
</script>

<style scoped>
  .Card{
    background: #F4F3FC;
  }
.xcBox{
  text-align: center;
  border-radius:4px;
}
.xcBox h3{
  padding:20px 0;
}
.xcImageBox{
    margin: 0 auto;
    width:414px;
    height:370px;
    border:1px solid rgba(6,169,237,1);
    border-radius:4px;
  }
.imageBox p{
  font-size: 18px;
  text-indent: 98px;
  padding: 5px 0;
}
.img1{
  margin-top: 20px;
}
.img2{
    margin-top: 20px;
}
.img1Box{
  position: relative;
  margin-left: 15px;
  margin-bottom: 5px;
  width:193px;
  height:167px;
  border:1px solid rgba(6,169,237,1);
  border-radius:4px;
 }
.img1Box .icon-camera{
  z-index: 100;
  position: absolute;
  top: 80px;
  left: 87px;
}
.bSuperCheck{
  margin-left: 15px;
  width:884px;
  height:340px;
  background:rgba(255,255,255,1);
  border-radius:4px;
}
.bSuperResult{
  margin-top: 5px;
  margin-left: 15px;
  width:884px;
  height:320px;
  background:rgba(255,255,255,1);
  border-radius:4px;
}
.bSuperResult h3{
  text-align: center;
}
.BsuperWatch{
  overflow: auto;
  margin-left: 5px;
  width:490px;
  height:279px;
  background:rgba(243,242,251,1);
  border-radius:4px;
}
.BsuperConclusion{
  overflow: auto;
  width:366px;
  height:279px;
  background:rgba(243,242,251,1);
  border-radius:4px;
}
.clicked{
  color: white;
  background: #06A9ED!important;
}
.bSuperType{
  background: #DAEDFB;
  text-align: center;
  line-height: 60px;
  width: 92px;
  height: 60px;
  margin: 20px 10px;
  border-radius: 4px;
  position: relative;
}
.bSuperType .icon-sanjiao{
  font-size: 12px;
  color:#06A9ED;
  position: absolute;
  left: 90px;
}
.inputTheme input[type="checkbox"]{
  vertical-align:middle;
  margin-right: 10px;
  width: 18px;
  height: 18px;
}
.inputTheme span{
   display: inline;
 }
</style>
