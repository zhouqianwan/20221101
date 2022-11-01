<!-- 定义组建的模板 -->
<template>
    <div class="box">
        <h3>这是自定义的test.vue文件</h3>
        <h3>{{username}}</h3>
        <h3>{{num}}</h3>
        <button @click="more">more按钮</button>
        <button @click="add">add按钮</button>
    </div>
</template>

<!-- 定义组建的行为 -->
<script>
// 默认导出 固定写法
    export default{
        // data数据源 
        // vue组件中的data不能像之前一样，不能指向对象
        // 注意：组建中的data必须是一个函数
        data(){
            return {
                username:"zhangsan",
                num:52
                
            }
        },
        methods:{
            add(){
                console.log("调用了add这个方法");
            },
            more(){
                this.num++
            }
        }
    }
</script>

<!-- 定义组件的样式 -->
<style lang="less">
.box {
    width:500px;
    height: 100px;
    background-color: pink;   
    button{
        width: 200px;
        height: 50px;
        background-color: orange;
    } 
}
</style>