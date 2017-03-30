<template>
  <div id="detail">
		
 		我是详情页
 		
   </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {      	
    }
  },
  computed:{
  	list:function(){
  		//console.log() 
  		return this.$store.state.datalist;
  
  	}
  }
}
</script>

<style>


</style>
