import * as types from './mutation_types'

export const mutations = {
    [types.SIGN_IN] (state, payload) {
        state.user = payload
    },

    [types.SIGN_OUT] (state) {
        state.user = {}
    },

    [types.SET_EVENTS] (state, events_payload) {
        state.events = events_payload
    }
}