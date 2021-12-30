function cachingDecoratorNew(func) {
let cache = [];
    
  return function wrapper(...args) {
    let hash = args.join(','); 
    let idx = cache.findIndex((item) => item.hash === hash); 
    if (idx !== -1 ) {
        console.log(`Из кэша: ${cache[idx].result}`);
        return `Из кэша: ${cache[idx].result}`;
    }
    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
}



function debounceDecoratorNew(func) {
  // Ваш код
}



function debounceDecorator2(func) {
  // Ваш код
}

