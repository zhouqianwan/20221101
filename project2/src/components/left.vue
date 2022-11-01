<template>
    <div id="left">
        <div class="box">
            <h1>这是left组件</h1>
            <h3>{{num}}</h3>
            <!-- init自定义属性是制度属性，不能修改他的值 -->
            <button @click="num++">+1</button>
        </div>
    </div>
</template>

<script>
   export default{
    data(){
        return {
            name:"zhangsan",
            num:this.init
        }
    },
    props:{
        init:{
            default:0,
            // type:Number,
            required:true
        }
    }
   }
</script>

<style scoped>
.box {
    background-color: skyblue;
}
#app{
    display: inline-block;
    background: blue;
    height: 200px;
}
</style>