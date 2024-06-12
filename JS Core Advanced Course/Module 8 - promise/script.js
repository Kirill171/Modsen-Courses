// Напишите функцию, которая конвертирует функцию, основанную на callbacks, в функцию, основанную на Promises.


// не сделал
function doSomething() {
    return function (...args) {
        return new Promise((resolve, reject) => {
          console.log("Готово.");
          if (Math.random() > 0.5) {
            resolve("Успех");
          } else {
            reject("Ошибка");
          }
        });
    }
  }
  
  const promise = doSomething();
  promise.then(successCallback, failureCallback);

// ужас :(
// от просмотра примеров кода с различными Колбэк функциями и промисами, становится только хуже, не представляю как можно это совместить.