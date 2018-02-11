<template>
  <!--<img src="../assets/logo.png">-->
  <!-- <img src="~../assets/acada-me_alphabg.png"> -->
  <!--<img :src="logo">-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="#/results"
        >
          Results
        </a>
      </li>
      <li>
        <a
          href="#/get"
        >
          SearchGrants
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import logo from '../assets/acada-me_alphabg.png'

export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Lets fund your research!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
