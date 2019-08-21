<template>
    <div class="barcodeHandle" >
      <div class="barcodeFunction">
        <Form   label-position="left" :label-width="90" style="display: inline-block; width: 87%; margin:0 10px;padding-top: 15px;position: relative" inline>
          <FormItem label="基本机构：">
            <Select v-model="searchInstitutions" style="width:121px;height:29px;">
              <Option v-for="item in institutionsList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="姓名：" :label-width="55" >
            <Input type="text" v-model="searchName" suffix="ios-search" placeholder="请输入姓名" style="width:100px;">
            </Input>
          </FormItem>
          <FormItem label="时间段：":label-width="70">
            <Date-picker  placeholder="选择日期"
                          type="daterange"
                          split-panels
                          confirm
                          v-model="searchInterval"
                          style="width: 200px" >
            </Date-picker>
          </FormItem>
          <FormItem label="类型：" :label-width="55" >
            <Select v-model="searchType" multiple style="height:29px;">
              <Option v-for="item,index in PersonnelTypeConfig" :value="item.value" :key="item.value">{{ item.value }}</Option>
            </Select>
          </FormItem>
          <FormItem :label-width="20">
            <Button size="large" type="primary" id="find" @click="search()">查询</Button>
          </FormItem>
        </Form>
        <div  class="exportBox">
          <span>共<i>8</i>条</span>
          <Button size="large" type="error" id="export">导出列表</Button>
        </div>
      </div>
      <div class="barcodeTable">
        <Table width="100%" height="150" border :columns="tableConfig" :data="tableData"></Table>
      </div>
      <handle-change v-bind:modalStatus="modalStatus" :paramsId="paramsId" @updateModalStatus="updateModalStatus"></handle-change>
    </div>
</template>
<script>
    import HandleChange from "./handleChange";
    export default {
        name: "barcodeHandle",
      components: {HandleChange},
      data () {
        return {
          //对话框弹窗状态.
          modalStatus:false,
          //条码号标识符
          paramsId:{},
          //查体机构
          institutionsList:[
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
          ],
          PersonnelTypeConfig:[
            {value:"老年人"},
            {value:"脑卒中"},
            {value:"普通人"},
            {value:"残疾人"},
            {value:"低保"},
            {value:"60-65岁"},
            {value:"高血压"},
            {value:"重精"},
            {value:"高血压高危"},
            {value:"糖尿病"},
            {value:"贫困"},
            {value:"糖尿病高危"},
            {value:"冠心病"},
            {value:"五保"},
            {value:"计生特殊人群"},
          ],
          searchInstitutions:'New York',
          searchName:'某某',
          searchInterval:['2019-08-14', '2019-08-15'],
          searchType:'[]',
          tableConfig: [
            {
              title: '条码号',
              key: 'card',
              width: 118,
              fixed: 'left'
            },
            {
              title: '姓名',
              key: 'age',
              width: 100
            },
            {
              title: '年龄',
              key: 'province',
              width: 100
            },
            {
              title: '身份证号',
              key: 'city',
              width: 160
            },
            {
              title: '人员类型',
              key: 'address',
              width: 100
            },
            {
              title: '出生日期',
              key: 'zip',
              width: 100
            },
            {
              title: '本人电话',
              key: 'zip',
              width: 100
            },
            {
              title: '联系人电话',
              key: 'zip',
              width: 100
            },
            {
              title: '联系人姓名',
              key: 'zip',
              width: 100
            },
            {
              title: '卫生室',
              key: 'zip',
              width: 100
            },
            {
              title: '体检日期',
              key: 'zip',
              width: 100
            },
            {
              title: '操作',
              key: 'action',
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
          tableData: [
            {
              card: '123456789000',
              age: 18,
              address: '计生特殊人群',
              province: 'America',
              city: '371102199610281019',
              zip: 100000
            },
            {
              card: 'Jim Green',
              age: 24,
              address: '普通人',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              card: 'Joe Black',
              age: 30,
              address: '老年人',
              city: 'Sydney',
              zip: 100000
            },
            {
              card: 'Jon Snow',
              age: 26,
              address: '高血压',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            }
          ]
        }
      },
      mounted() {

      },
      methods: {
        //父组件修改显示状态
        updateModalStatus(modalStatus) {
          this.modalStatus = modalStatus;
        },
        //修改table信息
        change(params){
          this.modalStatus = true;
          this.paramsId = params.row.card;
        },
        //生成条码功能
        createBarcode(params){

        },
        //筛选条码信息
        search(){
          //发ajax请求传三个参数。
          console.log(this.searchInstitutions+this.searchName+this.searchInterval+this.searchType)

        }
      },

    }
</script>
<style scoped>
  .ivu-table td{
    height: 40px;
  }
  .ivu-form-item{
    margin-bottom: 12px;
  }
.barcodeHandle{
  width: 98%;
  background: white;
  margin-top:5px;
  margin-left: 1%;
}
.barcodeFunction{
  border-bottom: 1px solid #eeeeee
}
  #find{
    position: relative;
    left: 10px;
    line-height: 17px;
    width:60px;
    height:29px;
    margin-right: 10px;
    border-radius:4px;
  }
  .barcodeTable{
    float: left;
    background: white;
    margin-top:5px;
  }
  .exportBox{
   display: inline-block;
    margin-left: 20px;
    position: relative;
    top: 10px;
  }
  #export{
    width:84px;
    height:29px;
    margin-left: 10px;
    line-height: 17px;
    border-radius:4px;
  }

</style>
