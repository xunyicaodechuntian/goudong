<template>
  <div id="home">
  	
		<div class="header">
			<span class="logo"></span>
			<div class="search">
				<div class="search_img"></div>
				<input type="text" class="value" value="搜索购东商品，购物后拿返利" onfocus="this.value=''"/>
				
			</div>
			<div class="iconfont"></div>	
		</div>
 		<div class="content">
	 		<div class="app" v-if="isshow">
	 			<span class="close" @click="showClick"></span>
	 			<div class="app_con">
	 				<span class="app_logo"></span>
	 				<span style="line-height: 0.6rem;">点击下载购东客户端，随时随地购！</span>
	 			</div>
	 		</div>
	<swipe class="my-swipe" :showIndicators="true">
	  <swipe-item class="slide1">
	  	<img src="http://www.goudong.com//Upload/e03f6c4f-0de2-4bad-81ef-9bfe8eca4335.jpg" />
	  	</swipe-item>
	  <swipe-item class="slide2">
	  	<img src="http://www.goudong.com//Upload/2ac565d3-a0fe-405d-b400-3abe255f7509.jpg" />
	  	
	  </swipe-item>

	</swipe>

  </div>
	 		<div class="nav">
	 			<a>
	 					<img :src="require('../component/home-img/pic6.png')" />
	 					<p>超高返利</p>
	 			</a>
	 				
	 			<a>
	 					<img :src="require('../component/home-img/pic4.png')" />
	 					<p>9.9包邮</p>
	 			</a>
	 			<a>
	 					<img :src="require('../component/home-img/pic2.png')" />
	 					<p>淘宝精选</p>
	 			</a>
	 				
	 			<a @click="pinpaiClick">
	 					<img :src="require('../component/home-img/pic3.png')" />
	 					<p>品牌特卖</p>
	 			</a>
	 			<a>
	 					<img :src="require('../component/home-img/pic10.png')" />
	 					<p>领券抵限购</p>
	 			</a>
	 				
	 			<a>
	 					<img :src="require('../component/home-img/pic7.png')" />
	 					<p>商城返利</p>
	 			</a>
	 			<a>
	 					<img :src="require('../component/home-img/pic1.png')" />
	 					<p>签到领好礼</p>
	 			</a>
	 			<a>
	 					<img :src="require('../component/home-img/pic8.png')" />
	 					<p>邀请好友</p>
	 			</a>
	 		</div>
	 		
	 		<div class="content_text">
	 			<ul v-infinite-scroll="loadMore" 
	 				 infinite-scroll-disabled="loading" infinite-scroll-distance="5" >
	 				<li v-for="(data,index) in datalist" >
	 					<div class="content_li" @click="contentClick(data.CommissionProductUrl)">
		 					<img :src="data.CommissionProductImg"/>
		 					<h3>{{data.CommissionProductName}}</h3>
		 					<div class="price">
		 						<p>￥{{data.CommissionProductSalesPrice}}</p>
		 						<span>￥{{data.CommissionProductMarkPrice}}</span>
		 						<b>|</b>
		 						<s>{{data.CommissionProductZk}}折</s>
		 					</div>
		 					<div class="fan">
		 						<i>返</i>
		 						<span class="fanli">{{data.CommissionProductPoint}}</span>
		 						<p class="daoshou">
		 							<i></i>
		 							<strong>
		 								到手价
		 								<span>{{data.daoshoujia}}</span>
		 							</strong>
		 						</p>
		 					</div>
	 					</div>
	 					<div class="shoucang" >
	 						<span @click="shoucangClick">收藏</span>
	 						<a href="javascript:void(0)" @click="contentClick">去淘宝</a>
	 					</div>
	 						 					
	 				</li>
	 			</ul>
				<div class="shadebox" v-if="shadeshow">
				 			<div class="shade">
				 				<div class="shade_close" @click="shadeClose">
				 					<img :src="require('../component/home-img/hint33.png')" />
				 				</div>
				 				<h2>购东</h2>
				 				<p>购东正在带您进入“淘宝”,购物拿返利</p>
				 				<h6>温馨提示：使用天猫、淘宝购物券或红包购物无返利</h6>
				 				<div class="shade_tab">
				 					<a class="shade_login">去登录</a>
				 					<a  @click="handleChangepage(pageurl)">不要返利去看看</a>
				 				</div>
				 			</div>
				 </div>

	 		</div>
	 		
	 		
 		</div>
 		
 		
 
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import Vue from "vue";

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import router from '../src/router';


