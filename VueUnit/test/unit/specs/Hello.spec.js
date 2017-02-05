import Vue from 'vue'
import Hello from 'src/components/Hello'

let id = 0

describe('Hello.vue', () => {
  it('get data correct', (done) => {
    let vm = createComp(Hello)

    console.log('test work: ---------===============------------------')
    vm.getData().then(retData => {
      console.log('retData: ---------===============------------------', retData)
      expect(vm.ver.length).equal(retData.result)
      done()
    }).catch(error => {
      console.log('error: ---------=============----------', error)
      done()
    })
  })
})

function createComp (Comp) {
  Comp.el = `#${createElm().id}`

  return new Vue(Comp).$mount()
}

function createElm () {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}
