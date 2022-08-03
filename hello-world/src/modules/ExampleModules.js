const axios = require('axios').default;

export default {
    namespaced: true,
    state: {
        count: 0,
    },
    actions: {
        GetStringFromAPI(_, second) {
            axios.get(`https://swapi.dev/api/people/1`)
                .then(function (response) {
                    const obj = response.data
                    if (obj[second]) {
                        return obj[second]
                    }
                });
        }
    },
}