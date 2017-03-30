
<template>
  <div id="list">
  	<h2>
  		<span @click="goBack" class="headerimga"><img :src="require('../image/store/2.png')"/></span>
  			商品分类
  	</h2>
  	<div class="box"> 	
		 		<ul class="left">
		 			<li v-for="data in nve" @click="hounder(data)" :class="data==color?'color':''">{{data}}</li>					
		 		</ul>
	 		</div>	
	 		<div class="list">
	
	 			<a v-for="data in list" @click="childList(data.CommissionProductCatID)">
	 			
	 					<img :src="'http://www.goudong.com/'+data.Ctgpic"/>
	 					<p>	{{data.CommissionProductCatName}}</p>
	 			</a>

	 				
			
	 		</div>
   </div>
</template>

<script>
import router from '../src/router';
export default {
  name: 'list',
  data () {
    return {  
    	list:[],
    	nve:['女装','男装','内衣','鞋品','居家','家纺','母婴','食品','数码','家电','美装','配饰','箱包','文体'],
    	color:'女装'
    }
  },
  mounted(){
  	//这是默认显示女装
			this.hounder("女装")
  },
  methods:{
  	hounder:function(data){ 		
  		this.$http.jsonp("http://api.goudong.com/ProductService.asmx/ClassifyList?callback=''&ctgName="+data+"&pageIndex=1&pageSize=200&appkey=wapkey&userID=goudong&_=1490508875920",{jsonp:"callback"}).then(response => {

                // 返回值已经解析数据了
               console.log(response.body);
							this.list=response.body.ResultList
							//console.log(this.list);
              }, response => {
                // error callback
              });
  		this.color=data
  },
  goBack:function(){
  	 router.go(-1);

  },
  childList:function(id){
  	var name = this.list[0].CommissionProductCatID
  	console.log(name)
  	router.push("childList/"+name+"/"+id)
  }
  }  

}
</script>

<style scoped>
	#list{
		height: 100%;
		overflow: hidden;
	}
	h2{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		color: #fff;
		background: #ff4500;
		font-size: .4rem;
		padding: 0;
		margin: 0;
		position: relative;
	}
	h2 span{
		display:block;width:9%;height:0.45rem;
		float:left;
		position: absolute;
		left: 0.1rem;
		font-size: .8rem;
	}
	h2 span img{width:100%;height:100%;}
	.box{
		width: 1.3rem;
		overflow: hidden;
		float: left;
	}
	.box .left{
		width: 1.5rem;	
		height: 11.4rem;
		overflow: auto;
	}
	.box .left li{
		height: 1rem;
		width: 100%;
		padding-left: .3rem;
		box-sizing: border-box;
		line-height: 1.2rem;
		font-size: .35rem;
		background: #eee;
	}
	.box .left .color{
		background: #fff;
	}
	.list{
		width: 6.0rem;
		height: 11.4rem;
		float: left;
		padding: .3rem;
		box-sizing: border-box;		
		overflow: auto;
		background: #fff;		
	}
	.list  a{	
		float: left;
		overflow: hidden;
		display: block;
		height: 2rem;
		width: 33.3%;
	}
	.list  a p{
		text-align: center;
		color: #aaa;
		font-size: .3rem;
	}
	.list  a img{
		height: 1rem;
		margin-left: .5rem;
	
	}
</style>
