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

// const pers = new Person()

// console.log(pers)

class Product {
  title: string
  private _price: number

  set price(value: number) {
    if (value > 0) this._price = value
    else throw new Error('Value must be grater than zero')
  }

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax)
  }
}
