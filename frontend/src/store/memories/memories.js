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
            state.memories.splice(payload.id, 1)
        },
        EDIT_MEMORY() {

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
        },
        setCurrent(context, payload) {
            axios.get(`${baseApiUrl}/memories/getById/${payload.id}`).then((resp) => {
                console.log(resp)
                context.commit('SET_CURRENT_MEMORY', resp.data)
            })
        },
        editMemory(context, payload) {
            let uri = `${baseApiUrl}/memories/update/${payload.id}`
            axios.put(uri, {
                id: payload.id,
                title: payload.title,
                description: payload.description
            }
            ).then((response) => {
                console.log(response)
            })
        },
        deleteMemory(context, payload) {
            axios.delete(`${baseApiUrl}/memories/delete/${payload.id}`)
                .then((resp) => {
                    console.log(resp)
                    // context.commit('REMOVE_MEMORY', payload)
                    context.dispatch('setMemories')
                })
        }
    },
    getters: {
        getMemories(state) {
            return state.memories
        }
    }
}
