const input = document.querySelector('input');
const inputBtn = document.getElementById('add-btn');

class ToDo{
    constructor(inputValue){
        inputValue = this.inputValue;
    }

    getValue(){
        console.log(input.value);
    }
}

