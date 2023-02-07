import {greet} from '../src/main'

describe('Main test',()=>{
    test('the data is peanut butter',()=>{
        expect(1).toBe(1)
    })

    it('greeting',()=>{
        expect(greet('Foo')).toBe('Hi,hei Foo')
    })
})