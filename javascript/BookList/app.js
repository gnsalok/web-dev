// Book Class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class
class UI{
    static displayBooks(){
        // Dummy Data for test 
        // const storedBooks = [
        //     {
        //         title: 'Subtle art of not givining F**k',
        //         author: 'Mark Manson',
        //         isbn: '12345'
        //     },
        //     {
        //         title: 'Thinking fast and slow',
        //         author: 'Mark Mass',
        //         isbn: '45678'
        //     }
        // ];

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete"></a></td>
        `;

        // Adding data into the row 
        list.appendChild(row)
    }

    // Delete a book 
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    
    // Show alert 
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form)
        
        // Make alert dissappear after 3 sec
        setTimeout(()=>
            document.querySelector(".alert").remove(), 3000
          );

    }

    // Clear fields 
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}


// Storage Class : Store in localstorage as string (not object)
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static addbBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) =>{
            if(book.isbn == isbn){
                book.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event : Display a book
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event : Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) =>{

    // Prevent actual submit
    e.preventDefault();

    // Get Form value 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate the form 
    if( title === '' || author === '' || isbn === ''){
        UI.showAlert('Plese fill all the fields', 'danger');
    }else{
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Add book to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addbBook(book);

        // Clear field 
        UI.clearFields();

        // Show success message 
        UI.showAlert('Book Added', 'success');
    }
});

// Event : Remove a Book 
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target);

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message 
    UI.showAlert('Book Removed', 'success');
});