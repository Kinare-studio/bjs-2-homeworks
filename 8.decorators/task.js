function cachingDecoratorNew(func) {
  let cache = [];

  return function wrapper(...args) {
    let hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log(`Из кэша: ${cache[idx].result}`);
      return `Из кэша: ${cache[idx].result}`;
    }
    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
}



function debounceDecoratorNew(func, ms) {
  let flag = false;

  return function wrapper(...args) {
    if (flag === false) {
      func.apply(this, args);
    }
    flag = true;
    setTimeout(() => flag = false, ms);
  };
}


function debounceDecorator2(func, ms) {
  let flag = false;

  function wrapper(...args) {
    wrapper.count.push(args);
    if (flag === false) {
      func.apply(this, args);
    }
    flag = true;
    setTimeout(() => flag = false, ms);
  }
  wrapper.count = [];
  return wrapper;
}
