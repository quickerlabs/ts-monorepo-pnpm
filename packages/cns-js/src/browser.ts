import {foo} from './main'

(window as any).foo = foo 
console.log('Method "foo" was added to window object,You can try it yourself by like: "await foo()"')