import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../component/home.vue';
import List from '../component/list.vue';
import Rebate from '../component/rebate.vue';
import My from '../component/my.vue';
import Store from '../component/store.vue';
import ChildList from '../component/list/childList.vue';
import Login from '../component/mine/login.vue';
import Zhuce from '../component/mine/zhuce.vue';
import Dingdan from '../component/mine/dingdan.vue';
import Gerenziliao from '../component/mine/gerenziliao.vue';
import Shoucang from '../component/mine/shoucang.vue';
import Zichanchild from '../component/mine/zichanchild.vue';
import Dingdanrenling from '../component/mine/dingdanrenling.vue';
import Detail from '../component/store/detail.vue';
import pinpai from "../component/pinpai.vue";
import ppdetail from "../component/ppdetail.vue";
const routes=[
	{ path: '/home', component: Home },
	{path:'/pinpai',component:pinpai},
	{path:'/ppdetail/:goodID',component:ppdetail},
	
	{ path: '/list', component: List },
	{ path: '/my', component: My },
	{ path: '/rebate', component: Rebate },
	{ path: '/store', component: Store },
	{ path: '/childList/:name/:id', component: ChildList },
	{ path: '/detail/:goodsID', component: Detail },	
	{ path: '/login', component: Login },
	{ path: '/zhuce', component: Zhuce },
	{ path: '/dingdan', component: Dingdan },
	{ path: '/gerenziliao', component: Gerenziliao },
	{ path: '/shoucang', component: Shoucang },
	{ path: '/zichanchild', component: Zichanchild },
	{ path: '/dingdanrenling', component: Dingdanrenling },
	{ path: '/detail', component: Detail },
	 {path:"*",redirect:"/home"}
]
	

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router

