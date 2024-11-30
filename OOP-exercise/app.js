// const main = document.getElementById("main");
// class Student{
//     // name;
//     // surname;
//     // description;
//     constructor(name, surname, desc){
//         this.name = name;
//         this.surname = surname;
//         this.desc = desc;
//     }
//     render(){
//         const el = document.createElement("li");
//         const name = document.createElement("h1");
//         name.innerText = this.name;
//        const surname = document.createElement("h1");
//        surname.innerText = this.surname;
//        const desc = document.createElement("p");
//        desc.innerText = this.desc;
//         el.appendChild(name);
//         el.appendChild(surname);
//         el.appendChild(desc);
//         main.appendChild(el);
//     }
// }
    

// let dzemil = new Student("dzemil", "karisik", "momak sam za primer ja tu nista ne bi menjo");
// let mirza = new Student("mirza", "omerovic", "momak nije za primer")
// dzemil.render();
// mirza.render();

class Book{
    // title;
    // author;
    // pages;
    // isRead = false;
    constructor(title, author, pages, isRead = false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    markAsRead(){
        this.isRead = true;
    }

}

class Library{
    books = [];

    addBook(el){
        this.books.push(el);
    }
    listBooks(){
        this.books.forEach((el)=>{
            console.log(el.title);
            console.log(el.author);
            console.log(el.pages);
            console.log(el.isRead);

        })
    }

    getUnreadBooks(){ 
        return this.books.filter((book) => !book.isRead);
    }
}
const myLibrary = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("Sve knjige u biblioteci:");
myLibrary.listBooks();

console.log("\nNeprečitanih knjiga:");
console.log(myLibrary.getUnreadBooks());

console.log("\nOznačavamo '1984' kao pročitanu...");
book2.markAsRead();

console.log("\nNeprečitanih knjiga:");
console.log(myLibrary.getUnreadBooks());
