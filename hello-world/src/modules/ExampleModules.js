const axios = require('axios').default;

/* eslint-disable no-unused-vars */

export default {
    namespaced: true,
    state: {
        count: 0,
        people: [],
    },
    actions: {
        GetStringFromAPI({ commit }) {
            console.log("knock to api")
            axios.get('https://swapi.dev/api/people')
                .then(function (response) {
                    console.log("got the response, parsing further")
                    const results = response.data.results
                    const people = results.map(obj => obj)
                    commit('SetPeople', people)
                });
        }
    },
    mutations: {
        SetPeople(state, val) {
            state.people = val
            console.log(state.people)
        },
    }
}