//elements 
const bookName = document.getElementById("book_name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const submitBtn = document.getElementById("submit_btn")
const displayBook = document.getElementById("display_book")

//books array
const myLibrary = [];

//constructor of the Book object 
function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = pages 
}

//add book to the array 
submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    myLibrary.push(new Book(bookName.value, author.value, pages.value))
})

//display a book
displayBook.addEventListener("click", (event) => {
    event.preventDefault()
    
    //filter the list of the displayed items 
    const booksToRemove = document.querySelectorAll(".displayed-book")
    if (booksToRemove.length !== 0){
      booksToRemove.forEach(book => {
        book.remove();  // Remove each individual element
      });
    }


    myLibrary.map((book, index) => {

      //create a remove btn

      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.classList.add("remove-btn");

      //create a book item
      const displayedBook = document.createElement("div");
      displayedBook.classList.add("displayed-book");
      document.body.appendChild(displayedBook);
      displayedBook.innerHTML = ` Book name: ${book.name}. Author: ${book.author}. Pages: ${book.pages}`

      displayedBook.appendChild(removeButton);

      // Add a data-attribute for the index of the book in myLibrary array
      displayedBook.setAttribute("data-index", index);

      // Add event listener to remove the book when button is clicked
      removeButton.addEventListener("click", () => {
        
        // Get the index from the data-attribute
        const bookIndex = displayedBook.getAttribute("data-index");
            
        // Remove the corresponding book from the DOM
        displayedBook.remove();

        // Remove the corresponding book from the library array
        myLibrary.splice(bookIndex, 1);

        console.log(myLibrary);
      });
      
    })
})

