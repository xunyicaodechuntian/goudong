<template>
  <div id="list">	
		  	<div class="header">
		  		<img src="../image/imgstore/2.png" class="img1"/>
		 			<p>G币商城</p>
		  		<img src="../image/imgstore/1.png" class="img2"/>
		  	</div>
  		
		  	<ul class="nav">
		  			<li v-for="(data,index) in navList" :class="currentIndex==index?'active':''" @click="handleClick(index,data)">
		  				{{data}}
		  			</li>	  				
	  		</ul>
	  		
			  <ul class="listNav" v-infinite-scroll="loadMore">
			  		<li v-for="data in listarr" @click="handlePush(data.CommissionProductID)">
			  				<img :src="'http://www.goudong.com/'+data.CommissionProductImg"/>
			  				<h6>{{data.CommissionProductName}}</h6>
			  				<p>{{parseInt(data.CommissionProductSalesPrice)*100}}G币<span>{{data.CommissionProductMarkPrice}}</span></p>
			  				<input type="button" value="立即兑换" />
			  		</li>
			  </ul>
		  		
  	</div>
  </div>
  
  
</template>

<script>
import router from '../src/router';
import { Indicator } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

export default {
  name: 'list',
  data () {
    return {  
    		firstindex:1,
    		currentIndex:0,
    		listarr:[],
    		navList:["全部","女装","男装","内衣","鞋品","美妆","母婴","居家","家纺","食品","箱包","数码","家电","配饰","文本"]
    }
  },
  
  mounted(){
  			Indicator.open();
				Indicator.close();	
  },
  
  methods:{
  	handleClick(index,data){
           
  		  Indicator.open();
  		this.currentIndex = index;
  			this.$http.jsonp("http://api.goudong.com/ProductService.asmx/PointMallList2?callback=''&signID=&siteColumn=%E9%9B%B6%E5%85%83%E5%85%91%E6%8D%A2&strwhere=&orderby=&pageIndex=1&pageSize=20&appkey=wapkey&userID=goudong&category="+data+"&by=&_=1490601680588",{jsonp:"callback"}).then(response => {

                // 返回值已经解析数据了
                //console.log(response.body.ResultList);
                this.listarr=response.body.ResultList;
                Indicator.close();
         

              }, response => {
                // error callback
              });
              
              
  	},
  	
  	handlePush(id){
  		
  		router.push(`/detail/${id}`);
  	},
  	
  	loadMore:function(){
   	 	 				Indicator.open();
this.$http.jsonp("http://api.goudong.com/ProductService.asmx/PointMallList2?callback=''&signID=&siteColumn=%E9%9B%B6%E5%85%83%E5%85%91%E6%8D%A2&strwhere=&orderby=&pageIndex="+this.firstindex+"&pageSize=20&appkey=wapkey&userID=goudong&category=&by=&_=1490582304856",{jsonp:"callback"}).then(response => {
								
								
                // 返回值已经解析数据了
                console.log(response.body.ResultList);
                this.listarr=[...this.listarr,...response.body.ResultList];
                Indicator.close();
         

              }, response => {
                // error callback
              });
              this.firstindex++;
              
              Indicator.close();
   }
  	
  	
  }
  
  
  
}
</script>

<style scoped>
*{
	padding: 0px;
	margin: 0px;
}

html,body {
	height: 100%;
	width: 100%;
}

#list{
	width: 100%;
	height: 100%;
}

#list .header{
	height:1.0rem;
	width: 100%;
	background: #ff4500;
	line-height:0.9rem;
	display: flex;
	position:fixed;
	top:0rem;
	z-index: 1;
	
}
#list .header .img1{
	display: block;
	height:0.4rem;
	flex: 1;
	margin-top: 0.3rem;
	margin-left: 0.1rem;
}

#list .header .img2{
	display: block;
	height:0.7rem;
	margin-top: 0.2rem;
	flex: 1;
	margin-right: 0.1rem;
}


#list .header p{
	text-align: center;
	flex: 100%;
	font-size:0.48rem;
	color:#fff;
	line-height: 0.9rem;
	margin-left: 0.3rem;
}

#list .nav{

	width: 100%;
	display: flex;
	height: 0.7rem;
	background: #fff;
	border-bottom:0.02rem solid #ccc;
	position:fixed;
	top:1rem;
	z-index: 1;
	white-space: nowrap;
	overflow-x: scroll;
}

#list .nav li{
	
	width: 0.49rem;
	padding:0rem 0.29rem;
	line-height: 0.7rem;
	font-size: 0.34rem;
	font-weight:500;
	text-align: center;
}

#list .listNav{
	
	
	background:#fff;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	overflow: hidden;	
	position: absolute;
	top:1.8rem;
	width: 98%;
	
}

#list .listNav li{
	width: 48%;
	flex-wrap: wrap;
	height: 5.5rem;
	margin-bottom:0.05rem;
	margin-top: 0.2rem;
	position: relative;
	margin-right: 0rem;
}

#list .listNav li:nth-child(2n){
	margin-left:0.27rem;
}

#list .listNav li:nth-child(n){
	margin-left:0.14rem;
}

#list .listNav li img{
	display: block;
	width:100%;
	height:3.6rem;
}

#list .listNav li h6{
	font-size:0.26rem;
	font-weight:normal;
	margin-top: 0.15rem;
}

#list .listNav li P{
	color: #ff4500;
	font-size:0.38rem;
	margin-left: 0.1rem;
	margin-top: 0.1rem;
}

#list .listNav li span{
	font-weight: lighter;
	color: #999;
	font-size:0.38rem;
	text-decoration: line-through;
}

#list .listNav li input{
	width: 3.2rem;
	margin: 0 auto;
	height: 0.6rem;
	border: 0.03rem solid #ff4500;
	background: #fff;
	position: absolute;
	left: 50%;
	margin-left: -1.6rem;
	margin-top: 0.1rem ;
	font-size: 0.3rem;
	color: #ff4500;
	border-radius:0.08rem;
}

.active{
	border-bottom: 0.03rem solid #ff4500;
}


</style>
