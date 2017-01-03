<template>
    <div id="login">
        <div class="name">
            <label>昵称: </label>
            <input type="text" v-model="nickname" placeholder="请输入用户名">
        </div>
        <button class="login" @click="login()">登录</button>
    </div>
</template>

<script>
import * as types from '../store/mutation-types'

    export default {
        data() {
            return {
                nickname: ''
            }
        },

        methods: {
            login: function() {
                if(!this.nickname.trim()) {
                    alert("昵称不能为空")
                    return
                }
                this.nickname = this.nickname.slice(0,10)
                if(localStorage) {
                    localStorage.setItem('nickname', this.nickname)
                }

                this.$store.commit(types.LOGIN_SUCCESS)
                this.$router.push("/")
            }
        }
    }

</script>

<style>

    button.login {
        margin-top: 20px;
        background-color: #3CAF36;
        width: 200px;
        height: 35px;
        color: #fff;
    }
</style>