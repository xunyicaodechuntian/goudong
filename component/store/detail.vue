<template>
	
  <div id="list">	
		  	<div class="header">
		  		<span @click="handleTap()"><img src="../../image/imgstore/2.png" class="img1"/></span>
		 			<p>商品详情</p>
		  		<img src="../../image/imgstore/1.png" class="img2"/>
		  	</div>
		  	
		  	<div class="titileImg">
		  		<swipe class="my-swipe">
					  <swipe-item class="slide1"><img :src="'http://www.goudong.com/'+this.listimage[0]" /></swipe-item>
					  <swipe-item class="slide2">
					  	<img :src="'http://www.goudong.com/'+this.listimage[1]" />
					  </swipe-item>
					  <swipe-item class="slide3">
					  	<img :src="'http://www.goudong.com/'+this.listimage[2]" />
					  </swipe-item>
					</swipe>
		  		
		  	</div>
		  	
		  	<div class="price">
		  		<h3>{{detailList.Product.CommissionProductName}}</h3>
		  		<p>
		  			{{parseInt(this.detailList.Product.CommissionProductSalesPrice)*100}}G币<span class="span1">￥{{this.detailList.Product.CommissionProductMarkPrice+".00"}}</span>
		  			
		  		</p>
		  		<button>限时</button>
		  		<i v-if="!day==''">距离兑换结束<span class="span2">{{day+"天"+hour+"小时"+minutes+"分"+seconds+"秒"}}</span></i>
		  	</div>
		  	
		  	<div class="white1"></div>
		  	
		  	<div class="size">
		  			<p>请选择: 颜色分类 / 尺码</p>
		  	</div>
		  	
		  	<div class="white2"></div>
		  	
		  	<div class="detailNav">
		  			<ul>
		  				<li v-for="(data,index) in navList" :class="currentindex==index?'active':''"
		  					@click="handleChange(index)">{{data}}</li>	  				
		  			</ul>
		  	</div>
		  	
		  	<div class="produce" v-html="detailList.Product.Description" v-if="0==currentindex">
		  		
		  	</div>
		  	<div class="produce" v-html="detailList.sku" v-if="1==currentindex">
		  		
		  	</div>
		  	<div class="produce111" v-if="2==currentindex">
		  		<ul class="bottom">
		  			<li>买家</li>
		  			<li>购买数量</li>
		  			<li>付款时间</li>
		  		</ul>
		  	</div>
		  	
		  	<div class="bottom">
		  		<div>
		  			<span>0</span><i>人已兑换(当前库存{{detailList.Product.Stock}}件)</i>	
		  		</div>	
		  		<button>确认兑换</button>
			</div>
		 
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';
import router from '../../src/router';
import { Indicator } from 'mint-ui';

export default {
  name: 'detail',
  data () {
    return {  
    	detailList:[],
    	listimage:[],
    	navList:["商品详情","兑换规则","兑换记录"],
    	currentindex:0,
    	bottomList:[],
    	day:'',
    	hour:'',
    	minutes:'',
    	seconds:''
    		
    }
  },
	components:{
		'swipe': Swipe,
	  	'swipe-item': SwipeItem
	},
  
  mounted(){
  	
  			Indicator.open();
  	console.log(this.$route.params.goodsID)
  	this.$http.jsonp("http://api.goudong.com/ProductService.asmx/GetActivityProductDetail?callback=''&actName=G%E5%B8%81%E5%85%91%E6%8D%A2&signID=&productId="+this.$route.params.goodsID+"&appkey=wapkey&userID=goudong&_=1490606629174",{jsonp:"callback"}).then(response => {

                // 返回值已经解析数据了
                console.log(response.body);
                
                this.listimage.push(response.body.ResultList.Product.CommissionProductImg)
                this.listimage.push(response.body.ResultList.Product.ImageUrl2)
                this.listimage.push(response.body.ResultList.Product.ImageUrl3)
               
                this.detailList=response.body.ResultList;
                console.log(this.detailList.Product.Description);
                
                //转换毫秒数   活动结束时间
                
                var endTinme=this.detailList.Product.CommissionProductEndTIme;
                console.log(endTinme);
                
                //截取标准格式
                var endTimeRep=endTinme.replace(new RegExp("-","gm"),"/");
                console.log(endTimeRep);
                
                var endT=endTimeRep.replace("T"," ");
                console.log(endT);
 
                var endtimeHaoMiao = (new Date(endT)).getTime(); //得到毫秒数
                console.log(endtimeHaoMiao);
                
                var mDate = new Date(endtimeHaoMiao)   //直接将毫秒数当参数传进去。
				console.log(mDate);//活动结束的标准时间
             
                //转换毫秒数   活动开始时间
                var startTinme=this.detailList.Product.CommissionProductStartTime;
                console.log(startTinme);
                
                var startTimeRep=startTinme.replace(new RegExp("-","gm"),"/");
                console.log(endTimeRep);
                
                var startT=startTimeRep.replace("T"," ");
                console.log(endT);
               
                
                var starttimeHaoMiao = (new Date(startT)).getTime(); //得到毫秒数
                console.log(starttimeHaoMiao);
                
                var nDate = new Date(starttimeHaoMiao)   //直接将毫秒数当参数传进去。
				console.log(nDate);//活动开始的标准时间
                
                
       		//开启定时器  
		    setInterval(() => {  
		    		
		    		let myDate = new Date();
		    		//console.log(myDate);
		            let date = mDate - myDate; //时间差 
			        //console.log(date);
			        let mmsec = date % 1000 //所余毫秒数    
			        let seconds = Math.floor(date / 1000 % 60); //所余秒数
			        this.seconds=seconds;
			       // console.log(seconds);
			        let minutes = Math.floor(date / 1000 / 60 % 60); //所余分钟数
			        this.minutes=minutes;
			        //console.log(minutes);
			        let hour = Math.floor(date / 1000 / 60 / 60 % 24); //所余时钟数 
			        this.hour=hour;
			        //console.log(hour);
			        let day = Math.floor(date / 1000 / 60 / 60 / 24); //天数  
			        this.day=day;
			        //console.log(day);
			        //console.log(this);
		    }, 1000); 
	        
                       
                //加载框关闭
                Indicator.close();
                

              }, response => {
                // error callback
              });
  },
  
  methods:{
	
  	handleChange(index){
  		
			if(index==0){
				this.currentindex=0;
				
			}
			if(index==1){
				this.currentindex=1;
				
			}
			if(index==2){
				this.currentindex=2;
				this.$http.jsonp("http://api.goudong.com/ProductService.asmx/GetPageRecord?callback=''&actName=%E5%85%91%E6%8D%A2%E8%AF%84%E4%BB%B7&appkey=wapkey&userID=goudong&id=30A5187C-2E91-4987-B3AD-E48FEA0450E4&PageIndex=1&PageSize=16&status=0&_=1490669531907",{jsonp:"callback"}).then(response => {

                // 返回值已经解析数据了
                console.log(response.body);
                  
                this.bottomList=response.body.ResultList;
                
                
                
              }, response => {
                // error callback
              });
			}
  		console.log(index);
  		
  		
  	},
  	
  	handleTap(){
  		console.log(111);
    	router.push('/store');//跳转路由
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
	overflow: hidden;
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
#list .titileImg{
	height: 6.9rem;
	width: 100%;
	margin-top: 1rem;
}
#list .titileImg img{
	display: block;
	width: 100%;
	height:6.9rem;
}

#list .titileImg .my-swipe {
  height:6.9rem;
  width:100%;
  color: #fff;
  font-size: 30px;
  text-align: center;
}


