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
console.log(chatPlugin)

export default new Vuex.Store({
    state: {
		isLogin: false,
		nickname: '',
        messages: {
            /* id: {id,nickname, text, timestamp} */
        }
	},
    mutations,
    actions,
    getters,
    plugins: [chatPlugin]
})