<template>
    <div id="live">
        <div class="video-tips">PC下请使用Safari浏览器进行播放</div>
        <div class="anchor-wrapper">
            <video src=""
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
                <source src="" type="video/mp4" />
                你的浏览器不支持video播放
            </video>
            <div class="live-title">大帅哥的直播间</div>
        </div>

        <div class="message-section">
            <ul class="message-list" ref="list">
                <message v-for="message in messages" :key="message.id" :message="message"></message>
            </ul>
            <div class="message-send-wrapper">
                <button class="message-send" @click="sendMessage()">发送</button>
                <div class="message-composer-wrap">
                    <textarea v-model="inputMessage" class="message-composer" maxlength=100 @keyup.enter="sendMessage" placeholder="输入消息, 按Enter发送"></textarea>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Message from './message.vue'
import { mapGetters } from 'vuex'

    export default {
        data(){
            return {
                inputMessage: ''
            }
        },
        components: { Message },
        computed: {
            ...mapGetters({
                messages: 'currentMessages',
                lastMessage: 'lastMessage'
            })
        },
        methods: {
            sendMessage(e) {
                const text = this.inputMessage
                if(text.trim()) {
                    this.$store.dispatch('sendMessage', {
                        text, "nickname":this.$store.state.nickname
                    })
                    this.inputMessage = ''
                }
            }
        },
        watch: {
            'lastMessage': function() {
                this.$nextTick(() => {
                    const ul = this.$refs.list
                    ul.scrollTop = ul.scrollHeight
                })
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

.message-send-wrapper {
    height:60px;
    margin-top:20px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
}

.message-composer-wrap {
    margin-right: 80px;

}

.message-composer {
    box-sizing: border-box;
    font-size: 14px;
    padding: 10px;
    resize: none;
    width:100%;
    border: none;
    outline: none;
}

.message-send {
    float:right;
    width:80px;
    height:100%;
    border: none;
    outline: none;
    color: blue;
}

</style>