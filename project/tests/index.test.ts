import { adder } from '../src/index'

describe('Add function', () => {
  it('add two numbers', () => {
    expect(adder(1, 2)).toEqual(3)
  })
})
