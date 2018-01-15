<template>
  <div id="app">
    <el-button @click="filterVisible = !filterVisible">Toggle {{inputData}}</el-button>
    <el-table :data="tableData">
      <el-table-column label="tableHeader" prop="dataProp" :render-header="tableHeader"></el-table-column>
      <el-table-column label="tableHeader2" prop="dataProp2" :render-header="tableHeader2"></el-table-column>
      <el-table-column label="tableHeader3" prop="dataProp3" :render-header="tableHeader3.column3"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="tsx">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    tableData = [{dataProp: 123}]
    inputData = 'foo'
    filterVisible = true


    tableHeader(h, params) { // works fine
      return (
        <div>
          tableHeader
          <el-input v-show={this.filterVisible} value={this.inputData} onInput={this.inputChange}></el-input>
        </div>
      )
    }

    tableHeader2 = (h, params) => { // won't toggle visible
      return (
        <div>
          tableHeader2
          <el-input v-show={this.filterVisible} value={this.inputData} onInput={this.inputChange}></el-input>
        </div>
      )
    }

    tableHeader3 = {
      column3: (h, params) => { // won't toggle visible
        return (
          <div>
            tableHeader3
            <el-input v-show={this.filterVisible} value={this.inputData} onInput={this.inputChange}></el-input>
          </div>
        )
      }
    }

    inputChange(value: string): void {
      console.log('inputData changed', value)
      this.inputData = value
    }
  }
</script>
