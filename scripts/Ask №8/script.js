let button_task_8_1 = document.querySelector('#button-task-8-example-1')

button_task_8_1.addEventListener('click', () => {
    let names = {
        fname: "Nikita",
        lname: "Lebedev"
    }
    console.log(names.fname);
    console.log(names.hasOwnProperty("mname")); 
    console.log(names.hasOwnProperty("lname"));
    
    console.log(names)

    console.log(`names.__proto__ === Object.prototype? - ${names.__proto__ === Object.prototype}`)
})

/* -------------------------------------------------------------------------- */
/*                                  Пример 2                                  */
/* -------------------------------------------------------------------------- */

let button_task_8_2 = document.querySelector('#button-task-8-example-2')

button_task_8_2.addEventListener('click', () => {
    function UserObj(name, role){
        let user = Object.create(userConstructor);

        user.name = name;
        user.role = role;

        return user
    }

    const userConstructor = {
        sayInfo: function(){
            console.log(`Name: ${this.name}, Role: ${this.role}`);
        }
    }

    let user = UserObj('Nikita', 'FrontDev');
    console.log(user)
    user.sayInfo()
    
})


/* -------------------------------------------------------------------------- */
/*                                  Пример 3                                  */
/* -------------------------------------------------------------------------- */

let button_task_8_3 = document.querySelector('#button-task-8-example-3')

button_task_8_3.addEventListener('click', () => {
    function UserObj(name, role){
        this.name = name;
        this.role = role;
    }

    UserObj.prototype.sayHi = function(){
        console.log(`Hi, I'm ${this.name}!`);
    }
    UserObj.prototype.sayInfo = function(){
        console.log(`Name: ${this.name}, Role: ${this.role}`);
    }

    let user = new UserObj('Nikita', 'FrontDev');
    console.log(`user.__proto__ === UserObj.prototype? - ${user.__proto__ === UserObj.prototype}`);
    console.log(`UserObj.prototype.__proto__ === Object.prototype? - ${UserObj.prototype.__proto__ === Object.prototype}`);
    console.log(user);
    user.sayHi();
    user.sayInfo();
})


/* -------------------------------------------------------------------------- */
/*                                  Пример 4                                  */
/* -------------------------------------------------------------------------- */

let button_task_8_4 = document.querySelector('#button-task-8-example-4')

button_task_8_4.addEventListener('click', () => {
    const dictionary = Object.create(null);

    dictionary['key'] = 'value';

    console.log(dictionary); // { key: 'value' }
    console.log(dictionary.toString); // undefined
})

/* -------------------------------------------------------------------------- */
/*                                  Пример 5                                  */
/* -------------------------------------------------------------------------- */

let button_task_8_5 = document.querySelector('#button-task-8-example-5')

button_task_8_5.addEventListener('click', () => {
    function myFunction() {
       console.log("Hello, World!");
   }
   console.log(typeof myFunction); // "function"
   console.log(myFunction instanceof Object); // true

   myFunction.language = "English";
   console.log(myFunction.language); // "English"

})

/* -------------------------------------------------------------------------- */
/*                                   Классы                                   */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  Пример 6                                  */
/* -------------------------------------------------------------------------- */

let button_task_8_6 = document.querySelector('#button-task-8-example-6')

button_task_8_6.addEventListener('click', () => {
    class User {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        sayHi(){
            console.log(`Hello, my name is ${this.name} and my age`);
        }
        sayInfo(){
            console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
        }
    }

    let user = new User('Nikita', 20);

    console.log(typeof user);
    console.log(user);
    user.sayInfo();

    console.log(user.__proto__ === User.prototype)

})


/* -------------------------------------------------------------------------- */
/*                                  Пример 7                                  */
/* -------------------------------------------------------------------------- */
let button_task_8_7 = document.querySelector('#button-task-8-example-7');
button_task_8_7.addEventListener('click', () => {
    class User {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        sayHi(){
            console.log(`Hello, my name is ${this.name}`);
        }
        sayInfo(){
            console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
        }
    }

    class Developer extends User{
        constructor(name, age, role){
            super(name, age);
            this.role = role;
        }

        sayRole(){
            console.log(`My role is ${this.role}`);
        }
    }

    let user = new Developer('Nikita', 20, 'Front-End');

    console.log(user);  
    console.log(Developer.prototype.__proto__)
})

/* -------------------------------------------------------------------------- */
/*                                  Пример 8                                  */
/* -------------------------------------------------------------------------- */
let button_task_8_8 = document.querySelector('#button-task-8-example-8');

button_task_8_8.addEventListener('click', () => {
    function User(name, age){
        let newUser = Object.create(userConstructor);
        newUser.name = name;
        newUser.age = age;

        return newUser;
    }

    let userConstructor = {
        sayHi: function(){
            console.log(`Hello, my name is ${this.name}`);
        },
        sayInfo: function(){
            console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
        }
    }

    function Developer(name, age, role){
        let newDeveloper = User(name, age);

        Object.setPrototypeOf(newDeveloper, developerConstructor);

        newDeveloper.role = role;

        return newDeveloper
    }

    let developerConstructor = {
        sayRole: function(){
            console.log(`My role is ${this.role}`);
        }
    }

    Object.setPrototypeOf(developerConstructor, userConstructor);

    let developer = Developer('Nikita', 20, 'Front-end');

    console.log(developer)
    developer.sayRole();
    developer.sayHi();
})