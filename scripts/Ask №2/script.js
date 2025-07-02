
let button_task_2_1 = document.querySelector('#button-task-2-example-1')

button_task_2_1.addEventListener('click', () => {

    const set = new Set();


    set.add(1);
    set.add('Привет');
    set.add({
        name: 'Иван'
    })
    set.add(null);
    set.add(1);
    
    set.forEach((item) => console.log(item))
    
    console.log(set, typeof(set));

    set.delete(null)

    console.log(set.has(1));
    console.log(set.has(null))
    
    set.clear();
    console.log(set)
    



})