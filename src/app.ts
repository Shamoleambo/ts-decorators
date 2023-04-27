function Logger(stringParam: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(stringParam)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (_: Function) {
    console.log('WITH TEMPLATE TEST')
    const hookEl = document.getElementById(hookId)
    if (hookEl) hookEl.innerHTML = template
  }
}

@WithTemplate('<h1>Test</h1>', 'app')
@Logger('LOGGER')
class Person {
  name = 'Mano'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
