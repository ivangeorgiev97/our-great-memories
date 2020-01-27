/* eslint-disable no-console */

import axios from 'axios'

const baseApiUrl = 'http://localhost:8000/api'

export default {
    namespaced: true,
    state: {
        memories: [],
        currentMemory: {}
    },
    mutations: {
        SET_MEMORIES(state, payload) {
            state.memories = payload
        },
        SET_CURRENT_MEMORY(state, payload) {
            state.currentMemory = payload
        },
        REMOVE_MEMORY(state, payload) {
            state.clients.splice(payload.id, 1)
        }
    },
    actions: {
        setMemories(context) {
            axios.get(`${baseApiUrl}/memories/getAll`).then((resp) => {
                context.commit('SET_MEMORIES', resp.data)
            })
        },
        addMemory(context, payload) {
            axios.post(`${baseApiUrl}/memories/create`, {
                title: payload.title,
                description: payload.description
            })
            .then((resp) => {
                console.log(resp)
            })
        }
    },
    getters: {
        getMemories(state) {
            return state.memories
        }
    }
}
