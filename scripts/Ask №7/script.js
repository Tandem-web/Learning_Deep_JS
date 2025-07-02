let button_task_7_1 = document.querySelector('#button-task-7-example-1')

button_task_7_1.addEventListener('click', () => {

    let company = {
        sales: [{
            name: 'John',
            salary: 1000
        }, {
            name: 'Alice',
            salary: 600
        }],

        development: {
            sites: [{
                name: 'Peter',
                salary: 2000
            }, {
                name: 'Alex',
                salary: 1800
            }],

            internals: [{
                name: 'Jack',
                salary: 1300
            }]
        }
    };

    function sumRec(dep){
        if(Array.isArray(dep)){
            return dep.reduce((acc, curr) => {
                return acc += curr.salary
            }, 0);
        }else{
            let sum = 0;

            for (let element of Object.values(dep)) {
                sum += sumRec(element)
            }

            console.log(sum)
            return sum;
        }
    }

    console.log(sumRec(company))

})