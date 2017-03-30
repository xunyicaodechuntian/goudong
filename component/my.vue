 <template>
 
 <div id="my">
 		<div id="center_big">
        <div class="header"><p>我的购东</p></div>
        <div class="pages" v-if="nologin==0">
            <div class="shezhi"><a href=""><img src=""/></a></div>
            <ul class="pagesul">
                <li class="pagesli" @click="onlogin">登录</li>
                <li @click="onzhuce">注册</li>
            </ul>
        </div>
		<a class="oneself_big" v-if="nologin==1">
			<div class="nr1">
	            <img src=""/>
				
			</div>
	        <div class="center_rank">
	            <p id="p_name">18800185504</p>
	            <div id="div_level" class="rank_pic"></div>
	            <div class="oneself_arrow1" @click="ongerenziliao"><img :src="require('../image/my/oneself-arrow.png')"/></div>
	        </div>
	        <div class="center_fanli">
	            <p>我的账户余额：<span id="yue2">0</span>元</p>
	            <p>我的G币余额：<span id="yue1">0</span>个</p>
	        </div>
		</a>
	    <div class="center_tab">
	        <a class="tab1" @click="onshoucang">
	            <div class="tab1_pic_tab4"><p>0</p></div>
	            <p class="p1">我的收藏</p>
	        </a>
	        <a class="tab1">
	            <div class="tab1_pic_tab4"><img :src="require('../image/my/center-gou.png')"/></div>
	            <p class="p1">免费电话</p>
	        </a>
	    </div>	
	</div>
	 <div id="center_content">
	     <ul>
	         <li>
	             <a  class="contrnt_a" @click="onzichanchild">
	                 <div class="content_ico1"><img :src="require('../image/my/ico5.png')"/></div>
	                 <div class="content_text1"><p>资产管理</p></div>
	             </a>
	         </li>
	         <li>
	             <a  class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico1.png')"/></div>
	                 <div class="content_text1"><p>我的订单</p></div>
	             </a>
	         </li>
	         <li>
	             <a class="contrnt_a" @click="ondingdanrenling">
	                 <div class="content_ico1"><img :src="require('../image/my/ico7.png')"/></div>
	                 <div class="content_text1"><p>订单认领</p></div>
	             </a>
	         </li>
	         <li>
	             <a class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico6.png')"/></div>
	                 <div class="content_text1"><p>G币商城订单</p></div>
	             </a>
	         </li>
	         <li>
	             <a class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico8.png')"/></div>
	                 <div class="content_text1"><p>我的邀请</p></div>
	             </a>
	         </li>
	         <li>
	             <a class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico14.png')"/></div>
	                 <div class="content_text1"><p>浏览足迹</p></div>
	             </a>
	         </li>
	         <li>
	             <a class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico13.png')"/></div>
	                 <div class="content_text1"><p>我的站内信</p></div>
	             </a>
	         </li>
	         <li>
	             <a href="" class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico12.png')"/></div>
	                 <div class="content_text1"><p>帮助中心</p></div>
	             </a>
	         </li>
	         <li>
	             <a href="" class="contrnt_a">
	                 <div class="content_ico1"><img :src="require('../image/my/ico10.png')"/></div>
	                 <div class="content_text1"><p>购东客服</p></div>
	             </a>
	         </li>

	     </ul>
	 </div>
   </div>
</template>

<script>
import router from "../src/router"
import Cookie from "../src/cookie";
export default {

  name: 'my',
 
  data () {
    return {  
    	nologin:0
    }
  },
	updated(){
		//console.log("11")
	},
	mounted(){
		
		console.log(Cookie.getCookie("name"))
		if(Cookie.getCookie("nam")==''){
					console.log("@22")
					this.nologin=0
				 	}else{
				 	this.nologin=1
				 	console.log("333")
				 	}	
	},

	
  methods:{

   onlogin:function(){
        router.push("/login");
   },
   onzhuce:function(){
        router.push("/zhuce");
   },
   onzichanchild:function(){
        router.push("/zichanchild");
   },
   ondingdanrenling:function(){
        router.push("/dingdanrenling");
   },
    onshoucang:function(){
        router.push("/shoucang");
   },
   ongerenziliao:function(){
        router.push("/gerenziliao")
   }
  }

}
</script>

