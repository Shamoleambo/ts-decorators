function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) hookEl.innerHTML = template
  }
}

@WithTemplate('<h1>Test</h1>', 'app')
class Person {
  name = 'Mano'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
