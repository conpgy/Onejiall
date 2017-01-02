<template>
    <div id="live">
        <div class="video-tips">PC下请使用Safari浏览器进行播放</div>
        <div class="anchor-wrapper">
            <video src="http://60.205.190.199:80/hls/demo.m3u8"
                   preload="auto"
                   controls="controls"
                   poster="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/fun/confused.png"
                   width="500px"
                   height="350px"
            >
                你的浏览器不支持video播放
            </video>
            <div class="live-title">请欣赏相声表演</div>
        </div>

        <div class="anchor-wrapper">
            <video controls="controls" poster="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/mimi.png" width="500px" height="350px">
                <source src="http://onejiall.oss-cn-beijing.aliyuncs.com/info/videos/story.mp4" type="video/mp4" />
                你的浏览器不支持video播放
            </video>
            <div class="live-title">大帅哥的直播间</div>
        </div>

        <div class="message-section">
            <ul class="message-list" ref="list">
                <message v-for="message in messages" :key="message.id" :message="message"></message>
            </ul>
            <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
        </div>
    </div>
</template>

<script>
import Message from './message.vue'
import { mapGetters } from 'vuex'

    export default {
        components: { Message },
        computed: {
            ...mapGetters({
                messages: 'currentMessages'
            })
        },
        methods: {
            sendMessage(e) {
                const text = e.target.value
                if(text.trim()) {
                    this.$store.dispatch('sendMessage', {
                        text, "nickname":this.$store.state.nickname
                    })
                    e.target.value = ''
                }
            }
        }
    }

</script>

<style scoped>
    .video-tips {
        color: orange;
        font-size: 12px;
        margin-bottom: 10px;
    }

    video {
        background-color: grey;
    }

    .anchor-wrapper {
        margin-bottom: 40px;
    }

    #chat-area {
        width: 300px;
        height: 200px;
    }

.message-list {
    border: 1px solid #ccf;
    font-size: 16px;
    height: 400px;
    margin: 0;
    padding: 0;
    overflow-y: auto;
}

.message-section {
    width: 50%;
}

.message-list-item {
    list-style: none;
    padding: 12px 14px 14px;
}


.message-composer {
    box-sizing: border-box;
    font-size: 14px;
    height: 5em;
    width: 100%;
    padding: 10px;
    margin: 20px 0 0;
}

</style>