function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator')
  console.log(target, propertyName)
}

function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor Decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function LoggerMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('\n\n Method Logger Decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function LoggerParamether(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log('\n\n LOGGER PARAMETHER DECORATOR')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @LogAccessor
  set price(value: number) {
    if (value > 0) this._price = value
    else throw new Error('Value must be grater than zero')
  }

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @LoggerMethod
  getPriceWithTax(@LoggerParamether tax: number): number {
    return this._price * (1 + tax)
  }
}
