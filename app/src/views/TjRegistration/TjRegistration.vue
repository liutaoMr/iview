<template>
    <div>
      <head-nav></head-nav>
     <div class="TjHandle">
       <Row style="border-bottom: 1px solid #eeeeee;padding: 15px">
         <Col span="6">
           <span>条码号</span>
           <Input placeholder="条码号" style="width: 160px;margin:0 15px;"></Input>
           <Button type="primary">新增</Button>
         </Col>
         <Col span="6">
           <Checkbox size="default">只看未检人员</Checkbox>
           <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
         </Col>
         <Col span="10">
           <span>状态</span>
           <Select style="width: 60px;margin:0 30px;">
             <Option value="8080">全部</Option>
             <Option value="8080">未上传</Option>
             <Option value="8080">已上传</Option>
           </Select>
           <Button type="success">刷新</Button>
           <Icon type="ios-wifi" style="margin:0 10px 0 20px; font-size: 28px"/>
           <span>信号弱</span>
         </Col>
         <Col span="2">
           <span>共8条</span>
           <Button type="error" style="margin-left: 10px">上传</Button>
         </Col>
       </Row>
       <div class="TjTable">
         <Table border  height="200" :columns="tableConfig" :data="TjTable"></Table>
       </div>
     </div>
      <Poptip trigger="hover" :content="TjTable[0].noCheck">
        <Button>Hover</Button>
      </Poptip>
      {{TjTable[0].noCheck.map((item)=>{return item})}}
    </div>
</template>

<script>
    import HeadNav from "../nav/headNav";
    export default {
        name: "TjRegistration",
      components: {HeadNav},
      data(){
        return{
          tableConfig: [
            {
              title: '条码号',
              key: 'cardNum',
              width: 150,
              fixed: 'left'
            },
            {
              title: '姓名',
              key: 'name',
              width: 100
            },
            {
              title: '人员类别',
              key: 'peopleType',
              width: 188,
              render:(h,params)=>{
                return h('span',{
                  style:{
                    display: 'inline-block',
                    width: params.column._width*0.9+'px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }
                },params.row.peopleType.join('、'))
              }
            },
            {
              title: '未检项',
              key: 'noCheck',
              width: 550,
              render:(h, params)=>{
                return h('span',{
                  style:{
                    display: 'inline-block',
                    width: params.column._width*0.9+'px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  },
                  domProps: {
                    title: params.row.noCheck
                  }
                  },params.row.noCheck.join('、'))
              },

            },
            {
              title: '体检日期',
              key: 'TjData',
              width: 209
            },
            {
              title: '上传状态',
              key: 'UploadStatus',
              fixed: 'right',
              width: 150,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.change(params)
                      }
                    }
                  }, '修改'),
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style:{
                    },
                    on:{
                      click:()=>{
                        this.createBarcode(params)
                      }
                    }
                  }, '生成条码')
                ]);
              }
            }
          ],
          TjTable:[
            {
              cardNum:'1234567890000',
              name:'李某某',
              peopleType:['老年人','高血压','糖尿病'],
              noCheck:['身高体重','血压','查体','B超','心电图','中医体质','住院用药','家庭膳食','其他','为了出现省略号','B超','心电图','中医体质','住院用药','家庭膳食','其他','为了出现省略号'],
              TjData:'2019-10-28',
              UploadStatus:'',
            },
            {
              cardNum:'1234567890000',
              name:'李某某',
              peopleType:['老年人'],
              noCheck:['身高体重','血压','查体','B超','心电图','中医体质','住院用药','家庭膳食',],
              TjData:'2019-10-28',
              UploadStatus:'',
            }
          ],
          demo:'',
        }
      },
    }
</script>

<style scoped>
.TjHandle{
  font-size: 14px;
  font-weight: 700;
}
</style>
