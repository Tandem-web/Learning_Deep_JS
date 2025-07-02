
let button_task_4_1 = document.querySelector('#button-task-4-example-1')

button_task_4_1.addEventListener('click', () => {

    const weakSet = new WeakSet();
    let obj = {
        id: 0,
        name: 'Ivan'
    };
    
    weakSet.add(obj);

    console.log(weakSet);
    console.log(weakSet.has(obj));

    obj = null

    console.log(weakSet)

})