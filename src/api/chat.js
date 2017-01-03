import * as store from '../store'
const LATENCY = 16

const chatApi = {
    socket: null,
    isConnect: false,
    name:"chatApi",
    messageCallback: null,
    onMessage: function(callback) {
        console.log("onMessage:")
        console.log(callback)
        this.messageCallback = callback
    },

    initSocket: function() {

        if(this.socket) {
            console.log("socket has created.")
            return
        }

        this.socket = new WebSocket("ws://meet.xpro.im:8080/xgate/websocket/thisisatestname")

        this.socket.onopen = function() {
            console.log("websocket opened")
            chatApi.isConnect = true
        }

        this.socket.onmessage = function(message) {
            let json = JSON.parse(message.data)
            let from = json.from
            let xnest = json.xnest
            let type = json.type
            let payloadString = json.payload
            let sendTime = json.send_time

            // console.log("from: " + from)
            // console.log("xnest: " + xnest)
            // console.log("type: " + type)
            // console.log("payloadString: " + payloadString)
            // console.log("sendTime: " + sendTime)

            if(type === 'normal') {
                let payload = JSON.parse(payloadString)
                chatApi.messageCallback(payload)
            }

        }

        this.socket.onclose = function() {
            console.log("websocket closed.")
        }

        this.socket.onerror = function() {
            console.log("websocket: errror")
        }
    },
    createMessage: function(payload) {
        
        if(!this.isConnect) {
            this.initSocket()
        }

        const timestamp = Date.now()
        const id = 'm_' + timestamp
        const nickname = payload.nickname
        const text = payload.text
        const message = {
            id,
            text,
            timestamp,
            nickname
        }

        if(this.isConnect) {
            let jsonString = JSON.stringify(message)
            this.socket.send(jsonString)
        }
        
    }
}

export default chatApi