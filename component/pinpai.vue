<template>
	<div id="pinpai">
		<div class="pp_header">
			<div class="pp_top">
				<span></span>
				<h2>品牌特卖</h2>
				<i></i>				
			</div>				
		
		<div class="pp_nav">
			<ul>
				<li @click="navClick(index)" :class="currentIndex==index?'active':''" v-for="(data,index) in navlist" key="{{index}}">{{data}}</li>
			</ul>
		</div>
	</div>
	
	<div class="pp_content">
		<ul class="pp_con1"  v-infinite-scroll="loadMore" 
	 				 infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<li  v-for="(data,index) in datalist" key="{{index}}" v-if="currentIndex==0" @click="ppClick(data.CommissionBrandID)">
				<dl>
					<dd>
						<img :src="data.CommissionBrandProductImg" />
					</dd>
					<dt>
						<div class="pp_con_box">
							<img :src="data.CommissionBrandImg" />
							<h4>{{data.CommissionBrandName}}</h4>
							<span>{{data.CommissionBrandDiscount}}折</span>
							<p>最高返利： <span>{{data.BrandHightestMoney}} 元</span></p>
						</div>
					</dt>
				</dl>
			</li>
			
			<li class="pp_con_li2" v-for="(data,index) in contentlist" key="{{data.CommissionProductID}}" v-if="currentIndex!=0" @click="ppClick(data.CommissionBrandID)">

	 					<div class="content_li" >
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
	 						<span>收藏</span>
	 						<a href="javascript:void(0)" >去淘宝</a>
	 					</div>
	 					
	 				</li>
			
			<div class="pp_tip" v-if="tipshow">
				<p>加载到底部了...</p>
			</div>
		</ul>
		
		
		
	</div>
</div>
</template>

<script>
	
import Vue from "vue";

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import router from '../src/router';

	export default ({
		name:"pinpai",
		data(){
			return{
				navlist:["全部","女装","男装","内衣","鞋品","美妆","母婴","居家","家纺","食品","箱包","数码","家电","配饰","文体"],
				currentIndex:0,
				datalist:[],
				loading:false,
				pageIndex:1,
				tipshow:false,
				contentlist:[],
				contentName:'',
				index:0

				
			}
		},
		methods:{
			ppClick:(goodID)=>{
				router.push("ppdetail/"+goodID);
				
			},
			
			navClick:function(index){
				this.pageIndex=1;
				this.index=index;
				this.loading=false;
				this.contentName=this.navlist[index]
				this.contentlist=[];
				this.tipshow=false;
				this.currentIndex=index;
				console.log(this.navlist[index])
					this.getContent(this.contentName,this.pageIndex)
				

			},
			loadMore() {

					
				  this.loading = true;
					if(this.index==0){
				 		this.getData(this.pageIndex);
					
					}else if(this.index!=0){
					this.getContent(this.contentName,this.pageIndex)
					
					
					}
					
					


			},
			
			getData:function(index){

				
			this.$http.jsonp(`http://api.goudong.com/ProductService.asmx/PinpaiProductList?callback=''&pageIndex=${index}&pageSize=20&appkey=wapkey&userID=goudong&orderBy=&CtgName=&_=1490663839312`,{jsonp:"callback"}).then((res)=>res.json()).then((result)=>{

			
					
				this.loading=false;
				for(var i=0; i<result.ResultList.length;i++){ 						
				  										result.ResultList[i].CommissionBrandImg="http://www.goudong.com/"+result.ResultList[i].CommissionBrandImg;
				
				
				result.ResultList[i].CommissionBrandProductImg="http://www.goudong.com/"+result.ResultList[i].CommissionBrandProductImg;
				result.ResultList[i].BrandHightestMoney=Math.round(result.ResultList[i].BrandHightestMoney)/100
				}
				
				this.datalist=[...this.datalist,...result.ResultList]
			if(result.ResultList.length==0){

					this.loading=true;
					this.tipshow=true;
				}
			this.pageIndex++	
			})
				
			},
			getContent:function(name,data){

				this.$http.jsonp(`http://api.goudong.com/ProductService.asmx/ProductByColumn?callback=''&productcatName=%E5%93%81%E7%89%8C%E7%89%B9%E5%8D%96&strwhere=&orderBy=&pageIndex=${data}&pageSize=20&appkey=wapkey&userID=goudong&category=${name}&by=&_=1490680023962`,{jsonp:"callback"}).then((res)=>res.json()).then(result=>{

				this.loading=false;
		
					for(var i=0; i<result.ResultList.length;i++){ 						
				  										result.ResultList[i].CommissionProductImg="http://www.goudong.com/"+result.ResultList[i].CommissionProductImg;
				  									result.ResultList[i].CommissionProductPoint=result.ResultList[i].CommissionProductPoint/100;	
				  					result.ResultList[i].daoshoujia=Math.round((result.ResultList[i].CommissionProductSalesPrice-result.ResultList[i].CommissionProductPoint)*100)/100;
											
				  										
				  					}

				  					
				  					this.contentlist=[...this.contentlist,...result.ResultList];

			this.pageIndex++	
				  				if(result.ResultList.length<20){
				  					this.loading=true;
				  					this.tipshow=true;
				  				}
				  				})
				
			}
				
		},
		mounted(){

		}
	})
	
