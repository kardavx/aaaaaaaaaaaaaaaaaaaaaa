const axios = require('axios').default;

/* eslint-disable no-unused-vars */

function GetRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export default {
    namespaced: true,
    state: {
        count: 0,
        names: [],
        defaultapi: "https://swapi.dev/api/people/1",
        apilist: ["https://swapi.dev/api/people/1", "https://swapi.dev/api/people/2", "https://swapi.dev/api/people/3"]
    },
    actions: {
        GetStringFromAPI({ state }, lookinjson, arraytoinsert) {
            console.log(lookinjson + " function fired")
            let ApiChoosen = GetRandomFromArray(state.apilist)
            console.log(ApiChoosen)
            if (ApiChoosen == null) {
                ApiChoosen = state.defaultapi
            }
            console.log("knock to api")
            axios.get(ApiChoosen)
                .then(function (response) {
                    console.log("got the response, parsing further")
                    const obj = response.data
                    if (obj[lookinjson]) {
                        console.log("formatting the json table and parsing that back")
                        if (state.names) {
                            console.log("found")
                            console.log(state.apilist.indexOf(ApiChoosen))
                            state.names.push(obj[lookinjson])
                            console.log(state.names)
                        }
                        //return obj[second]
                    }
                });
        }
    },
}