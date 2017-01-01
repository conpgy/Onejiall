import * as chatApi from '../api/chat'
import * as types from './mutation-types'

export const sendMessage = ({ commit }, payload) => {
    chatApi.createMessage(payload, message => {
        commit(types.RECEIVE_MESSAGE, {
            message
        })
    })
}