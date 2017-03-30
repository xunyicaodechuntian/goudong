<template>
   <div id="list">
      <div id="taobao_big">
    
        <div class="taobao_big_first"><img :src="require('../image/rebate/taobao.png')"/></div>
        <div class="taobao_big_second">最高返利38%哦</div>
        <div class="taobao_big_three">
          <div class="three_one"><input type="text" placeholder="粘贴淘宝/天猫宝贝标题搜索,购物拿返利！"></div>
          <div class="three_two"><img :src="require('../image/rebate/taobao_search.png')"/></div>
        </div>
      </div>
      <div id="buzhou">
        <div class="buzhou_img"><img :src="require('../image/rebate/taobao_text.png')"/></div>
        <div class="buzhou_text">
          <div class="text_one">
            <div class="one_left">
              <img :src="require('../image/rebate/course_ico1.png')">
              <p>淘宝复制商品名称后到购东搜索</p>
            </div>
            <div class="one_right"><img :src="require('../image/rebate/course_arrow.png')"/></div>
          </div>

          <div class="text_two">
            <div class="two_left">
              <img :src="require('../image/rebate/course_ico2.png')">
              <p>搜到商品照常购买</p>
            </div>
            <div class="two_right"><img :src="require('../image/rebate/course_arrow.png')"/></div>
          </div>
          <div class="text_three">
            <div class="three_left">
              <img :src="require('../image/rebate/course_ico3.png')">
              <p>进入购东认领订单</p>
            </div>
            <div class="three_right"><img :src="require('../image/rebate/course_arrow.png')"/></div>
          </div>
          <div class="text_four">
            <div class="four_left">
              <img :src="require('../image/rebate/course_ico3.png')">
              <p>上传订单截图,等待审核拿返利</p>
            </div>
          </div>
        </div>
      </div>
      <div class="first">
        <h4>第一步：进入淘宝复制商品标题后到购东搜索</h4>
        <p>在淘宝商品详情页长按复制你想购买的商品标题，打开主页”淘宝返利”快捷入口，长按粘贴到搜索框搜索。</p>
        <img :src="require('../image/rebate/course_pic1.jpg')"/>
        <img :src="require('../image/rebate/course_pic2.jpg')"/>
        <img :src="require('../image/rebate/course_pic3.jpg')"/>
      </div>
      <div class="second">
        <h4>第二步：进入淘宝复制商品标题后到购东搜索</h4>
        <p>将直接跳转到淘宝/天猫。找到你想要的商品后，按照你平时的购物流程购买商品即可。</p>
        <img :src="require('../image/rebate/course_pic4.jpg')"/>
        <img :src="require('../image/rebate/course_pic5.jpg')"/>
      </div>
      <div class="three">
        <h4>第三步：进入淘宝复制商品标题后到购东搜索</h4>
        <p>当成功购买该商品后，如果该商品支持返利，进入“购东-个人中心-订单认领”，在搜索框内输入商品名称或订单号，查找订单，点击我要认领。</p>
        <img :src="require('../image/rebate/course_pic6.jpg')"/>
      </div>
      <div class="four">
        <h4>第四步：进入淘宝复制商品标题后到购东搜索</h4>
        <p>再次输入订单号，并上传订单截图，找回订单，等待审核拿返利。订单确认收货后，无退货或纠纷，1-2个月后可获取返利。</p>
        <img :src="require('../image/rebate/course_pic7.jpg')"/>
      </div>
   </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {  
    	
    }
  }
}
</script>

