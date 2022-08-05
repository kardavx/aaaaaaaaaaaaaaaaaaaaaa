<template>
  <div id="mainbox">
    <span class="maintext">LOSOWE POSTACIE ZE STAR WARS</span>
    <span class="misctext">api provided by: https://swapi.dev/</span>
    <div class="tiles">
      <div class="tile" v-for="(n,i) in GetList" :key="i">
          <div id="appearance" :style="`background-color: ${GetColor(n.gender)}`">
            <span id="name" class="textintiles">{{ 'Imie: ' + n.name }}</span>
            <span id="age" class="textintiles">{{ 'Data urodzenia: ' + (n.birth_year == "unknown" ? "Nieznana" : n.birth_year) }}</span>
            <span id="height" class="textintiles">{{ 'Wzrost: ' + n.height + 'cm'}}</span>
            <span id="mass" class="textintiles">{{ 'Waga: ' + n.mass + 'kg'}}</span>
          </div>
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
    GetColor() {
      return (gender) => {
        if (gender == "female") return 'hotpink'
        else if (gender == "male") return 'lightblue'
        else return 'lightgray'
      }
    }
  },

  methods: {
    ...mapActions ({
      metoda: 'test/GetStringFromAPI'
    }),
  }
}

</script>

<style scoped>

#mainbox {
  width: 70vw;
  height: 35vw;
  position: absolute;
  background-color: lightgray;
  box-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px black;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
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
}

#appearance {
  width:100%;
  height: 100%;
  background-color: yellow;
  /*border-radius: 60px 60px 60px 60px;*/
}

.textintiles {
  text-align: center;
  color: white;
  width:60%;
  font-size: 1vw;
  text-shadow: 2px 2px 8px #000000;
  font-family: Arial;
  font-weight: bolder;
}

.maintext {
  text-align: center;
  color: yellow;
  width: 70%;
  font-size: 2vw;
  position: absolute;
  transform: translate(-50%, 20%);
  top: -20%;
  left: 50%;
  text-shadow: 2px 2px 8px #000000;
  font-family: Arial;
  font-weight: bolder;
}

.misctext {
  text-align: center;
  color: white;
  width: 40%;
  font-size: 0.5vw;
  position: absolute;
  transform: translate(-50%, -125%);
  top: 125%;
  left: 50%;
  font-family: Arial;
  font-weight: bolder;
}

#name {
  position: absolute;
  text-align: center;
  transform: translate(-22%, -45%);
  top:45%;
}

#age {
  position: absolute;
  text-align: center;
  transform: translate(-22%, -50%);
  top:50%;
}

#height {
  position: absolute;
  text-align: center;
  transform: translate(-22%, -55%);
  top:55%;
}

#mass {
  position: absolute;
  text-align: center;
  transform: translate(-22%, -60%);
  top:60%;
}

</style>