export default {
  name: 'home',
  data () {

    return {  
    	isshow:true,
    	datalist:[],
    	shadeshow:false,
    	pageIndex:1,
    	loading:false,
    	
    	pageurl:""
    }

  }, 
  components:{
  		"swipe":Swipe,
  		"swipe-item":SwipeItem
  },
  methods:{
  	handleChangepage(id){
  		console.log(id);


			  mui.openWindow({
			    url: 'info.html?id='+id, 
			    id:'info'
			  });
  	},
  	
  	
  	showClick:function(){
  	this.isshow=false
  	
  	},
  	
  	shoucangClick:function(){
  		console.log("收藏");
  	},
  	
  	contentClick:function(url){
  		console.log("li");
  		this.shadeshow=true;
  		this.pageurl = url;
  	},
  	shadeClose:function(){
  		this.shadeshow=false;
  	},
  	loadMore() {
					
				  this.loading = true;

				 this.getData(this.pageIndex);
		},
		getData(data){

				  	this.$http.jsonp(`http://api.goudong.com/ProductService.asmx/ProductByColumn?callback=5657576&productcatName=%E9%A6%96%E9%A1%B5&strwhere=&orderBy=&pageIndex=${data}&pageSize=20&appkey=wapkey&userID=goudong&category=&by=&_=1490422150053`).then((res)=>res.json()).then(result=>{
				
										this.loading = false;
				  					for(var i=0; i<result.ResultList.length;i++){ 						
				  										result.ResultList[i].CommissionProductImg="http://www.goudong.com/"+result.ResultList[i].CommissionProductImg;
				  									result.ResultList[i].CommissionProductPoint=result.ResultList[i].CommissionProductPoint/100;	
				  					result.ResultList[i].daoshoujia=Math.round((result.ResultList[i].CommissionProductSalesPrice-result.ResultList[i].CommissionProductPoint)*100)/100;
											
				  										
				  					}

				  					
				  					this.datalist=[...this.datalist,...result.ResultList];

				  					
				  				})
			this.pageIndex++;
				  	
				  },
				  pinpaiClick:()=>{
  					router.push("pinpai");
				  		
				  }
				  	
  	
  },
  
  
  
  mounted(){

  }
}
</script>

  

<style scoped>
	img{
		display: block;
		outline: none;
		border: 0;
	}
		.my-swipe {
	  height: 3.2rem;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	}
	.my-swipe img{
		width: 100%;
	}

	
	
	
	
*{
	padding: 0;
	margin: 0;
}
ul,ol,dl{
	list-style: none;
}

