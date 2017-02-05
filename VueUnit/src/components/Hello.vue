<template>
  <div class="hello" @click="getData">
    <h1>{{ msg }}</h1>
    <p>{{ver}}</p>
  </div>
</template>

<script lang="babel">
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ver: []
    }
  },
  methods: {
    getData () {
      return axios.get('/v2/58970a841100006218c0ddbf').then(response => {
        let data = response.data
        this.ver = data.result

        return data
      })
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
