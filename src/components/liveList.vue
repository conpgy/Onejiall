<template>
    <div id="list-list">
        <div class="live-wrap">
            <div class="live-item" @click="gotoRoom(1)">
                <img width=400px height=250px src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/fun/confused.png" />
            </div>
            <div class="live-item" @click="gotoRoom(2)">
                <img width=400px height=250px src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/mimi.png" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                messages: 'currentMessages',
                lastMessage: 'lastMessage'
            })
        },
        methods: {
            gotoRoom: function(roomId) {
                console.log("roomId: " + roomId)
                this.$router.push("/live")
            }
        }
    }
</script>

<style>
    .live-item {
        display: inline-block;
        padding-right: 20px;
    }
</style>