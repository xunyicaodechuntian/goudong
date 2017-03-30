<template>
 <div id="gerenziliao">
	<div class="car_head">
	    <a class="backk" @click="goback">
	        <img :src="require('../../image/my/backk1.png')"/>     
	    </a>
	    <h2>个人资料</h2>
	    <div class="menu_a"><img :src="require('../../image/my/assess-03.png')"/></div>
	</div>
	<!-- 头像 -->
	<div id="oneself_head">
	    <div class="head_ico"><img :src="require('../../image/my/login-ico1.png')"/></div>
	    <p>头像</p>
	    <div class="head_pic"></div>
	</div>
	<div class="set_line"></div>
	<!-- 个人信息 -->
	<a href="" id="a1">
	    <div class="oneself_news">
	        <p>会员ID</p>
	        <span id="sp_CustomerID">2215</span>
	    </div>
	</a>
	 <a href="" id="a1">
	    <div class="oneself_news">
	        <p>会员名</p>
	        <span id="sp_name">18800185504</span>
	    </div>
	</a>
	<a href="" id="a1">
	    <div class="oneself_news">
	        <p>性别</p>
	        <span id="sp_InviteGender">女</span>
	        <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>
	    </div>
	</a>
	<a href="" id="a1">
	    <div class="oneself_news">
	        <p>邮箱</p>
	        <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>
	    </div>
	</a>
	<div class="set_line"></div> 
	<!-- 功能 -->
	<a href="" class="oneself_news">
	    <div class="oneself_ico">
	        <img :src="require('../../image/my/mine-02.png')">
	    </div>
	    <p class="left-m ">收货地址</p>
	    <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>   
	</a>
	 <a href="" class="oneself_news">
	    <div class="oneself_ico">
	        <img :src="require('../../image/my/mine-03.png')">
	    </div>
	    <p class="left-m ">账号绑定</p>
	    <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>   
	</a>
	<a href="" class="oneself_news">
	    <div class="oneself_ico">
	        <img :src="require('../../image/my/mine-04.png')">
	    </div>
	    <p class="left-m ">安全中心</p>
	    <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>   
	</a>
	<a href="" class="oneself_news">
	    <div class="oneself_ico">
	        <img :src="require('../../image/my/mine-05.png')">
	    </div>
	    <p class="left-m ">提现账号</p>
	    <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>   
	</a>
	<a href="" class="oneself_news">
	    <div class="oneself_ico">
	        <img :src="require('../../image/my/mine-06.png')">
	    </div>
	    <p class="left-m ">我的等级</p>
	    <span id="sp_CustomerCatID">普通会员</span>
	    <div class="oneself_arrow"><img :src="require('../../image/my/one-arrow.png')"></div>   
	</a> 
	<!-- 按钮 -->
	<a @click="alertA"><input type="button" value="退出当前账号" class="apply_button"/></a>
    <div id="tishikuang" v-if="shou=='true'">
        <h4 class="tishi_h4">提示</h4>
        <p class="tishi_p">你确定要退出吗?</p>
        <ul class="tishi_ul">
            <li class="tishi_leftli" @click="sure">确定</li>
            <li class="tishi_rightli" @click="no">取消</li>
        </ul>
    </div>
    <div id="zhezhaoceng" v-if="zhezhao=='true'"></div>
 </div>

</template>

<script>
import router from "../../src/router";
// import { MessageBox } from 'mint-ui';
export default {
  name: 'gerenziliao',
  data () {
    return {  
    	shou:'false',
        zhezhao:'false',
    }
  },
  methods:{
    goback:function(){
        router.push("/my");
    },
    sure:function(){
        router.push("/my");
    },
    no:function(){
       this.shou='false';
       this.zhezhao='false';
    },
  alertA:function(){
    this.shou='true';
    this.zhezhao='true';
    console.log(111);   
    //     MessageBox({
    //       title: '提示',
    //       message: '确定执行此操作?',
    //       showCancelButton: true
    //     });
   }
  }
}
</script>

<style scoped>
*{padding:0;margin:0}
a{ text-decoration:none;}
* {
    font-family: "Droid Sans Fallback","微软雅黑";
}
#zhezhaoceng{width:100%;height:100%;background:rgba(225,225,225,0.4);z-index:2;position:fixed;top:0;left:0;}

