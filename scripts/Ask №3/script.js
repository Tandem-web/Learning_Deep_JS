
let button_task_3_1 = document.querySelector('#button-task-3-example-1')

button_task_3_1.addEventListener('click', () => {
    const map = new Map();

    console.log(map)

    map.set('Иван', 'Значения ивана');

    map.set(0, {
        user: 'Иван',
        city: 'Saint-Petersburg'
    })

    console.log(map);
    console.log(map.has(0));
    console.log(map.get('Иван'));

    map.delete(0);
    map.set({id: 0}, {user: 'Иван'});

    console.log(map)
})