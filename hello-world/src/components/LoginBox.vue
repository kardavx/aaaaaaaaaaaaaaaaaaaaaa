<template>
  <div id="mainbox">
    <div class="tiles" v-if="GetList">
      <div class="tile" v-for="n in GetList" :key="n">
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
      amountoftiles: 3
    }
  },

  created() {
    this.metoda()
  },

  computed: {
    ...mapState({
      people: state => state.test.names,
    }),
    GetList() {
      console.log(this.people)
      if (!this.people) {console.log("names empty"); return []}
      let LocalList = []
      console.log(this.people)
      for (let i = 0; i < this.amountoftiles; i++) {
        LocalList.push(this.people[Math.floor(Math.random() * this.people.length)])
      }
      console.log(LocalList)
      return LocalList
    }
  },

  methods: {
     ...mapActions ({
       metoda: 'test/GetStringFromAPI'
     }),
    // GetName() {
    //   console.log(this.names)
    //
    //   if (!this.names) {console.log("names empty"); return  "Ladowanie danych..."}
    //   if (this.names < 1 && this.names[1] != "object Promise") {
    //     return "Ladowanie danych..."
    //   }
    //   console.log(this.names)
    //   return this.names[Math.floor(Math.random() * this.names.length)]
    // },
    // GetCorrectName(corr_id) {
    //   const divs = document.querySelectorAll(".tile");
    //   for (let i = 0; i < divs.length; i++) {
    //     if (divs[i].id == corr_id) {
    //       for (let x = 0; x < divs[i].children.length; x++) {
    //
    //         if (divs[i].children[x].id == "name") {
    //
    //           return console.log(divs[i].children[x].textContent)
    //         }
    //       }
    //       // console.log(divs[i].name.textContent)
    //       // return divs[i].name.textContent
    //     }
    //   }
    // },
    // GetAge(corr_id) {
    //   console.log(this.birth_year)
    //
    //   if (!this.birth_year) {console.log("names empty"); return  "Ladowanie danych..."}
    //   if (this.birth_year < 1 && this.birth_year[1] != "object Promise") {
    //     return "Ladowanie danych..."
    //   }
    //   console.log(this.birth_year)
    //   console.log(this.names.indexOf(document.getElementById('name').textContent))
    //   this.GetCorrectName(corr_id)
    //  // return this.birth_year[this.names.indexOf(document.getElementById('name').textContent)]
    // }
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
