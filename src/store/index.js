import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'


Vue.use(Vuex)

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
    getters
})