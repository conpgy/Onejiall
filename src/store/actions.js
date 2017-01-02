import chatApi from '../api/chat'
import * as types from './mutation-types'

export const sendMessage = ({ commit }, payload) => {
    chatApi.createMessage(payload)
}