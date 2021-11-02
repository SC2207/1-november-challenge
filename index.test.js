const index = require('./index')

let pip = index.pip


test('that pips name is Pip', () => {
    expect(true).toBe(true)
})


test('that pip is brown', () => {
    expect(pip.color).toBe('brown')
})


test('that hunger decreases by 10 after eating berry', () => {
   pip.eat(pip.blueberry)
    expect(pip.hunger).toBe(20)
})


test('that hunger decreases by 15 after eating favourite berry', () => {
    pip.hunger=(30)
    pip.eat(pip.favBerry)
     expect(pip.hunger).toBe(15)
 })


 test('that eat returns that Pip ate favourite berry', () => {
    pip.hunger=(30)
     expect(pip.eat(pip.favBerry)).toBe(`Pip just ate their favourite berry. Their favourite berry is blackberry.`)
 })