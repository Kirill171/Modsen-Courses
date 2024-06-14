// Напишите функцию, которая конвертирует функцию, основанную на callbacks, в функцию, основанную на Promises.

const fs = require('fs');
// const util = requore('util'); так же в util уже имеется метод promisify который нам и нужно сделать


fs.readdir(__dirname, (err, files) => {     // колбэк вариант
  if(err) throw err;
  console.log(files);

  files.forEach(file => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if(err) throw err;

      console.log(data);
    })
  })

});

function promisify(fn) {      // промисифицированный вариант
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) return reject(err);

        resolve(data);
      });
    });
  }
}

const readdir = promisify(fs.readdir);      // могло выглядеть как util.promisify(fs.readdir); и результат был бы такой же
const readFile = promisify(fs.readFile);      // могло выглядеть как util.promisify(fs.readFile); и результат был бы такой же

readdir(__dirname)
    .then(files => files.map(file => readFile(file, 'utf-8')))
    .then(results => Promise.all(results))
    .then(data => console.log(data[0]))
    .catch(err => console.log(err));

// в этой теме чувствую себя не комфортно/не уверенно :(