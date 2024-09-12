# Make any JS entity iterable:

```js
const getIterable = require("always-iterable");

const entities = [
  null,
  undefined,
  10,
  true,
  Symbol.iterator,
  10n,
  [1, 2, 3],
  "123",
  [true, {}],
  { a: 1, b: { c: 2 } },
  () => 12345,
  function* gen() {
    yield 123;
  },
  class ABC {},
];

entities.forEach((entity) => {
  for (const item of getIterable(entity)) {
    console.log(item);
  }
});

// result:

// null
// undefined
// 10
// true
// Symbol(Symbol.iterator)
// 10n
// 1
// 2
// 3
// 1
// 2
// 3
// true
// {}
// [ 'a', 1 ]
// [ 'b', { c: 2 } ]
// 12345
// 123
// class ABC {}
```