a{
	text-decoration: none;
	color: #999;
}



	div#home{

	background: #f7f7f7;
		width: 100%;	
		overflow: auto;
		margin: 0;
	}
	
	.header{
		height:0.92rem;
		background:#ff4500;
		position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    left:0;
    margin: 0;
    border:none;
	}
	.logo{
		background:url("home-img/goudong.png");
		width: 0.92rem;
		height: 0.92rem;
		background-size: 0.92rem 0.92rem;
		display: block;
		margin-left: 0.2rem;
		float: left;
	}
	.search{
		width: 5rem;
    height: 0.6rem;
    background: #d82e0d;
    border-radius: 5px;
    margin-left: 0.4rem;
    margin-top: 0.15rem;
    float: left;

	}
	.search_img{
		width: 0.3rem;
    height: 0.6rem;
    background: url(home-img/search.png) no-repeat center center;
    background-size: 0.3rem 0.3rem;
    margin-left: 0.2rem;
    float: left;
	}
	.search input{
		width: 4.1rem;
    float: left;
    height: 0.6rem;
    background: none;
    border: none;
    font-size: 0.3rem;
    color: #fff;
    margin-left: 0.1rem;
    color: #fff;
	}
	.iconfont{
		width: 0.55rem;
    height: 0.55rem;
    background: url(home-img/message.png) no-repeat;
    background-size: 100% auto;
    margin-left: 0.17rem;
    margin-top: 0.2rem;
    float: left;
	}
	.content{
    margin-top: 0.92rem;
		
	}
	.app{
	background: rgba(0,0,0,0.5);
    height: 0.6rem;

    color: #fff;
    font-size: 0.35rem;
	}
	.close{
		width: 0.6rem;
    height: 100%;
    float: left;
    background: url(home-img/invite-cc.png) no-repeat center center;
    background-size: auto 60%;
	}
	.app_con{
		height: 100%;
	}
	.app_logo{
		width: .6rem;
    height: 100%;
    float: left;
    background: url(home-img/about-logo.png) no-repeat left center;
    background-size: auto 90%;
	}
	.nav{
		background: #fff;
    margin-top: 0.1rem;
    padding-bottom: 0.2rem;
		overflow: hidden;
    width: 100%;

	}
	.nav a{
		display: block;
		width: 25%;
		float: left;
		text-align: center;
    margin-top: 0.1em;
    box-sizing: border-box;
	}
	.nav img{
		width: 0.74rem;
    height: 0.74rem;
  
	}
	.nav p{
		font-size: 0.23rem;
    color: #444;
	}
	.content_text{
	height: 4.8rem;

}
	.content_text ul{
		display: table;
		width:100%;
		
	}
	.content_text ul li{
		width: 50%;
		box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 2%;
    float: left;
    background: #fff;
    padding-bottom: 0.1rem;
		padding:0 0.05rem;
    min-height: 5rem;
	}
	.content_text ul li img{
		width:3.65rem;
		height:3.65rem;
	}
	.content_text h3{
		font-size: 0.24rem;
    font-weight: normal;
    margin-top: 0.02rem;
    margin-bottom: 0rem;
    padding: 0 0.1rem;
    display: block;
    width: 100%;
    box-sizing: border-box;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
	}
	.price{
		font-size: 0.24rem;
		padding: 0.1rem 0.2rem 0 0.1rem 
	}
	.price p{
		display: inline-block;
		color: #ff4500;
		font-size: 0.36rem;
	}

	.price span,.price b,.price s{
		font-size: 0.24rem;
    color: #999;
    font-style: normal;
    margin-left: 0.1rem;
    text-decoration: none;
	}
	.price span{
    text-decoration: line-through;
	}
	.fan{
		color: #000;
    line-height: 0.36rem;
    font-size: 0.33rem;
    font-weight: bold;
    padding: 0 0 0 0.2rem; 
    margin-bottom: 0.16rem;
    margin-top: 0.08rem;
    height: 0.36rem;
	}
	.fan i{
		background: #ff4500;
    color: #fff;
    border-radius: 0.04rem;
    float: left;
    width: auto;
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.24rem;
    font-weight: normal;
    text-align: center;
    font-style: normal;
   	margin-top: 0.06rem; 
	}
	span.fanli{
		padding: 0 0 0 0.1rem;
    float: left;
    font-weight: normal;
    line-height: 0.28rem;
    font-size: 0.24rem;
   	margin-top: 0.06rem; 
    
	}
	.daoshou{
		float: left;
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #ff4500;
    position: relative;
    margin-left:0.08rem;

    
	}
	.daoshou i{
		float: left;
    color: #ff4500;
    font-weight: normal;
    height: 0.28rem;
    width: 0.1rem;
    background: url(home-img/arrow1.png) no-repeat left center;
    /*margin-left: -5px;*/
    background-size: auto 100%;
   	margin-top: 0.06rem; 
    
	}
	.daoshou strong{
		float: left;
    color: #ff4500;
    height: 0.28rem;
    line-height: 0.28rem;
    border: 0.01rem solid #ff4500;
    /* padding: 0 0.05rem; */
    font-weight: normal;
    font-size: 0.2rem;
    color: #ff4500;
    border-left: 0;
    box-sizing: border-box;
   	margin-top: 0.06rem; 
    
	}
	.shoucang{
    padding: 0 0.2rem;
		overflow: hidden;
		font-size: 0.28rem;
	}
	.shoucang span{
		color: #ff4500;
	}
	.shoucang a{
		float: right;
	}
	.shadebox{
		background: rgba(0,0,0,0.1);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999999;
	}
	.shade{
		background: #fff;
		width:6.3rem;
		height: 3.9rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -3.15rem;
		margin-top: -1.95rem;
		border-radius:0.1rem ;

	}
	.shade_close{
		position: absolute;
		right: 0.05rem;
		top: 0.05rem;
	}
	.shade_close img{
		width: 0.5rem !important;
		height: 0.5rem !important;
	}
	.shadebox h2{
		color: #FF4500;
		font-size: 0.5rem;
		width: 100%;
		text-align: center;
		line-height: 1rem;
		margin: 0.1rem 0;
	}
	.shadebox p{
		font-size: 0.25rem;
		color: orange;
		width: 100%;
		text-align: center;
		line-height: 0.5rem;
		margin-top: 0.1rem;
	}
	.shadebox h6{
		font-weight:100 ;
		width: 100%;
		text-align: center;
		line-height: 0.6rem;
		font-size: 0.25rem;
		color: #666;
		margin-top: 0.2rem;
		
	}
	.shadebox .shade_tab{
		width: 100%;
		border-top:1px solid #ccc;
		margin-top: 0.4rem;
	}
	.shade_tab a{
		width: 50%;
		box-sizing: border-box;
		display: block;
		float: left;
		line-height: 0.9rem;
		font-size: 0.3rem;
		color: #999;
		text-align: center;
	}
	.shade_tab .shade_login{
		border-right: 1px solid #ccc;
		color: #FF4500;
	}
</style>
