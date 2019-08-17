<template>
  <div class="loginBox">
    <div  class="login">
      <h1>登录</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="70">
        <FormItem prop="user" >
          <Input type="text" v-model="formInline.user" placeholder="用户名" style="width:250px;margin-left: 10px;">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码" style="width:250px;margin-left: 10px;">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem >
          <Button type="primary" id="login" size="large" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div >
    <div class="copyright">
      <p>坤昱（山东）健康科技有限公司</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: '',
          teamId:'',
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6个字符', trigger: 'blur' }
          ],
          teamId: [
            { required: true, message: '请输入团队名', trigger: 'change' }
          ],
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.dispatch('Login', this.formInline).then(() => {
              this.$router.push({ path: '/home' })
            }).catch((err) => {
              console.log('登录接口错误！', err)
            })
          } else {
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
.loginBox{
  position: relative;
  width: 100%;
  height: 768px;
  background-image: url("../../../public/images/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
  .login{
    width:420px;
    height:330px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 0px rgba(57,57,57,0.26);
    border-radius:10px;
    position: absolute;
    left: 805px;
    top: 123px;
    background: white;
  }
.login h1{
  color: white;
  height: 76px;
  line-height: 76px;
  font-weight: 600;
  font-size: 24px;
 text-align: center;margin-bottom: 40px;
  background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  border-radius:10px 10px 0px 0px;
}
  #login{
    margin: 20px 7px 20px;
    width: 254px;height: 48px;
    border-radius:28px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  }
  .copyright {
    width: 100%;
    color: black;
    text-align: center;
    position: absolute;
    bottom: 0px;
    font-size: 28px;
  }
</style>
