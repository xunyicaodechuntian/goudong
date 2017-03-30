		

<template>
  <div id="app">
 		
   <ul class="applist">
   	<router-link to="/home" tag="li"  activeClass="active">
   		<div class="lidiv"><img :src="require('./app_img/home'+this.index+'.png')"  @click="li1(1)"/></div>
   		<p>首页</p>
   	</router-link>
   	 <router-link to="/rebate"  tag="li" activeClass="active">
   	 	<div class="lidiv"><img :src="require('./app_img/tb'+this.index1+'.png')"  @click="li2(1)"/></div>
   	 	<p>淘宝返利</p>
   	 </router-link>
    <router-link to="/list"  tag="li" activeClass="active">
    	<div class="lidiv"><img :src="require('./app_img/fl'+this.index2+'.png')"  @click="li3(1)"/></div>
    	<p>商品分类</p>
    </router-link>
    <router-link to="/store"  tag="li" activeClass="active">
    	<div class="lidiv"><img :src="require('./app_img/sc'+this.index3+'.png')"  @click="li4(1)"/></div>
    	
    	<p>g币商城</p>
    </router-link>
     <router-link to="/my"  tag="li" activeClass="active">
     	<div class="lidiv"><img :src="require('./app_img/my'+this.index4+'.png')"  @click="li5(1)"/></div>
     	<p>个人中心</p>
     </router-link>
   </ul>
   
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app',
 
  data () { 	
    return {     
    	index:"1",
    	index1:"0",
    	index2:"0",
    	index3:"0",
    	index4:"0"

    }

    },
    methods:{
    	li1:function(index){
    		console.log("@22")

    		this.index=index,
        this.index1=0,
        this.index2=0,
        this.index3=0,
        this.index4=0
    	},
    	li2:function(index1){
    		console.log("@22")

    		this.index1=index1,
        this.index=0,
        this.index2=0,
        this.index3=0,
        this.index4=0

    	},
    	li3:function(index2){
    		console.log("@22")

    		this.index2=index2,
        this.index=0,
        this.index1=0,
        this.index3=0,
        this.index4=0
    	},
    	li4:function(index3){
    		console.log("@22")

    		this.index3=index3,
        this.index=0,
        this.index1=0,
        this.index2=0,
        this.index4=0
 
    	},
    	li5:function(index4){
    		console.log("@22")
    		this.index4=index4,
        this.index=0,
        this.index1=0,
        this.index2=0,
        this.index3=0
    	}
  }
}

</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
html,body{
		width: 100%;
		height: 100%;
	}
	ul{
		list-style: none;
	}
		.applist {			
      position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 1;
    	border-top: 1px solid #F2F2F2;
			left: 0;
   			height:1.2rem;
        background:#fff;
			
		}
	.applist li{
			height: 1.4rem;
			float: left;
			list-style: none;
			width: 20%;
			text-align: center;
			line-height: 1.4rem;
		}
    .lidiv{
      width:100%;height:0.6rem;
    }
		  .applist li .lidiv img{
			width:40%;
			height:100%;
			margin-bottom:0.1rem;
		
		}
	.applist li p{
			font-size: 0.3rem;
      width:100%;height:0.5rem;text-align:center;line-height:0.5rem;margin-top:0.1rem;
		}
		  .active{
			color: #FF4500;
		}
</style>