#tishikuang{width:70%;height:2.5rem;background:#fff;position:fixed;top:5rem;left:1.1rem;border-radius:2%;z-index:3;}
#tishikuang .tishi_h4{font-size:0.3rem;text-align:center;margin-top:0.3rem;}
#tishikuang .tishi_p{font-size:0.3rem;margin-top:0.2rem;text-align:center;}
#tishikuang .tishi_ul{display:flex;}
#tishikuang .tishi_ul li{flex:1;text-align:center;font-size:0.3rem;margin-top:0.3rem;}


.mint-msgbox-title{font-size:61px;}
.mint-msgbox-message{font-size:30px;}
#gerenziliao{width:100%;min-height:17rem;}

.car_head {
    top: 0;
    width: 100%;
    font-size: 0.26rem;
  /*  line-height: 3rem;*/
    text-align: center;
   /* z-index: 100000000;*/
    height: 1rem;
    /*position: fixed;*/
    background: #ff4500;
    color: #fff;
    padding-top:0.3rem;
}
.car_head .backk {
    width: 8%;
    height: 4%;  
    position: absolute;
    top: 0.35rem;
    left: 0.3rem;
    z-index: 100;
    /*box-sizing:border-box;padding:0.5rem;*/
}

.car_head .backk img{width:100%;height:100%;}
.car_head h2{font-size:0.4rem;font-weight: normal;}
.menu_a {
    width: 10%;
    height: 6%;
   /* background: url(../../image/my/assess-03.png) no-repeat right center;
    background-size: 100% auto;*/
    position: absolute;
    top: 0.3rem;
    right: 0.2rem;
    z-index: 100;
}
.menu_a img{width:100%;height:100%;}
#oneself_head {
    width: 100%;
    height: 1.2rem;
    line-height:1.2rem;
    position: relative;
}
#oneself_head .head_ico {
    width: 8%;
    height:0.4rem;
    position: absolute;
    /*background-size: 0.35rem 0.35rem;*/
    /*top:0.3rem;*/
    left:0.3rem;
}
 #oneself_head .head_ico img{width:100%;height:100%;}
 #oneself_head p {
    font-size:0.3rem;
    color: #333;
    margin-left: 1rem;
    float: left;
}
.head_pic {
    width:1rem;
    height: 1rem;
    background:red;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    border-radius: 0.1rem;
}
.set_line {
    width: 100%;
    height: 0.2rem;
    border-top: 1px solid #F3F3F3;
    border-bottom: 1px solid #F3F3F3;
    background: #f7f7f7;
}
a:hover, a:link, a:visited, a {
    color: inherit;
    text-decoration: none;
    -webkit-appearance: none;
}
.oneself_news {
    display: block;
    width: 96%;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #E9E9E9;
    margin: 0 auto;
    position: relative;
}
.oneself_news p {
    font-size: 0.35rem;
    color: #333;
    float: left;
}
.oneself_news span {
    font-size: 0.32rem;
    color: #999;
    margin-right:1rem;
    float: right;
}
.oneself_news .oneself_arrow {
    width: 0.5rem;
    height: 0.5rem;
   /* background: url(../image/my/one-arrow.png) no-repeat;
    /*background-size: 0.32rem 0.32rem;*/
   position: absolute;
    right: 0.1rem;
    top: 0.15rem;
}
.oneself_news .oneself_arrow img{width:100%;height:100%;}
.oneself_news .oneself_ico {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    position: absolute;
    top: 0.1rem;
}
.oneself_news .oneself_ico img{width:100%;height:100%;}
.left-m {
    margin-left: 1rem;
    display: block;
}
.oneself_news span {
    font-size: 0.4rem;
    color: #999;
    margin-right: 0.6rem;
    float: right;
}
.apply_button {
    width: 90%;
    height: 1rem;
    display: block;
    background: #ff4500;
    border: none;
    margin-bottom: 0.2rem;
    border-radius: 0.2rem;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    font-size:0.5rem;
    color: #fff !important;
    font-family: "Droid Sans Fallback";
    text-align: center;
    line-height: 0.6rem;
}
</style>