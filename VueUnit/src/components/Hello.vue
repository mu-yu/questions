<template>
  <div class="hello" @click="changeSize(25)">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="babel">
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      size: 10
    }
  },
  methods: {
    changeSize (newSize) {
      this.size = newSize
      this.reRender()
    },
    reRender () {
      this.msg = 'balabala...'
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
