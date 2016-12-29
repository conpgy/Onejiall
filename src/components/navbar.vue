<template>
    <div id="header">
        <span class="slogan"><router-link to="/">{{ title }}</router-link></span>
        <ul id="nav">
            <li><router-link to="/live">直播间</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><router-link to="/login">登录</router-link></li>
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