</script>

<style scoped>
	#pinpai{
		background: #F7F7F7;
		overflow: hidden;
		width: 100%;
	}
	.applist{
		display: none;
	}
		.active{
			border-bottom: 5px solid #FF4500;
			box-sizing: border-box;
			color: #FF4500;
		}
	.pp_header{
		height:1.7rem;
		width:100%;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	.pp_header .pp_top{
		background: #FF4500;
		height: 1rem;
	}
	.pp_top span{
		background: url(home-img/backk1.png) no-repeat center;
		display: inline-block;
		width: 0.64rem;
		height: 0.64rem;
		margin-top: 0.18rem;
		margin-left: 0.2rem;
		float: left;
		background-size: 100% auto;
		
	}
	.pp_top h2{
		display: inline-block;
		font-size: 0.5rem;
		font-weight: 100;
		color: #fff;
		text-align: center;
		line-height: 1rem;
		height: 1rem;
		width:5.7rem;
		float: left;
	}
	.pp_top i{
		display: inline-block;
		width: 0.7rem;
		height:0.64rem;
		float: left;
		background: url(home-img/assess-03.png) no-repeat center;
		background-size: 100% auto;
		margin-top: 0.22rem;
	}
	.pp_nav{
		border-bottom: 1px solid #ccc;
	}
	.pp_nav ul{
		overflow: hidden;
		white-space: nowrap;
		overflow: auto;
		display: flex;
	}
	.pp_nav ul li{
		float: left;
		font-weight: 400;
		margin: 0 0.2rem;
		font-size:0.32rem ;
		flex: 1;
		line-height: 0.7rem;	
	}
	.pp_content{
		width: 100%;
		margin-top:1.9rem ;
		height:10.5rem;
		overflow: auto;
	}
	.pp_content li{
		width: 100%;
		overflow: hidden;
		margin-bottom: 0.15rem;
		background: #fff;
	}
	.pp_content .pp_con1 dd{
		width:4.4rem;
		height:2.4rem;
		float: left;
	}
	.pp_con1 dd img{
		width: 100%;
		height: 100%;
	}
	.pp_con1 dt{
		float: left;
		
	}
	.pp_con1{
		width:100%;
		height:10.4rem;
		overflow: auto;
	}
	.pp_con_box{
		float: left;
		overflow: hidden;
		
	}
	.pp_con_box img{
		height:0.6rem;
		width:1.4rem;
		margin-top: 0.2rem;
		margin-left: 0.8rem;
	}
	.pp_con_box h4{
		font-size: 0.3rem;
		font-weight: 100;
		color: #999;
		width: 3.1rem;
		text-align: center;
	}
	
	.pp_con_box span{
		display: block;
		width: 3rem;
		text-align: center;
		color:#FF4500;
		font-size: 0.35rem;
		line-height: 0.5rem;
	}
	.pp_con_box p{
		font-size: 0.3rem;
		color: #333;
		background: #F7F7F7;
		margin-top: 0.1rem;	
		width: 3rem;
		text-align: center;
	}
	.pp_con_box p span{
		color: #5daf36;
		font-size: 0.3rem;
		display:inline;
	}
	.pp_tip{
		height:2.5rem;
		margin-top:0.5rem;
		color:#999999;
		font-size: 0.3rem;
		width: 100%;
		text-align: center;
		
	}
	/*第二个li样式*/
	.pp_content ul .pp_con_li2{
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
	
	.content_li img{
		width: 100%;
	}
	.pp_con1 ul li img{
		width:3.65rem;
		height:3.65rem;
		
	}
	.pp_con1 h3{
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
    margin-left: -5px;
    background-size: auto 100%;
   	margin-top: 0.06rem; 
    
	}
	.daoshou strong{
		float: left;
    color: #ff4500;
    height: 0.28rem;
    line-height: 0.28rem;
    border: 0.01rem solid #ff4500;
     padding: 0 0.05rem; 
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
</style>