import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);  

const store= new Vuex.Store({

	state:{
		datalist:[] //定义组件中的"状态"
	},

	actions:{
		ADD_ITEM_ACTION:(store,data)=>{
			//对于这个数据进行二次加工，或者是根据这个数据去后台请求数据


			//提交到mutation 
			store.commit("ADD_ITEM_MUTATION",data);
			
		},

		DEL_ITEM_ACTION:(store,data)=>{

			store.commit("DEL_ITEM_MUTATION",data);
		}
	},

	mutations:{

		ADD_ITEM_MUTATION:(state,data)=>{
			//操作state-》增加数据
			state.datalist.push(data);

		},

		DEL_ITEM_MUTATION:(state,index)=>{
			//根据索引值删除数据

			state.datalist.splice(index,1);
		}

	},

	getters:{
		//可以过滤,

		//共享计算属性
		complete:(state)=>{
			return state.datalist.filter(item=>item.marked==true).length;
		},
		uncomplete:(state)=>{
			return state.datalist.filter(item=>item.marked==false).length;
		}
	}

})


export default store;