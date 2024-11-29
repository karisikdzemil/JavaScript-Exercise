const main = document.getElementById("main");
class Student{
    // name;
    // surname;
    // description;
    constructor(name, surname, desc){
        this.name = name;
        this.surname = surname;
        this.desc = desc;
    }
    render(){
        const el = document.createElement("li");
        const name = document.createElement("h1");
        name.innerText = this.name;
       const surname = document.createElement("h1");
       surname.innerText = this.surname;
       const desc = document.createElement("p");
       desc.innerText = this.desc;
        el.appendChild(name);
        el.appendChild(surname);
        el.appendChild(desc);
        main.appendChild(el);
    }
}
let dzemil = new Student("dzemil", "karisik", "momak sam za primer ja tu nista ne bi menjo");
let mirza = new Student("mirza", "omerovic", "momak nije za primer")
dzemil.render();
mirza.render();

