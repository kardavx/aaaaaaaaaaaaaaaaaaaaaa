<template>
  <div id="mainbox">
    <div id="tiles">
      <div id="tile">{{ GetName() }}</div>
      <div id="tile">{{ GetName() }}</div>
      <div id="tile">{{ GetName() }}</div>
    </div>
  </div>
</template>

<script>

/* eslint-disable no-unused-vars */

import { mapActions, mapState } from "vuex"

export default {
  name: 'LoginBox',

  created() {
    this.metoda("name","names")
  },

  computed: {
    ...mapState({
      names: state => state.test.names
    }),
  },

  methods: {
    // ...mapState ({
    //   names: state => state.names
    // }),
     ...mapActions ({
       metoda: 'test/GetStringFromAPI'
     }),
    GetName() {
      console.log(this.names)

      if (!this.names) {console.log("names empty"); return  "Ladowanie danych..."}
      if (this.names < 1 && this.names[1] != "object Promise") {
        return "Ladowanie danych..."
      }
      console.log(this.names)
      return this.names[Math.floor(Math.random() * this.names.length)]
    }
  }
}

</script>

<style scoped>

#mainbox {
  width: 70vw;
  height: 35vw;
  position: absolute;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray, 0 0 25px lightgray, 0 0 5px lightgray;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px 60px 15px 60px;
}

#tiles {
  margin: 2px auto;
  width: 100%;
  height:100%;
}

#tile {
  width: calc(100% / 3);
  display: inline-block;
  height: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray, 0 0 25px lightgray, 0 0 5px lightgray;
  border-radius: 60px 60px 60px 60px;
}

span {
  position: absolute;
  transform: translate(-50%, -50%);
  top:50%;
  left:50%;
}

</style>
