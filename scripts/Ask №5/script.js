
let button_task_5_1 = document.querySelector('#button-task-5-example-1')

button_task_5_1.addEventListener('click', () => {

    const weakMap = new WeakMap();
    let user = {
        id: 0,
        name: 'John'
    }

    weakMap.set(user, 'Какая-то информация');

    console.log(weakMap.get(user));

    console.log(weakMap.has(user));

    user = null;
    
    console.log(weakMap);



})