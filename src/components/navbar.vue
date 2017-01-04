<template>
    <div id="header">
        <span class="slogan"><router-link to="/">{{ title }}</router-link></span>
        <ul id="nav">
            <li><router-link to="/live-list">直播间</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li v-if="isLogin">Welcome, {{nickname}}</li>
            <li v-else><router-link to="/login">登录</router-link></li>
        </ul>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
    export default {
        props: ['isLogin',"nickname"],
        data() {
            return {
                title: '一即一切,一切即一'
            }
        },
        
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


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
