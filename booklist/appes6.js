class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
    addBookToList(){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    const book = new Book(title,author,isbn);
    if(title == '' || author == '' || isbn == ''){
        book.showAlert('Please fill in all fields','error');
    }else{
        book.addBookToList();
        book.clearFields();
    }
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
    const book = new Book();
    book.deleteBook(e.target);
    book.showAlert('Book Removed!','success');
    e.preventDefault();
})