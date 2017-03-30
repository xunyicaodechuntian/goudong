
<template>
  <div id="childList">
  	<h2> 		
  			<img :src="require('../../image/imgstore/2.png')"  class="leftimg" @click="goBack" />
  			{{name}}
  	</h2>
  	<div class="box">
  			
	  	<ul class="nve">
	  		<li @click="skipDetails(this.name)"  class="border">全部</li>
	  		<li v-for="data in list" @click="skipDetails(data.CommissionProductCatID)">{{data.CommissionProductCatName}}</li>		
	  	</ul>
  	</div>  	 	
  		 		<div class="content_text"  v-infinite-scroll="loadMore">
	 			<ul>
	 				<li v-for="(data,index) in datalist" key="{{index}}" @click="urltaobao(data.CommissionProductUrl)">
	 					<div class="content_li" @click="contentClick">
		 					<img :src="'http://www.goudong.com/'+data.CommissionProductImg"/>
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
	 			
	 		</div>
  </div>
</template>

<script>

import router from '../../src/router';
export default {
  name: 'childList',
  data () {
    return {  
    	list:[],
    	datalist:[],
    	name:'',
    	CommissionProductCatID:"",
    	index:20
    }
  },
  mounted(){
  	//这是第一个列表页的http请求
  //	console.log(this.$route.params.id)
  	this.name=this.$route.params.name;
  	
		this.$http.jsonp("http://api.goudong.com/ProductService.asmx/ProductCatList?callback=''&ctgName="+this.name+"&appkey=wapkey&userID=goudong&_=1490584663645",{jsonp:"callback"}).then(response => {
                // 返回值已经解析数据了
               console.log(response.body);
							this.list=response.body.ResultList
							//console.log(this.list);
              }, response => {
                // error callback
              });
              
    //这是下面详情列表的请求-------------------------------------  
    //this.skipDetails(this.$route.params.id)
  },
  methods:{
  	goBack:function(){
  	 router.go(-1);
  },
   skipDetails:function(data,index="20"){
   			console.log(index)
   			
   			if(index=="20"){
   				this.index=40
   			}
   			//console.log(this.index)
   			this.CommissionProductCatID=data
   			this.$http.jsonp("http://api.goudong.com/ProductService.asmx/ProductList?callback=''&CtgID="+data+"&BrandID=&orderBy=&pageIndex=1&pageSize="+index+"&appkey=wapkey&userID=goudong&_=1490585302529",{jsonp:"callback"}).then(response => {

                // 返回值已经解析数据了
               console.log(response.body.ResultList);
							this.datalist=response.body.ResultList
							//console.log(this.list);
              }, response => {
                // error callback
              });

   	
   },
   contentClick:function(){
   	console.log("11")
   },
   shoucangClick:function(){
   	console.log("我是收藏")
   },
   loadMore:function(){ 	
   	this.skipDetails(this.CommissionProductCatID,this.index)
   	this.index=this.index+20
   },
   urltaobao:function(url){
 				  mui.openWindow({
			    url: 'info.html?id='+url, 
			    id:'info'
			  });


   }
		
  }  

}
</script>

<style scoped>
	#childList{
		height: 100%;
		width: 100%;
	}
#childList	h2{
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		color: #fff;
		background: #ff4500;
		font-size: .4rem;
		position: relative;
		margin-top:0;margin-bottom:0;
	}
	h2 .leftimg{
		position: absolute;
		left: .3rem;
		top: .3rem;
		font-size: .8rem;
		width: .5rem;
	}
	.box{
		height: .8rem;
		overflow: hidden;
	}
	.nve{
		height:1rem;
		/*width: 7.49rem;*/
		background: #fff;		
		overflow: hidden;
		white-space: nowrap;
		overflow: scroll;
		display: flex;
	}
	.nve li{
		flex: 1;	
		height: 1rem;
		line-height: .8rem;
		padding: 0 .2rem;
		font-size: .35rem;
		color: #999999;
		
	}
	.nve .border{
		color: #ff4500;
		border-bottom: solid .1rem #ff4500; 
		
	}
	.content_text ul{
		display: table;
		width:100%;
		
	}
	.content_text ul li{
		width: 50%;
		box-sizing: border-box;
    overflow: hidden;
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
    background: url(../home-img/arrow1.png) no-repeat left center;
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
		width:100%;
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
