<template>
  <div class="app">
    <div class="box">
      <h1>这是app</h1>
      <input type="text" v-model="num">
      <h1>{{num}}</h1>
      <button @click="add">+1</button>
      <button @click="subtract">-1</button>
    </div>
    <Myleft :init="9"></Myleft>
    <Myright></Myright>
  </div>
</template>

<!-- 定义行为 -->
<script>
import left from '@/components/left.vue';
import right from '@/components/right.vue'
  export default{
    data(){
      return {
        name:"zhangsan",
        num:52
      }
    },
    methods:{
      add(){
        this.num++;
      },
      subtract(){
        this.num--;
      }
    },
    components:{
      left,
      right
    }
  }
</script>

<!-- 定义样式 -->
<style scoped>
   /deep/ h1{
    color: red;
  }
  .box {
    background-color: yellow;
  }
  .app{
    width: 1200px;
   height: 800px;
   background-color: pink;
  }
  #left{
    width: 500px;
    height: 200px;
    background-color: blue;
  }
  #right{
    width: 520px;
    height: 400px;
    background-color:orange;
  }
</style>