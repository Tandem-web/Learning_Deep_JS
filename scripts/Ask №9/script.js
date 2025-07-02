/* -------------------------------------------------------------------------- */
/*                                  Пример 1                                  */
/* -------------------------------------------------------------------------- */
let button_task_9_1 = document.querySelector('#button-task-9-example-1')

button_task_9_1.addEventListener('click', () => {
    let myArray = [1, 2, [3, 4, [4, 5]], 4];

    let myNewLink = myArray;
    console.log(myNewLink[1])
    myNewLink[1] = 5;
    console.log(myNewLink[1])


    console.log(myNewLink)

    let myNewArray = [...myArray];

    myNewArray[1] = 2;
    console.log(...myNewArray, '|', ...myArray)



    let myObj = {
        company: 'Next',
        info: {
            developer: 'Oleg',
            dep2: {
                otherInfo: 'Bla bla'
            }
        }
    };


    let myNewObj = {...myObj}

    myNewObj.company = 'Prev'

    console.log(myNewObj)
    console.log(myObj)
})


/* -------------------------------------------------------------------------- */
/*                                  Пример 2                                  */
/* -------------------------------------------------------------------------- */
let button_task_9_2 = document.querySelector('#button-task-9-example-2');

button_task_9_2.addEventListener('click', () => {
    let myObj = {
        company: 'Next',
        info: {
            developer: 'Oleg',
            dep2: {
                otherInfo: 'Bla bla'
            }
        }
    };

    let myCopy = Object.assign({}, myObj);
    
    myCopy.company = 'Prev'

    console.log(myCopy)
    console.log(myObj)
})


/* -------------------------------------------------------------------------- */
/*                                  Пример 3                                  */
/* -------------------------------------------------------------------------- */
let button_task_9_3 = document.querySelector('#button-task-9-example-3');

button_task_9_3.addEventListener('click', () => {
    let testObj = {
        info: 123,
    }
    let myObj = {
        company: 'Next',
        info: {
            developer: 'Oleg',
            dep2: {
                otherInfo: testObj
            }
        }
    };
    let mySwallowCopy = {...myObj};

    let myDeepCopy = JSON.parse(JSON.stringify(myObj));

    console.log(myDeepCopy);

    console.log(mySwallowCopy);

    let myModernDeepCopy = structuredClone(myObj);

    console.log(myModernDeepCopy)
})