<style>
*{padding:0;margin:0;}
a{ text-decoration:none;}
.header{width:100%;height:0.8rem;border-bottom:1px solid #fff;}
.header p{text-align:center;color:#fff;padding-top:0.1rem;}
#center_big {
    width: 100%;
    height: 5rem;
    background: #ff4500;
    position: relative;
}
.oneself_big {
    display: block;
    width: 100%;
    padding:4%;
    padding-top:0.7rem;
    padding-bottom: 0.3rem;
    float: left;
    overflow: hidden;
    box-sizing: border-box;
}
.pages{width:100%;height:2rem;position:relative;}
.pages .shezhi{width:0.5rem;height:0.5rem;background:green;position:absolute;right:0.3rem;top:0.1rem;}
.pages .pagesul{width:40%;height:1rem;display:flex;position:absolute;bottom:0.3rem;left:2.2rem;
border:1px dashed #fff;box-sizing:border-box;padding:0.2rem;}
.pages .pagesul li{flex:1;text-align:center;color:#fff;font-size:0.3rem;}
.pages .pagesul .pagesli{border-right:1px solid #fff;}

.nr1 {
    width: 17%;
    height:1.3rem;
    float: left;
}
.nr1 img {
    background: green;
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.center_rank p {
    font-size: 0.3rem;
    color: #fff;
    display: inline;
    float: left;
}
.center_rank {
    width: 78%;
    height: 0.4rem;
    margin-left: 0.3rem;
    line-height: 0.4rem;
    float: right;
    overflow: hidden;
    display: block;

}
.center_rank .rank_pic {
    width:6%;
    height:100%;
    background: url(../image/my/rank1.jpg) no-repeat;
    background-size: 100%;
    margin-left: 0.3rem;
    float: left;
}
.oneself_arrow1 {
    width: 0.4rem;
    height: 0.4rem;
    /*background: url(../image/my/oneself-arrow.png) no-repeat;*/
/*    background-size: 1.2rem 0.9rem;*/
    float: right;
}
.oneself_arrow1 img{width:100%;height:100%;}
.center_fanli {
    width: 67%;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.1rem;
    display: block;
    overflow: hidden;
}
.center_fanli p {
    font-size: 0.3rem;
    color: #fff;
    line-height: 0.4rem;
    display: block;
}
.center_tab {
    width:85%;
    height: 1.4rem;
    border-top: 2px dashed #fff;
    position: absolute;
    left: 0.48rem;
    bottom: 0.1rem;
}
.center_tab .tab1 {
    width:43%;
    display: block;
    height: 1rem;
    text-align: center;
    line-height: 0.55rem;
    float: left;
    padding: 0.2rem;
    
}
/*.center_tab .tab1 .tab1_pic {
    width: 0.5rem;
    height: 0.3rem;
    margin: 0 auto;
}*/
.tab1_pic_tab4{width:17%;height:0.5rem;margin-left:40%;}
.tab1_pic_tab4 img{width:100%;height:100%;}
.center_tab .tab1 p {
    font-size:0.3rem;
    color: #fff;

    line-height:0.6rem;
}
#center_content {
    width: 100%;
    min-height:8rem;


}
/*ul, li {
    list-style: none;
}*/
#center_content ul {
/* display: table;*/
    width: 100%;
    margin:0 auto;
    z-index:100;
}
#center_content ul li{

}
#center_content ul li a {
    display: block;
    width: 33.333%;
    height: 1.8rem;
    border-bottom: 1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
    float: left;
    box-sizing: border-box;
   /* margin-top: -1px;*/
}
.content_ico1 {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0.2rem auto 0.2rem;
    text-align: center;
}
.content_ico1 img {
    width: 100%;
    height: 100%;
}
#center_content ul li .contrnt_a .content_text1 {
    width: 100%;
    height: 0.4rem;
    margin: 0 auto;
    text-align: center;
    line-height:0.4rem;
}
.content_text1 p {
    font-size: 0.3rem;
    color: #565656;
    margin:0 auto;
}
</style>
