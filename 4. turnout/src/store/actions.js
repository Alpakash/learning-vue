import * as types from './mutation_types'

export const signIn = ({commit}, payload) => {
    commit(types.SIGN_IN, payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const setEvents = ({commit}, events_payload) => {
    commit(types.SET_EVENTS, events_payload)
}