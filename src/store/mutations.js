import * as types from './mutation-types'
import {set} from 'vue'

export default {
    [types.LOGIN_SUCCESS] (state) {
        state.isLogin = true
        state.nickname = localStorage.getItem('nickname')
    },
    [types.LOGOUT_SUCCESS] (state) {
        state.isLogin = true
        state.nickname = ''
    },

    [types.RECEIVE_MESSAGE] (state, { message }) {
        addMessage(state, message)
    }
}

function addMessage(state, message) {
    set(state.messages, message.id, message)
    state.lastMessage = message
}