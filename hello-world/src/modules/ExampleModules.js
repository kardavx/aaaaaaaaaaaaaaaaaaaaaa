const axios = require('axios').default;

export default {
    namespaced: true,
    state: {
        count: 0,
    },
    action: {
        GetStringFromAPI() {
            axios.get(`https://swapi.dev/api/people/1/'`)
                .then(function (response) {
                    console.log(response.name)
                });
        }
    },
}