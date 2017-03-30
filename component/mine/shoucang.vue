<template>
 <div id="shoucang">

	<div class="car_head">
        <a class="backk" @click="goback">
            <img :src="require('../../image/my/backk1.png')"/>     
        </a>
       <h2>我的收藏</h2>
         <div class="menu_a"></div>
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
import router from "../../src/router"
export default {
  name: 'shoucang',
  data () {
    return {  
    	
    }
  },
  methods:{
    goback:function(){
        router.push("/my");

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
.fix_order_my{width:100%;height:5rem;background:red;}
.all_list_no {
    width: 100%;
    height:3.5rem;
    padding: 1rem 0.23rem;
    box-sizing: border-box;
   /*position: absolute; 
  bottom: 0.8rem;*/
}
 .all_list_img {
    width: 1.5rem;
    height: 1.5rem;
  /*  background: url(../img/invite/invite_01.png) no-repeat;
    background-size: 100%;*/
     margin:0.5rem auto ;
  
}
.all_list_img img{width:100%;height:100%;}
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
.all_list_no p {
    font-size: 0.4rem;
    text-align: center;
    color: #9a9a9a;
    width: 100%;
    display: block;

}
</style>