myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages,
    this.read = read
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
    
    myLibrary.push(new Book(`${i}`, 'Rowling', '300', false));
}

displayLibraryUI();
// pages set up for tests


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
    
    myLibrary.push(new Book(`${title}`, `${author}`, `${pages}`, read));
}

function displayLibraryUI() {
    myLibrary.forEach(book => {
        let aRow = document.createElement('tr');

        let aRowTitle = document.createElement('td');
        let aRowAuthor = document.createElement('td');
        let aRowPages = document.createElement('td');
        let aRowRead = document.createElement('td');

        aRowTitle.textContent = book.title;
        aRowAuthor.textContent = book.author;
        aRowPages.textContent = book.pages;
        aRowRead.textContent = book.read;
        
        aRow.appendChild(aRowTitle);
        aRow.appendChild(aRowAuthor);
        aRow.appendChild(aRowPages);
        aRow.appendChild(aRowRead);

        libraryTable.appendChild(aRow);
    });
}

function clearLibraryUI() {
    for (let i = 0; i < myLibrary.length; i++) {
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