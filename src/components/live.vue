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


        <div>
            <textarea id="chat-area" readonly></textarea><br />
            <input type="text" id="msg" />
            <button onclick="sendMsg()">发送</button>
        </div>

    </div>
</template>

<script>
    export default {
    }

    // var ws = new WebSocket("ws://localhost:8092/chat")
    // ws.onopen = function() {
    //     console.log("websocket opened")
    // }

    // ws.onmessage = function(message) {
    //     console.log("message: " + message)
    // }

    // ws.onclose = function() {
    //     console.log("websocket closed.")
    // }

    // ws.onerror = function() {
    //     console.log("websocket: errror")
    // }

    // function sendMsg() {
    //     ws.send("hello")
    // }

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

</style>