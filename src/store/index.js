import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import chatApi from '../api/chat'
import * as types from './mutation-types'


Vue.use(Vuex)


export function createChatApiPlugin() {
    return store => {
        chatApi.onMessage(message => {
            store.commit(types.RECEIVE_MESSAGE, {
                message
            })
        })
    }
}

const chatPlugin = createChatApiPlugin()

export default new Vuex.Store({
    state: {
		isLogin: false,
		nickname: '',
        lastMessage: null,
        messages: {
            /* id: {id,nickname, text, timestamp} */
        },
        videos: [
            {
                id: 0,
                img: "http://onejiall.oss-cn-beijing.aliyuncs.com/picture/fun/confused.png",
                src: "http://60.205.190.199:80/hls/demo.m3u8",
                title: "精彩的相声表演"
            },
            {
                id: 1,
                img: "http://onejiall.oss-cn-beijing.aliyuncs.com/picture/mimi.png",
                src: "http://onejiall.oss-cn-beijing.aliyuncs.com/info/videos/story.mp4",
                title: "大帅哥的直播间"
            }
        ]
	},
    mutations,
    actions,
    getters,
    plugins: [chatPlugin]
})