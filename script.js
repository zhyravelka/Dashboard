let userVova = {
    name: 'Vova',
    age: 45,

    showInfo(){
        console.log(this.name, this.age);
    },
};

let userSara = {
    name: 'sara',
    age: 30,
};


// userVova.showInfo.bind(userSara)() 


let btn = document.querySelector('#btn-basic');

btn.addEventListener('click',()=>{userVova.showInfo.bind(userSara)()});