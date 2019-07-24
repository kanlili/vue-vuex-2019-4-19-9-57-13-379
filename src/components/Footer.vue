<template>
  <div id="footer">
    <ul id="filters">
      <li> <button @click="changeStatus('ALL')">ALL</button></li>
      <li><button @click="changeStatus('ACTIVE')">Active </button></li>
      <li><button @click="changeStatus('COMPLETE')">Complete </button> </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: function() {
    return {
    };
  },
  methods: {
    changeStatus(val) {
      this.$store.commit("setStatus",val)
    }
  }
};
</script>
<style >
li:hover {
  cursor: pointer;
}
#filters {
  text-align: center;
  margin-bottom: -10px;
  margin-top: 40px;
}
#filters li a {
  color: #fc999b;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
#filters li a.selected {
  border-color: rgba(0, 0, 0, 0.2);
}
#filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}
#filters li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
  background: white;
}
</style>
