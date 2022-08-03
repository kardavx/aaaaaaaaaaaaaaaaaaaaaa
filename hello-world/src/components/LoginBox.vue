<template>
  <div id="mainbox">
    Wybrane: {{ count }}

    <select id="select1" v-model="selected">
      <option disabled value="">wybierz jedno</option>
      <option>Opcja 1</option>
      <option>Opcja 2</option>
      <option>Opcja 3</option>
    </select>
  </div>
</template>

<script>

// import { mapActions } from "vuex"

export default {
  name: 'LoginBox',
  data() {
    return {
      selected: "Opcja 1"
    }
  },
  created() {
    console.log(this.$store)
  },
  methods: {
    // ...mapActions ({
    //   metoda: 'test/GetStringFromAPI'
    // })
  }
}

</script>

<style scoped>

#mainbox {
  width: 35vw;
  height: 35vw;
  position: absolute;
  background-color: lightgray;
  box-shadow: 1px 1px 2px gray, 0 0 25px gray, 0 0 5px lightgray;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px 60px 15px 60px;
}

#select1 {
  position: absolute;
  transform: translate(-50%, -50%);
  top:50%;
  left: 50%;

}

</style>
