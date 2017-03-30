<template>
 <div id="zichanchild">
	<div class="car_head">
        <a class="backk" @click="goback">
            <img :src="require('../../image/my/backk1.png')"/>     
        </a>
        <h2>资产管理</h2>
        <div class="menu_a"></div> 
    </div>
    <div class="zc_gl">
        <div class="zc_gl_jf">
            <div class="zc_gl_bao">
                <div class="zc_my">
                    <div class="zc_ico_ye"></div>
                    <div class="zc_my_row">我的可用余额：<span id="UserCash">{{usermarry.zccash}}</span>元</div>
                    <ol id="ol_Cash" class="zc_my_ol">
                        <li>即将可用：<span>{{usermarry.zccash}}</span>元</li>
                        <li>累计收入：<span>{{usermarry.srcash}}</span>元</li>
                        <li>累计支出：<span>{{usermarry.srpoint}}</span>元</li>
                    </ol>
                </div>
                <div class="zc_gn">
                    <ul >
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-1.png')"/>
                                <p>我要提现</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-2.png')"/>
                                <p>前去购物</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-3.png')"/>
                                <p>账户明细</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-4.png')"/>
                                <p>提现记录</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="zc_gl_jf">
            <div class="zc_gl_bao">
                <div class="zc_my">
                    <div class="zc_ico_jf"></div>
                    <div class="zc_my_row">我的可用G币：<span>{{usermarry.zccash}}</span>个</div>
                    <ol id="ol_Point" class="zc_my_ol">
                        <li>即将可用：<span>{{usermarry.zccash}}</span>个</li>
                        <li>累计收入：<span>{{usermarry.zcpoint}}</span>个</li>
                        <li>累计支出：<span>{{usermarry.zctaobaoPoint}}</span>个</li>
                    </ol>
                </div>
                <div class="zc_gn">
                    <ul>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-1.png')"/>
                                <p>我要兑出</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-5.png')"/>
                                <p>G币商城</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-3.png')"/>
                                <p>账户明细</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-4.png')"/>
                                <p>提现记录</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="zc_gl_jf">
            <div class="zc_gl_bao">
                <div class="zc_my">
                    <div class="zc_ico_jf"></div>
                    <div class="zc_my_row">我的可用G币：<span>{{usermarry.srcash}}</span>个</div>
                    <ol id="ol_Point" class="zc_my_ol">
                        <li>累计收入：<span>{{usermarry.srcash}}</span>个</li>
                        <li>累计支出：<span>{{usermarry.srcash}}</span>个</li>
                    </ol>
                </div>
                <div class="zc_gn">
                    <ul>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-1.png')"/>
                                <p>我要提取</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-3.png')"/>
                                <p>账户明细</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img :src="require('../../image/my/fl-4.png')"/>
                                <p>提现记录</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
 </div>  
</template>

<script>
import router from "../../src/router"
export default {
  name: 'zichanchild',
  data () {
    return {  
    	usermarry:{},

    }
    
  },
methods:{
    goback:function(){
        router.push("/my");

    }
},
  mounted(){
        this.$http.jsonp("http://api.goudong.com/CustomerInfoService.asmx/GetUserMoney?callback=''&SignId=2f3f5f03-0206-4ee5-9f27-eba8b2817bdb&appkey=wapkey&userID=goudong&_=1490616719131",{jsonp:"callback"}).then(response => {


                // 返回值已经解析数据了
               console.log(response.body);
                           this.usermarry=response.body.ResultList
                            //console.log(this.list);
              }, response => {
                // error callback
              });
    }
}
</script>

<style scoped>
 {
    font-family: "Droid Sans Fallback","微软雅黑";
}
.car_head {
    top: 0;
    width: 100%;
    font-size: 0.26rem;
    line-height: 1rem;
    text-align: center;
    z-index: 100000000;
    height: 1rem;
    position: fixed;
    background: #ff4500;
    color: #fff;
}
.car_head .backk {
    width: 10%;
    height: 60%;  
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    z-index: 100;
    box-sizing:border-box;padding:0.03rem;
}
.car_head .backk img{width:100%;height:100%;}
.car_head h2{font-size:0.4rem;font-weight: normal;}
.menu_a {
    width: 10%;
    height: 100%;
    background: url(../../image/my/assess-03.png) no-repeat right center;
    background-size: 100% auto;
    position: absolute;
    top: 0;
    right: 0.2rem;
    z-index: 100;
}
.zc_gl {background:#eee;
    width:100%;min-height:12rem;
    box-sizing:border-box;
    padding: 0.2rem 0.23rem;
   margin-top:1rem;
}
.zc_gl_jf {
    width: 100%;
    height:3.7rem;
    margin-bottom: 0.2rem;
    background: #fff;
}
.zc_gl_jf .zc_gl_bao {
    padding: 0.16rem 0.15rem;
    display: table;
   /* border: 1px solid #eee;*/
    position: relative;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
}
.zc_gl_jf .zc_my {
    padding-left: 0.35rem;
    position: relative;
}
.zc_gl_jf .zc_my .zc_ico_ye {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../../image/my/asset_ico3.png) no-repeat;
    background-size: 100%;
    position: absolute;
    left: 0;
    top: 0.11rem;
}
.zc_gl_jf .zc_my .zc_my_row {
    font-size: 0.3rem;
    line-height: 0.55rem;
    display: block;
    margin-left: 0.1rem;
}
.zc_gl_jf .zc_my .zc_my_row span {
    font-size: 0.4rem;
    color: #ff4500;
}
ul, ol, li {
    vertical-align: 0;
}
.zc_gl_jf .zc_my ol {
    display: table;
    margin-top: 0.1rem;
}
.zc_gl_jf .zc_my ol li {
    border: none;
    font-size: 0.26rem;
    color: #666;
    margin-left: 0.2rem;
    line-height: 0.4rem;
    display: block;
}
.zc_gl_jf .zc_gn ul {
    display: table;
    width: 100%;
    margin-top: 0.3rem;
}
.zc_gl_jf .zc_gn ul li {
    float: left;
    width: 25%;
}
a:hover, a:link, a:visited, a {
    color: inherit;
    text-decoration: none;
    -webkit-appearance: none;
    appearance: none;
}
.zc_gl_jf .zc_gn ul li img {
    width: 0.6rem;
    height: 0.6rem;
    margin: auto;
    display: block;
}
.zc_gl_jf .zc_gn ul li p {
    font-size: 0.28rem;
    text-align: center;
    margin-top: 0.1rem;
}
.zc_gl_jf .zc_my .zc_ico_jf {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../../image/my/asset_ico1.png) no-repeat;
    background-size: 100%;
    position: absolute;
    left: 0;
    top: 0.11em;
}
</style>