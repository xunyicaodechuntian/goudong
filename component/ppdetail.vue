<template>
	<div id="ppdetail">
		
		<div class="pp_top">
			<span @click="historyClick"></span>
			<h2>{{goodinfo.AbbrName}}</h2>
			<i></i>				
		</div>	
		<!--倒计时-->
		<div class="endtime">
			<p>距离活动结束还剩:{{endtime}}</p>
		</div>
		
		<div class="pp_content">
		<ul class="pp_con1"  >
			
			
			<li class="pp_con_li2" v-for="(data,index) in contentlist" key="{{data.CommissionProductID}}"  >

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
			
		
		</ul>
		
		
		
	</div>
		
	</div>
</template>

<script>

	export default({
		name:"ppdetail",
		data(){
			return{
				goodsID:'',
				goodinfo:[],
				contentlist:[],
				endtime:'111111',
				datatime:0

			}
		},
		methods:{
			historyClick:function(){
				history.go(-1);
			},
			getInfo:function(id){
				this.$http.jsonp(`http://api.goudong.com//ProductService.asmx/PinpaiInfo?callback=''&ctgName=&bannerID=${id}&appkey=wapkey&userID=goudong&_=1490751657819`,{jsonp:"callback"}).then((res)=>res.json()).then((res)=>{

					this.goodinfo=res.ResultList.PinpaiDetail;

				this.datatime=Date.parse(this.goodinfo.CommissionBrandEndDatetime);
					console.log(this.datatime)

				})
			},
			getContent:function(id){
				this.$http.jsonp(`http://api.goudong.com//ProductService.asmx/PinpaiProductListTwo?callback=''&CommissionBrandID=${id}&orderBy=&pageIndex=1&pageSize=20&appkey=wapkey&userID=goudong&_=1490752955634`,{jsonp:"callback"}).then((res)=>res.json()).then((result)=>{

					for(var i=0; i<result.ResultList.length;i++){ 						
				  										result.ResultList[i].CommissionProductImg="http://www.goudong.com/"+result.ResultList[i].CommissionProductImg;
				  									result.ResultList[i].CommissionProductPoint=result.ResultList[i].CommissionProductPoint/100;	
				  					result.ResultList[i].daoshoujia=Math.round((result.ResultList[i].CommissionProductSalesPrice-result.ResultList[i].CommissionProductPoint)*100)/100;
											
				  										
				  					}
					console.log(result.ResultList);
					this.contentlist=result.ResultList;
					
				})
			},
			endTime:function(){
				
			}
	
				
			
		},
		mounted(){
				this.goodID=this.$route.params.goodID;

				this.getInfo(this.goodID);
				this.getContent(this.goodID);
			
				
//				setInterval(
//					if(this.datatime){
//						console.log(datatime)
//					var t;
//
//					t = new Date()
//						
//
//
//					t = (datatime-Date.parse(t))/1000;
//
//					var d;
//					var h;
//					var m;
//					var s;
//					if(t>0){
//						d = parseInt(t/3600/24);
//						h = parseInt((t/3600) % 24)
//						m = parseInt((t / 60) % 60);
//						s = parseInt(t % 60);
//						this.endtime=d+"天"+h+"小时"+m+"分钟"+s+"秒";
//						console.log(this.endtime);
//					}else{
//						this.endtime="对不起，您查看的页面活动已结束！";
//					}
//					console.log(t)
//					t++
//
//					}
//					,1000)
				
	},
	created :function(){
		setInterval(
					function(){
				console.log(this.datatime)
					
					
					}
					

					
					,100)
		}
	})
	
</script>

<style scoped>
	div#ppdetail{
		background: #F7F7F7;
	}
	.pp_top{
		background: #FF4500;
		height: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
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
	.pp_content ul{
    	margin-top: 1.2rem;
		
	}
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
   	width: 1.8rem;
    
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
		color: #999;
	}
	
	
</style>