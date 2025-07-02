/* -------------------------------------------------------------------------- */
/*                                  Пример 1                                  */
/* -------------------------------------------------------------------------- */
let button_task_10_1 = document.querySelector('#button-task-10-example-1')

button_task_10_1.addEventListener('click', () => {
    let myObj = {
        fname: 'John',
        lname: 'Doe',
        age: 20 
    };

    console.log(Object.keys(myObj))
    console.log(Object.values(myObj))
    console.log(Object.entries(myObj))

    for(let [key, name] of Object.entries(myObj)){
        console.log(`${key} - ${name}`);
    }
    
})


