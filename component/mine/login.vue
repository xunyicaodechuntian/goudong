
<template>
    <div id="login">
      <div class="login_number">
        <div class="login_ico"><img :src="require('../../image/my/login-ico1.png')"/></div>
        <p>账号</p>
        <input type="text" placeholder="用户名/邮箱/手机" id="txt_username" v-model="name"/>
      </div>
      <div class="login_number">
        <div  class="login_ico"><img :src="require('../../image/my/login-ico2.png')"/></div>
        <p>密码</p>
        <input type="text" placeholder="6-19位密码" id="user_password" v-model="mima"/>
       
       <!--  <div id="login_on"></div>
        <div id="login_off"></div> -->
      </div>
      <div id="password">
        <div id="password_pic" onmousedown="yes()"></div>
        <!-- <div id="password_pic" onmousedown="no()"></div> -->
        <p>记住密码</p>
        <a href="miss_password.vue" class="password_a1">忘记密码？</a>
      </div>
      <input type="button" value="登录" class="apply_button" @click="onlogin">
      <div id="register_botton">      
        <p>没有账号？</p>
        <a class="no_register" @click="onzhuce">立即注册</a>
      </div>
      <div id="other_number"> 
        <div class="other_line"></div>
        <span>其它账号登录</span>
        <div class="other_line line2"></div>
      </div>
      <div id="other_ico">
        <a href=""><img :src="require('../../image/my/login-tb.png')"/></a>
        <a href=""><img :src="require('../../image/my/login-qq.png')"/></a>
      </div> 

      

    </div>
</template>

<script>

import router from "../../src/router";
import Cookie from "../../src/cookie";
export default {
  name: 'login',
  data () {
    return {  
      name:'',
      mima:''
    }
  },
  methods:{
  	
    onzhuce:function(){
        router.push("/zhuce")

    },
   onlogin:function(){
    //  var name1=document.getElementById('txt_username');
    // var mima1=document.getElementById('user_password');
    var re= /^[a-zA-Z][a-zA-Z0-9]{5,19}$/;

        console.log( re.test(this.name) );
        if(!re.test(this.name)){
            alert("用户名填写错误！");
        }else{
         console.log("222")
        this.$http.post("http://localhost/php/login.php",{name:this.name,mima:this.mima}).then(res=>{
         console.log(JSON.parse(res.body));
         var data=JSON.parse(res.body)
        
         if(data.length==0){
               console.log("失败")
         }else{
              Cookie.setCookie("name",data[0].name,10);
               router.go(-1);
         }
      
            },error=>{
              console.log(1111)
  
            })
        }
   
    }

  }
  
  
}
</script>

<style socped>
*{font-family: "Droid Sans Fallback","微软雅黑";}
.login_number{width:100%;height:1rem;margin-top:5%;border-bottom: 0.02rem solid #F3F3F3;
    position: relative;
    line-height: 1rem;}
.login_number .login_ico {
    width: 0.7rem;
    height: 0.7rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    float: left;
}
 .login_number .login_ico img{width: 80%;
    height: 80%;}
.login_number p {
    font-size: 0.35rem;
    color: #000;
    display: inline;
    margin-left: 0.78rem;
}
.login_number input {
    float: right;
    width: 4.8rem;
    height: 0.4rem;
    border: none;
    position: absolute;
    right: 0.7rem;
    top: 0.3rem;
    font-size: 0.3rem;
    font-family: "Droid Sans Fallback";
    color: #000;
}
#login_on {
    width: 0.6rem;
    height: 0.6rem;
    background: url(../../image/my/login-ico3.png) no-repeat;
    background-size: 0.5rem 0.5rem;
    float: right;
    position: absolute;
    right: 0.1rem;
    top: 0.25rem;
}
#password {
    width: 100%;
    height: 0.4rem;
    margin: 0.5rem auto 0.5rem;
    line-height: 0.34rem;
    left:0.2rem;
    top:0.3rem;
}
#password #password_pic {
    width: 0.3rem;
    height: 0.3rem;
    background: url(../../image/my/login-gou.png) no-repeat;
    background-size: 0.3rem 0.3rem;
    float:left;
    margin-left:0.2rem;
}
#password p {

    font-size: 0.3rem;
    color: #999;
  /*  display: inline;*/
    margin-left: 0.4rem;
    float: left;
}
#password a {
    color: #5daf36;
}
.password_a1 {
    font-size: 0.3rem;
    display: block;
    float: right;
    margin-right:0.3rem;
}
.apply_button {
    width: 7rem;
    height: 0.8rem;
    display: block;
    background: #ff4500;
    border: none;
    margin-bottom: 0.2rem;
    border-radius: 0.05rem;
    margin-top: 0.4rem;
    margin-left: 0.23rem;
    font-size: 0.35rem;
    color: #fff !important;
    font-family: "Droid Sans Fallback";
    text-align: center;
    line-height: 0.8rem;
}
#register_botton {
    width: 40%;
    height: 0.6rem;
    margin: 0.8rem auto 0;
    line-height: 0.6rem;
}
#register_botton p {
    font-size: 0.3rem;
    color: #999;
    float: left;
    display: block;
}
#register_botton .no_register {
    font-size: 0.28rem;
    color: #ff4500;
    display: block;
    width: 45%;
    height: 0.58rem;
    border: 1px solid #ff4500;
    border-radius: 0.05rem;
    float: right;
    text-align: center;
    line-height: 0.58rem;
}
#other_number {
    width:90%;
    height: 0.22rem;
    margin: 1.4rem auto 0.7rem;
    text-align: center;
    line-height: 0.22rem;
}
#other_number .other_line {
    width:33%;
    height: 0.02rem;
    background: #999;
    float: left;
    margin-top: 0.1rem;
}
#other_number span {
    font-size: 0.3rem;
    color: #999;
}
#other_number .line2 {
    float: right;
}
#other_ico {
    width: 90%;
    height: 1rem;
    margin: 0 auto;
}
#other_ico a {
    display: block;
    width: 1rem;
    height: 1rem;
    float: left;
    margin-right: 0.5rem;
}
#other_ico a img {
    width: 100%;
    height: 100%;
}

</style>