.slide1 {
  
  color: #fff;
}

.slide2 {
  
  color: #000;
}

.slide3 {
  
  color: #fff;
}



#list .price{
	width: 100%;
	height: 2.0rem;
	padding: 0.2rem 0.30rem;
}

#list .price h3{
	font-size: 0.35rem;
	font-weight: normal;
	
}
#list .price i{
	margin-left: 0.2rem;
}

#list .price p{
	font-size: 0.4rem;
	color: #ff4500;
	margin-top: 0.2rem;
}

#list .price .span1{
	text-decoration: line-through;
	font-size: 0.35rem;
	color: #888;
	margin-left: 0.2rem;
}

#list .price .span2{
	
	color: #000;
	
	
	
}



#list .price button{
	width: 1.0rem;
	height: 0.5rem;
	background: #ffc400;
	color: #fff;
	font-size: 0.3rem;
	border: 0rem;
	border-radius: 0.1rem;
	margin-top: 0.2rem;
}

#list .price i{
	 font-style:normal;
	 font-size:0.33rem;
}

#list .price i span{
	font-size:0.33rem;
}

#list .white1{
	height:0.2rem;
	background: #f7f7f7;
}

#list .size{
	height:0.6rem;
	padding: 0.1rem 0.2rem;
	overflow: hidden;
}

#list .size p{
	line-height: 0.6rem;
	font-size: 0.3rem;
	color: #575757;
}

#list .white2{
	height:0.2rem;
	background: #f7f7f7;
}

#list .detailNav{
	height: 0.9rem;
	border-bottom: 0.02rem solid #e1e1e1;
}

#list .detailNav ul{
	display: flex;
	list-style: none;
	line-height: 0.9rem ;
}

#list .detailNav ul li{
	flex:1;
	text-align: center;
}

#list .produce .attributes-list li{
	font-size: 0.2rem;
	list-style: none;
}

#list .produce111 .bottom{
	display: flex;
}

#list .produce111 .bottom li{
	flex:1;
	text-align: center;
	height: 0.8rem;
	line-height: 0.8rem;
	color:#000;
	font-weight:600;
}

#list .bottom{
	height: 1.0rem;
	width: 100%;
	position: fixed;
	bottom: 0rem;
	left: 0rem;
	z-index: 10;
	line-height: 1.0rem;
	border-top: 0.04rem solid #eee ;
	background: #fff;
	    
}
#list .bottom div{
	float: left;
	margin-left: 0.3rem;
}

#list .bottom span{
	color: #ff4500;
}

#list .bottom i{
	font-style:normal;
}

#list .bottom button{
	background: rgb(218, 59, 0);
	color:#fff;
	float: right;
	height: 100%;
	width: 1.8rem;
}

.active{
	color: #ff4500;
	border-bottom: 0.03rem solid #ff4500;
}


#list .produce{
	height:auto;
	/*padding: 0.5rem 0.25rem;*/
	overflow: hidden;
}

#list .produce p{
	padding: 0.5rem 0.25rem;
	width: 100%;
}

#list .produce p img{
	display: block;
	width:99%;
}





</style>