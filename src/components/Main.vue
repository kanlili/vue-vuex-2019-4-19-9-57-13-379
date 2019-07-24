<template>
 <div id="main">
    
  <h2>请输入姓名：</h2>
  <a-input id="input" placeholder="input your name"  v-model="inputValue" />
  <div>
   <a-button id="button"  @click="showMore">Login</a-button>
  </div>
</div>
</template>
<script>
export default {
  name: "Main",
  data: function() {
   return {
	inputValue: ""
   };
  },
  methods: {
   showMore() {
	this.$store.dispatch("setUserName", this.inputValue);
	this.$router.push({ path: `/home` });
	}
  }
};
</script>	
<style scoped>
#input {
    width: 150px;
}
#button {
	margin: 10px;
} 
</style>