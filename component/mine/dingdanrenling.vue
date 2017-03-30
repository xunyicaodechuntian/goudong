<template>
 <div id="dingdanrenling">
	<div class="car_head">
        <a class="backk" @click="goback">
            <img :src="require('../../image/my/backk1.png')"/>     
        </a>
        <h2>订单认领</h2>
        <div class="menu_a"></div> 
    </div>
    <div class="order_find">
        <input type="text" id="order_find_text" placeholder="输入商品名称或订单号"/>
        <input type="button" id="order_find_btn" value="查找订单"/>
    </div>
    <div id="div_data"  v-infinite-scroll="loadMore">
       <div class="goods1" v-for="data in dingdan">
           <div class="goods1_left1"><img :src="'http://www.goudong.com/'+data.CommissionOrderImg"/></div>
           <div class="goods1_right">
               <p>{{data.CommissionOrderProductName}}</p>
               <p class="right_text">订单金额：{{data.CommissionOrderSum}}</p>
               <p class="right_text">下单：{{data.CommissionOrderDate}}</p>
               <a href="">我要认领</a>
           </div>
       </div>

    </div>

 </div>  
</template>

<script>
import { InfiniteScroll } from 'mint-ui';

import router from "../../src/router"
export default {
  name: 'dingdanrenling',
  data () {
    return {  
    	dingdan:[],
        index:1

    }
   
}, 

methods:{
    goback:function(){
        router.push("/my");

    },
    loadMore() {
        this.index++
       
        this.$http.jsonp("http://api.goudong.com/OrderService.asmx/GetReviewOrder?callback=''&signID=0b7bb65d-dd02-4f0d-b0ae-35834261e660&page=1&appkey=wapkey&userID=goudong&commissionOrderNumber=&_=1490747787977",{jsonp:"callback"}).then(response => {


                // 返回值已经解析数据了
               console.log(response.body);
                           this.dingdan=[...this.dingdan,...response.body.ResultList]
                            console.log(this.dingdan);
              }, response => {
                // error callback
              });
            }
    
  },

mounted(){

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
.order_find {
    width:100%;
    padding: 0.3rem 0.23rem 0.2rem;
    position: fixed;
    top: 1rem;
    z-index: 10;
    background: white;
}
#order_find_text {
    width: 4rem;
    height: 0.6rem;
    border-radius: 0.05rem;
    border: 1px solid #ff4500;
    padding: 0 0.2rem;
    font-size: 0.3rem;
}
#order_find_btn {
    width: 2rem;
    height: 0.6rem;
    background: #ff4500;
    color: #fff;
    border-radius: 0.05rem;
    margin-left: 0.2rem;
    border: none;
    font-size: 0.3rem;
}
#div_data {
    width:100%;
    min-height:23rem;
}
.goods1 {
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid #F3F3F3;
    position: relative;
   top:2rem;
}
.goods1_left1 {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0.05rem;
    left: 0.23rem;
    float: left;
    background: #fff;
}
.goods1_left1 img {
    width: 100%;
    height: 38%;
    margin-top: 31%;
    display: block;
}
.goods1_right {
    width: 5.04rem;
    height: 1.5rem;
    position: absolute;
    top: 0.2rem;
    right: 0.23rem;
    float: right;
    line-height: 0.43rem;
}
.goods1_right p {
    font-size: 0.27rem;
    color: #333;
    margin-top: 0rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goods1_right .right_text {
    font-size: 0.24rem!important;
    color: #999!important;
}
.goods1_right a {
    font-size: 0.24rem;
    color: #5daf36;
}
</style>