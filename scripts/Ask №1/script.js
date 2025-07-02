
/* -------------------------------------------------------------------------- */
/*                                  Пример 1                                  */
/* -------------------------------------------------------------------------- */

let button_1 = document.querySelector('#button-task-1-example-1')

button_1.addEventListener('click', () => {


    function higherOrderFunction(callback) {
        console.log("1. Вызов функции высшего порядка");
        callback();
    }

    function callbackFunction() {
        console.log("2. Вызов функции переданной в качество аргумента");
    }

    higherOrderFunction(callbackFunction);

})

/* -------------------------------------------------------------------------- */
/*                                  Пример 2                                  */
/* -------------------------------------------------------------------------- */

let button_2 = document.querySelector('#button-task-1-example-2');

button_2.addEventListener('click', () => {
    
    function createTextMessage(startMessage){
        return function (message) {
            console.log(`${startMessage}, ${message}!`);
        }
    }

    let createGreeting = createTextMessage('Привет');
        createGreeting('пользователь');
    
    let createGoodbye = createTextMessage('Пока');
        createGoodbye('человек');

})


/* -------------------------------------------------------------------------- */
/*                                  Пример 3                                  */
/* -------------------------------------------------------------------------- */

let button_3 = document.querySelector('#button-task-1-example-3');

button_3.addEventListener('click', () => {
    function operationWithArray(arr, operation){
        return arr.map(operation);
    }

    function square(number){
        return number * number;
    }

    function double(number){
        return number * 2;
    }

    let initialArray = [2, 3, 4, 6];
    console.log(initialArray);

    console.log(`Возведение в квадрат: ${[...operationWithArray(initialArray, square)]}`)

    console.log(`Умножение на 2: ${[...operationWithArray(initialArray, double)]}`)
})

// function processArray(array, operations) {
//   return operations.reduce((acc, operation) => operation(acc), array);
// }

// const numbers = [1, 2, 3, 4, 5];

// // Using processArray to perform multiple operations
// const result = processArray(numbers, [
//   arr => arr.map(num => num * 2),
//   arr => arr.filter(num => num % 3 === 0)
// ]);
// console.log(result); // Output: [6]

/* -------------------------------------------------------------------------- */
/*                                  Пример 4                                  */
/* -------------------------------------------------------------------------- */

let button_4 = document.querySelector('#button-task-1-example-4');

button_4.addEventListener('click', () => {
    console.log('Функции высшего порядка, которые есть в JS')
    let HOF_names = ['Array.prototype.map()', 'Array.prototype.filter()', 'Array.prototype.reduce()', 'Array.prototype.forEach()', 'Array.prototype.some()', 'Array.prototype.every()'];

    HOF_names.forEach((name) => console.log(` - ${name}`))

    // ========================== Array.prototype.map()
    let msg = ['Эту', 'строку', 'писал', 'НЛО'];

    console.log(`Исходный массив: [${[...msg]}]`)

    let mapMsg = msg.map(word => word.toUpperCase())
    console.log(`Работа Map: [${[...mapMsg]}]`)

    // ========================== Array.prototype.filter()
    let filterMsg = msg.filter(word => word.length == 3);
    console.log(`Работа Filter: [${[...filterMsg]}]`)

    // ========================== Array.prototype.reduce()
    let reduceMsg = msg.reduce((acc, word, index, arr)=>{
        acc += word.length;
        if (index === arr.length - 1){
            return Math.round(acc/arr.length);
        }else{
            return acc
        }
    }, 0)

    console.log(`Работа Reduce, средняя длина слова в массиве: ${reduceMsg}`)

    // ========================== Array.prototype.forEach()
    let forEachMsg = [...msg];
    console.log(`Работа forEach: `)
    forEachMsg.forEach(word => console.log(`* ${word.split('').reverse().join('')}`));



    // ========================== Array.prototype.some()
    let isSomeMsg = msg.some(word => word.toLowerCase().startsWith('э'));
    console.log(`Работа some: ${isSomeMsg}`)


    // ========================== Array.prototype.every()

    let isWordMore3 = msg.every(word => word.length >= 3);
    console.log(`Работа every length >= 3: ${isWordMore3}`)

    let isWordLess3 = msg.every(word => word.length <= 3);
    console.log(`Работа every length <= 3: ${isWordLess3}`)


})
