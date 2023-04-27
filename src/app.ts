function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('LOG - PERSON')
class Person {
  name = 'Mano'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
