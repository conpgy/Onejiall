<template>
    <div id="header">
        <span class="slogan"> {{ title }} </span>
        <ul id="nav">
            <li><a href="/live">直播间</a></li>
            <li><a href="/login">登录</a></li>
        </ul>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
    export default{
        data(){
            return{
                title:'一即一切,一切即一'
            }
        }
    }
</script>

<style scoped>
    #header {
        background-color:#2ca6cb;
        color:#fff;
        height:60px;
    }

    .slogan {
        line-height: 60px;
        font-size: 24px;
        padding-left: 30px;
    }

    #nav {
        margin-right: 30px;
        float: right;
        line-height: 60px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

</style>
