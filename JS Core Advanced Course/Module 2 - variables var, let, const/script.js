// Создайте функцию и внутри неё объявите переменные с использованием var, let и const.
// Попробуйте обратиться к этим переменным вне функции. Какие переменные будут видны снаружи функции, а какие нет?

function testFunc(){
    let variable1 = 'Hello';
    var variable2 = 'World';
    const variable3 = 15;
}

console.log(variable1); // variable1 is not defined
console.log(variable2); // variable2 is not defined
console.log(variable3); // variable3 is not defined

// Какие переменные будут видны снаружи функции, а какие нет? 
// Ответ: Никакие, так как через любое объявление переменных с помощью let, const видны только в блочной области видимости (различные циклы, for, while, ...), 
// а var имеет функциональную область вдимости, что как раз в нашем примере и показывается.