/* -------------------------------------------------------------------------- */
/*                                  Пример 1                                  */
/* -------------------------------------------------------------------------- */
let button_task_11_1 = document.querySelector('#button-task-11-example-1')

button_task_11_1.addEventListener('click', () => {
    let myInitialArray = [1, 2, 3, 9, 5, 6, 7, 10, 4];

    console.log(`Начальный массив: [${myInitialArray}]`);

    myInitialArray.push(11);
    console.log(`Добавление элемента в конец (.push): [${myInitialArray}]`);

    myInitialArray.pop();
    console.log(`Удаление элемента в конце (.pop): [${myInitialArray}]`);

    myInitialArray.unshift(0);
    console.log(`Добавление элемента в начало (.unshift): [${myInitialArray}]`);

    myInitialArray.shift(0);
    console.log(`Удаление элемента в начале (.shift): [${myInitialArray}]`);

    myInitialArray.reverse();
    console.log(`Реверс массива: [${myInitialArray}]`);

    let newArray = [0, 0, 0, 0];
    newArray.fill(5, 0, 2);
    console.log(`Заполнение массива (.fill): [${newArray}]`);

    newArray.copyWithin(2, 0, 2);
    console.log(`Копирование элементов в массиве (.copyWithin): [${newArray}]`);


    let sortedArray = [...myInitialArray].sort((a,b) => a - b);
    console.log(`Отсортированный массив (.sort): [${sortedArray}]`);

    sortedArray.splice(0, 4);
    console.log(`Удаление элемента в массиве (.splice): [${sortedArray}]`);
})


/* -------------------------------------------------------------------------- */
/*                                  Пример 2                                  */
/* -------------------------------------------------------------------------- */
let button_task_11_2 = document.querySelector('#button-task-11-example-2')

button_task_11_2.addEventListener('click', () => {
    let myInitialArray = [1, 3, 5, 7, 9, 11];
    console.log(`Изначальный массив: [${myInitialArray}]`);

    let slicedArray = myInitialArray.slice(1, 3);
    console.log(`Срез массива (.slice): [${slicedArray}]`);

    let slicedArray2 = myInitialArray.slice(4, 6);
    let concatArray = slicedArray.concat(slicedArray2);
    console.log(`Объединение массивов (.concat): [${concatArray}]`);



    let findedVal = myInitialArray.find((item) => item % 3 == 0);
    console.log(`Поиск элемента в массиве (.find): [${findedVal}]`);

    let findedIndex = myInitialArray.findIndex((item) => item % 3 == 0);
    console.log(`Поиск индекса элемента в массиве (.findIndex): [${findedIndex}]`);
})