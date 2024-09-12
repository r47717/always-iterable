module.exports = (entity) => {
  if (
    entity === undefined ||
    entity === null ||
    typeof entity === "number" ||
    typeof entity === "boolean" ||
    typeof entity === "bigint" ||
    typeof entity === "symbol"
  ) {
    return [entity];
  }

  if (entity[Symbol.iterator]) {
    return entity;
  }

  if (typeof entity === "object") {
    return Object.entries(entity);
  }

  if (typeof entity === "function") {
    const str = entity.toString();

    if (str.startsWith("class ")) {
      return [str];
    }

    const value = entity();

    if (value[Symbol.iterator]) {
      return value;
    }

    return [value];
  }
};
