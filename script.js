myLibrary = {
    content : [],
    currentID : 0,
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages,
    this.read = read
    this.id = myLibrary.currentID++;
}
const openFormButton = document.querySelector('.open-form-button');
const closeFormButton = document.querySelector('.close-form-button');
const addBookButton = document.querySelector('.add-book');
let libraryTable = document.querySelector('.library-table');

closeFormButton.addEventListener('click', closeForm);
openFormButton.addEventListener('click', openForm);
addBookButton.addEventListener('click', displayLastBook);



// page set up for tests
for(let i=0; i < 10; i ++) {
    
    myLibrary.content.push(new Book(`${i}`, 'Rowling', '300', false));
}

displayLibraryUI();
// pages set up for tests


function listenDeleteBtn () {
    const deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach(button => button.addEventListener('click', deleteBook));
}


function deleteBook(e) {
clearLibraryUI();

for(let book in myLibrary.content) {
   if (myLibrary.content[book].id == e.target.dataset.id) {
    let deletd = myLibrary.content.splice(book, 1);
    console.log(deletd);
   }
}
displayLibraryUI()


}

function displayLastBook () {

    clearLibraryUI();
    addBook();
    displayLibraryUI();
}

function addBook() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    
    myLibrary.content.push(new Book(`${title}`, `${author}`, `${pages}`, read));
}

function displayLibraryUI() {
    myLibrary.content.forEach(book => {
        let aRow = document.createElement('tr');

        let aRowTitle = document.createElement('td');
        let aRowAuthor = document.createElement('td');
        let aRowPages = document.createElement('td');
        let aRowRead = document.createElement('td');
        let aRowDelete = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete book';
        deleteButton.classList.add('deleteBtn');
        deleteButton.dataset.id = book.id;

        aRowTitle.textContent = book.title;
        aRowAuthor.textContent = book.author;
        aRowPages.textContent = book.pages;
        aRowRead.textContent = book.read;
        aRowDelete.appendChild(deleteButton);
        
        aRow.appendChild(aRowTitle);
        aRow.appendChild(aRowAuthor);
        aRow.appendChild(aRowPages);
        aRow.appendChild(aRowRead);
        aRow.appendChild(aRowDelete);

        libraryTable.appendChild(aRow);
        libraryTable = document.querySelector('.library-table');
        listenDeleteBtn();
    });
}

function clearLibraryUI() {    
    for (let i = 0; i < myLibrary.content.length; i++) {
        let child = libraryTable.lastElementChild;
        libraryTable.removeChild(child);
    }
    libraryTable = document.querySelector('.library-table');
    }

function openForm() {
    document.getElementById('form-toggle').style.display = 'block'; 
}
function closeForm() {
    console.log('not closing?')
    document.getElementById('form-toggle').style.display = 'none'; 
}