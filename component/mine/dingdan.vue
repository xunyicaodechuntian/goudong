<template>
 <div id="dingdan">

	<div class="car_head">
        <a class="backk">
            <img :src="require('../../image/my/backk1.png')"/>     
        </a>
       <h2>我的订单</h2>
         <div class="menu_a"></div>
    </div>
    <div class="fix_order_my">
        <div class="all_list_no"><p class="pA">亲，如果您已通过购东在淘宝、天猫购买商品，需要您在购东个人中心—“<a href="">订单认领</a>”中进行订单认领后，订单方可显示在这儿。 </p></div>
        
        <ul class="draw_tab">
            <li class="tab_left" id="li_taobao">淘宝天猫订单</li>
            <li class="tab_right" id="li_mall">其他商城订单</li>
        </ul>
    
    </div>
    <ul>
        <div class="all_list_no">
            <div class="all_list_img"><img :src="require('../../image/my/invite_01.png')"/></div>
            <p>还没有收藏过宝贝哦~</p>
           <a href="" id="go_shopping">
                <p>去逛逛</p>
            </a>

        </div>
    </ul>
   <a href=""><input type="button" value="取消收藏" class="apply_button"/></a>
</div>
</template>

<script>
export default {
  name: 'dingdan',
  data () {
    return {  
    	
    }
  }
}
</script>

<style scoped>
* {
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
.apply_button {
    width: 90%;
    height: 0.8rem;
    display: block;
    background: #ff4500;
    border: none;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    position:fixed;
    bottom:1rem;
    left:1%;
    font-size: 0.3rem;
    color: #fff !important;
    font-family: "Droid Sans Fallback";
    text-align: center;
    line-height: 0.4rem;
}
.fix_order_my{width:100%;height:2.5rem;}


.all_list_no {
    width: 100%;
    height:2rem;
    padding: 1.3rem 0.3rem;
    box-sizing: border-box;
   /*position: absolute; 
  bottom: 0.8rem;*/
}
 .all_list_img {
    width: 1rem;
    height: 1rem;
  /*  background: url(../img/invite/invite_01.png) no-repeat;
    background-size: 100%;*/
     margin:0.3rem auto ;
  
}
.all_list_img img{width:100%;height:100%;}
.all_list_no p {
    font-size: 0.25rem;
    text-align: center;
    color: #9a9a9a;
    width: 100%;
    display: block;
}
.all_list_no .pA{background:#fffec9;}
.draw_tab{background: #fff;
    width: 100%;
    height: 0.7rem;
    font-size: 0.28em;
    border-bottom: 0.02rem solid #E1E1E1;
    z-index: 100;
    overflow: visible;
}
.draw_tab li{width: 50%;
    height: 0.7rem;
    float: left;
    line-height: 0.7rem;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 0.28rem;
}
.tab_left {
    border-bottom: 0.03rem solid #ff4500;
    color: #ff4500;
}

#go_shopping {
    display: block;
    width: 50%;
    height: 0.8rem;
    border: 1px solid #ff4500;
    border-radius: 0.05rem;
    margin: 0.2rem auto 0;
    text-align: center;
    line-height: 0.5rem;
    margin-top:0.5rem;
    box-sizing: border-box;padding:0.1rem;
}
#go_shopping p {
    font-size: 0.4rem;
    color: #ff4500;

}

</style>