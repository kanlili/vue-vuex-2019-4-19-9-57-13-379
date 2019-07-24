<template>
  <div>
    <InputBar @getItem="onPushTodoItem($event)"></InputBar>
    <ListContainer></ListContainer>
  </div>
</template>
<script>
import InputBar from "./InputBar";
import ListContainer from "./ListContainer";
export default {
  name: "Body",
  data: function() {
    return {};
  },
  components: {
    InputBar,
    ListContainer
  },
  methods: {
    onPushTodoItem(val) {
      this.$store.commit("addItem", {
        value: val
      });
    }
  }
};
</script>
<style>
</style>