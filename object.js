//Object -> property, methods
// data + data control method


// data -> property
// function -> method



//1) {}  object literal
let bookTitle = "Stay Hungry Stay Foolish"
let numOfPages = 192

let book = {
    bookTitle,
    author: "Steve Jobs",
    publishYear: 2010,
    mrp: 599,
    numOfPages
}

book.title = "Do not hungry do not foolish"
delete book.mrp
book.sellingPrice = 13233
console.log(book)

// let title = book.title
// let author = book.author
// let publishYear = book.publishYear

//Destructuring
let { title, author, publishYear } = book
console.log(title, author, publishYear)
let name = "suyash"
let lastName = "kumar"
let person = { name, lastName }



//copying an object
let secondBook = Object.assign({}, book)
secondBook.title = "second title"


//spread operator
let thirdBook = { ...book }
thirdBook.author = "abc"

console.log("Book Object is : ", book)
console.log("Second Book Object is : ", secondBook)
console.log("Third Book Object is : ", thirdBook)






//2) Constructor function
//3) Using object Class
//4) using Class-new keyword

class Pen {
    constructor(inkColor, company) {
        this.inkColor = inkColor;
        this.company = company
    }

    showPenDetails() {
        console.log(this.inkColor, this.company)
    }
}


let pen1 = new Pen("red", "montex")
let pen2 = new Pen("blue", "cello")

pen1.inkColor


//this =>>> refers to current calling object // context