const getIterable = require("./index");

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