<style>
#taobao_big{width:100%;height:3.2rem;background:url("../image/rebate/taobao_pic.png");}
#taobao_big .taobao_big_first{width:75%;height:1.2rem;margin:0 auto;}
#taobao_big .taobao_big_first img{width:100%;margin-top:0.6rem;}
#taobao_big .taobao_big_second{width:33%;height:0.4rem;margin:0 auto;color:#fff;font-size:0.3rem;border:1px solid #ff4500;text-align:center;border-radius:0.1rem;margin-top:0.2rem;}
#taobao_big .taobao_big_three{width:90%;height:0.8rem;margin:0 auto;margin-top:0.2rem;}
#taobao_big .taobao_big_three .three_one{width:80%;height:0.8rem;float:left;}
#taobao_big .taobao_big_three .three_one input{width:100%;height:0.8rem;font-size:0.28rem;color:#ccc;border:none;border-radius:0.06rem 0 0 0.06rem;padding-left:0.2rem;}
#taobao_big .taobao_big_three .three_two{width:20%;height:0.8rem;float:right;background:#ff4500;border-radius:0 0.06rem 0.06rem 0;}
#taobao_big .taobao_big_three .three_two img{width:0.8rem;height:0.8rem;border:none;padding:0.1rem;
box-sizing:border-box;margin-left:0.3rem;}
#buzhou{width:100%;height:4.2rem;box-sizing:border-box;padding:0.3rem;border-bottom:1px solid #ccc;}
#buzhou .buzhou_img{width:100%;height:0.8rem;}
#buzhou .buzhou_img img{width:100%;height:100%;}
#buzhou .buzhou_text{width:100%;height:2.42rem;margin-top:0.2rem;}
#buzhou .buzhou_text .text_one{width:50%;height:1.2rem;float:left;}
#buzhou .buzhou_text .text_one .one_left{width:85%;height:1rem;float:left;}
#buzhou .buzhou_text .text_one .one_left img{width:0.5rem;height:0.5rem;float:left;}
#buzhou .buzhou_text .text_one .one_left p{font-size:0.28rem;display:block;width:2rem;height:1.2rem;float:right;box-sizing:border-box;padding:0.05rem;}
#buzhou .buzhou_text .text_one .one_right{width:15%;height:0.5rem;float:right;}
#buzhou .buzhou_text .text_one .one_right img{width:90%;height:100%;}

#buzhou .buzhou_text .text_two{width:50%;height:1.2rem;float:left;}
#buzhou .buzhou_text .text_two .two_left{width:85%;height:1rem;float:left;}
#buzhou .buzhou_text .text_two .two_left img{width:0.5rem;height:0.5rem;float:left;margin-left:0.2rem;}
#buzhou .buzhou_text .text_two .two_left p{font-size:0.28rem;display:block;width:2rem;height:1.2rem;float:right;box-sizing:border-box;padding:0.05rem;}
#buzhou .buzhou_text .text_two .two_right{width:15%;height:0.5rem;float:right;}
#buzhou .buzhou_text .text_two .two_right img{width:90%;height:100%;}

#buzhou .buzhou_text .text_three{width:50%;height:1.2rem;float:left;}
#buzhou .buzhou_text .text_three .three_left{width:85%;height:1rem;float:left;}
#buzhou .buzhou_text .text_three .three_left img{width:0.5rem;height:0.5rem;float:left;}
#buzhou .buzhou_text .text_three .three_left p{font-size:0.28rem;display:block;width:2rem;height:1.2rem;float:right;box-sizing:border-box;padding:0.05rem;}
#buzhou .buzhou_text .text_three .three_right{width:15%;height:0.5rem;float:right;}
#buzhou .buzhou_text .text_three .three_right img{width:90%;height:100%;}
#buzhou .buzhou_text .text_four{width:50%;height:1.2rem;float:left;}
#buzhou .buzhou_text .text_four .four_left{width:85%;height:1rem;float:left;}
#buzhou .buzhou_text .text_four .four_left img{width:0.5rem;height:0.5rem;float:left;margin-left:0.2rem;}
#buzhou .buzhou_text .text_four .four_left p{font-size:0.28rem;display:block;width:2rem;height:1.2rem;float:right;box-sizing:border-box;padding:0.05rem;}



.first{box-sizing:border-box;padding:0.2rem;margin-top:0.5rem;}
.first h4{font-size:0.2rem;line-height:0.5rem;color:#333;font-weight:200;}
.first p{font-size:0.15rem;line-height:0.5rem;color:#999;}
.first img{width:100%;}
.second{box-sizing:border-box;padding:0.2rem;}
.second h4{font-size:0.2rem;line-height:0.5rem;color:#333;font-weight:200;}
.second p{font-size:0.15rem;line-height:0.5rem;color:#999;}
.second img{width:100%;}
.three{box-sizing:border-box;padding:0.2rem;}
.three h4{font-size:0.2rem;line-height:0.5rem;color:#333;font-weight:200;}
.three p{font-size:0.15rem;line-height:0.5rem;color:#999;}
.three img{width:100%;}
.four{box-sizing:border-box;padding:0.2rem;}
.four h4{font-size:0.2rem;line-height:0.5rem;color:#333;font-weight:200;}
.four p{font-size:0.15rem;line-height:0.5rem;color:#999;}
.four img{width:100%;}

</style>
