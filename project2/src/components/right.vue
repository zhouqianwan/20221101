<template>
    <div id="right">
        <div class="box">
            <h1>这是right组件</h1>
            <h3>{{num}}</h3>
            <button @click="num+=1">+1</button>
            <Myleft :init="5"></Myleft>
        </div>
    </div>
</template>


<script >
    export default{
        data(){
            return {
                num:56 ,
                name:"zhangsan" 
            }
        }
    }
</script>
<style scoped>
.box{
    background-color: deeppink;
}
    #app{
        margin-top: 30px;
        display: inline-block;
        background-color: orange;
       height: 300px;
    }
</style>