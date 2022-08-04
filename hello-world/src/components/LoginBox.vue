<template>
  <div id="mainbox">
    <div class="tiles">
      <div class="tile" v-for="(n,i) in GetList" :key="i" :style="`background-color: ${{GetColor}}`">
          <span id="name">{{ n.name }}</span>
          <span id="age">{{ n.birth_year }}</span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex"

export default {
  name: 'LoginBox',

  data() {
    return {
      amountoftiles: 3,
    }
  },

  created() {
    this.metoda()
  },

  computed: {
    ...mapState({
      people: state => state.test.people,
    }),
    GetList() {
      console.log("not null")
      let LocalList = []
      for (let i = 0; i < this.amountoftiles; i++) {
        LocalList.push(this.people[Math.floor(Math.random() * this.people.length)])
      }
      console.log(LocalList)
      return LocalList
    },
  },

  methods: {
    ...mapActions ({
      metoda: 'test/GetStringFromAPI'
    }),
    GetColor() {

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

.tiles {
  margin: 2px auto;
  width: 100%;
  height:100%;
}

.tile {
  width: calc(100% / 3);
  display: inline-block;
  height: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray, 0 0 25px lightgray, 0 0 5px lightgray;
  border-radius: 60px 60px 60px 60px;
}

span {
  text-align: center;
  font-size: 1vw;
}

#name {
  position: absolute;
  transform: translate(-50%, 0%);
  top:50%;
}

#age {
  position: absolute;
  transform: translate(-55%, 0%);
  top:55%;
}

</style>
