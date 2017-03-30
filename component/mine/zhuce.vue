<script src="jquery-1.12.4.js"></script>
<template>
    
    <div id="zhuce">
        <div class="headerImg"><img :src="require('../../image/my/invite_register_bg.png')"/></div>
        <div class="zcname">
          <div class="login_ico"><img :src="require('../../image/my/register-ico1.png')"/></div>
          <input class="input-one" type="text" placeholder="请输入用户名" v-model="name">
        </div>
        <div class="zcmima">
          <div class="login_ico"><img :src="require('../../image/my/register-ico2.png')"/></div>
          <input class="input-two" type="text" placeholder="请输入密码" v-model="mima">
        </div>
         <input id="input-btn" class="apply_button" type="submit" value="注册" @click="zhuce" >
      <div id="tishi" v-if="shou=='true'">
        <h3 class="tishih3">提示</h3>
        <p class="tiship1">用户名重复，请重新输入！</p>
        <p class="tiship2" @click="yincang">确定</p>
      </div>
    </div>
    
</template>
<script>
import router from '../../src/router'
export default {
  name: 'zhuce',
  data () {
    return {  
      name:'',
      mima:'',
      shou:'false',
    }
  },
  methods:{
    yincang:function(){
      this.shou="flase";
    },
    // zhuce:function(){
    //     router.push("/login")//由路由到登录的路径

    // },
    zhuce:function(){
     // console.log("222")
     var re= /^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
      //console.log( re.test(this.name) );
        if(!re.test(this.name)){
            this.shou="true";
           // alert("用户名填写错误！");
        }else{
         console.log("222")
        this.$http.post("http://localhost/php/zhuce.php",{name:this.name,mima:this.mima}).then(res=>{
         //console.log(res.body);
         if(res.body==1){
             router.push("/login")
                //console.log("@222")
         }else{
               this.shou="true";
              // console.log("222")
         }
      
            },error=>{
              //console.log(1111)
  
            })
    }
      
  }
  
}

}
</script>

<style socped>
#tishi{width:70%;height:3rem;position:fixed;top:5.5rem;left:1rem;background:#eee;border-radius:3%;
border:1px solid #eee;}
.tishih3{font-size:0.4rem;text-align:center;margin-top:0.4rem;}
.tiship1{font-size:0.3rem;text-align:center;margin-top:0.3rem;border-bottom:1px solid red;box-sizing:border-box;padding-bottom:0.3rem;}
.tiship2{font-size:0.3rem;text-align:center;margin-top:0.2rem;}



*{font-family: "Droid Sans Fallback","微软雅黑";font-size:0.3rem;}
#zhuce{width:100%;height:3rem;}
.headerImg{width:100%;height:3.2rem;}
.headerImg img{width:100%;height:100%;}
.zcname{width: 100%;
    height: 1rem;
    border-bottom: 0.02rem solid #F3F3F3;
    position: relative;
    line-height: 1rem;}
.login_ico {
    width: 0.35rem;
    height: 0.35rem;
    position: absolute;
    left: 0.4rem;
    top: 0.05rem;
    float: left;
}
.login_ico img{width:100%;height:100%;}
.zcname .input-one{float: right;
    width: 4rem;
    height: 0.4rem;
    border: none;
    position: absolute;
    right: 2.3rem;
    top: 0.3rem;
    font-size: 0.3rem;
    font-family: "Droid Sans Fallback";
    color: #000;}
.zcmima{width: 100%;
    height: 1rem;
    border-bottom: 0.02rem solid #F3F3F3;
    position: relative;
    line-height: 1rem;}

.zcmima .input-two{
  float: right;
    width: 4rem;
    height: 0.4rem;
    border: none;
    position: absolute;
    right: 2.3rem;
    top: 0.3rem;
    font-size: 0.3rem;
    font-family: "Droid Sans Fallback";
    color: #000;

}
.apply_button {
    width: 6.54rem;
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

/*.zhucep{font-size:0.3rem;margin-top:0.3rem;margin-left:0.2rem;}
.zhucep input{width:60%;height:0.6rem;border:1px solid #000;}*/
/*#input_btn{width: 6.54rem;
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
    line-height: 0.8rem;}
*/
</style>
