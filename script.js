function Author (Name, Email){

    this.AuthorName = Name;
    this.AuthorEmail = Email;
}
function Book (Name, Price, Author){

    this.BookName = Name;
    this.Price = Price;
    this.Author = Author;
}
Book.prototype.getAuthorName = function(){
    return this.Author.AuthorName;
}
Book.prototype.getAuthorEmail = function(){
    return this.Author.AuthorEmail;
}
function BookData(BookName, BookPrice, AuthorName, AuthorEmail){

    let Author_Obj = new Author(AuthorName, AuthorEmail)
    let Book_obj =  new Book(BookName, BookPrice, Author_Obj);

    return Book_obj;
}
function creatForm(){

    let formDiv = document.querySelector(".form_BookData");

    let form = document.createElement('form');

    let label_bookName = document.createElement('label');
    let input_bookName = document.createElement('input');

    label_bookName.for = "bookName";
    label_bookName.textContent = "Book's Name:";

    form.append(label_bookName);
    form.append(document.createElement('br'));

    input_bookName.type = 'text';
    input_bookName.id = "bookName";
    input_bookName.name = "bookName";

    form.append(input_bookName);
    form.append(document.createElement('br'));

    let label_Price = document.createElement('label');
    let input_Price = document.createElement('input');

    label_Price.for = "price";
    label_Price.textContent = "Price";

    form.append(label_Price);
    form.append(document.createElement('br'));

    input_Price.type = 'number';
    input_Price.id = "price";
    input_Price.name = "price";

    form.append(input_Price);
    form.append(document.createElement('br'));

    let label_authorName = document.createElement('label');
    let input_authorName = document.createElement('input');

    label_authorName.for = "authorName";
    label_authorName.textContent = "Author Name:";

    form.append(label_authorName);
    form.append(document.createElement('br'));

    input_authorName.type = 'text';
    input_authorName.id = "authorName";
    input_authorName.name = "authorName";

    form.append(input_authorName);
    form.append(document.createElement('br'));

    let label_Email = document.createElement('label');
    var input_Email = document.createElement('input');

    label_Email.for = "email";
    label_Email.textContent = "Email:";

    form.append(label_Email);
    form.append(document.createElement('br'));

    input_Email.type = 'email';
    input_Email.id = 'email';
    input_Email.name = 'email';

    form.append(input_Email);
    form.append(document.createElement('br'));

    let divSubBTN = document.createElement('div');
    let input_Sub = document.createElement('input');

    divSubBTN.className = "container_sub";
    input_Sub.className = "SubmitBook";

    input_Sub.type = "submit";
    input_Sub.value = "Add book";

    divSubBTN.append(input_Sub);
    form.append(divSubBTN);

    formDiv.append(form);
}
function CreateTable (Book_OBJ){  //  takes book object

    let BookName = Book_OBJ.BookName;
    let Price = Book_OBJ.Price;
    let authorName = Book_OBJ.getAuthorName();
    let email = Book_OBJ.getAuthorEmail();

    // 1- remove the form
    let form = document.querySelector('.form_BookData');
    form.innerHTML = "";
    form.style.width = '0px';
    form.style.height = '0px';

    // 2- add table head if not exist
    let tableHead = document.querySelector('.tableStructure-head');

    if (tableHead === null) {

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');

        thead.classList.add('tableStructure-head'); 
        th.classList.add('Edit_space'); 

        

        tr.innerHTML = `<th class = "head-item">Book's Name</th><th class = "head-item">Price</th><th class = "head-item">Author</th><th class = "head-item" >Author E-mail</th>`;
        th.innerHTML = "kdjhfkjdhfkjs";

        tr.append(th);
        thead.append(tr);

        let table = document.querySelector('#MyTable');
        table.append(thead); 

        //////////////////////////////////////////////////////////////////


        let tbody = document.createElement('tbody');
        let tr_body = document.createElement('tr');
        let tData = document.createElement('td');

        tbody.classList.add('tableStructure-body'); 
        tData.classList.add('btn-edit'); 

        tr_body.innerHTML = `<td class = "body-item">${BookName}</td><td class = "body-item" >${Price}</td><td class = "body-item">${authorName}</td><td class = "body-item">${email}</td>`;
        tData.innerHTML = `<button class="Edit">Edit</button><button class="Delete">Delete</button>`;

        tr_body.append(tData);
        tbody.append(tr_body);

        table = document.querySelector('#MyTable');
        table.append(tbody); 

    }else{ 

        // 3- add table body

        let tbody = document.createElement('tbody');
        let tr_body = document.createElement('tr');
        let tData = document.createElement('td');
        

        tbody.classList.add('tableStructure-body'); 
        tData.classList.add('btn-edit'); 

        tr_body.innerHTML = `<td class = "body-item">${BookName}</td><td class = "body-item" >${Price}</td><td class = "body-item">${authorName}</td><td class = "body-item">${email}</td>`;
        tData.innerHTML = `<button class="Edit">Edit</button><button class="Delete">Delete</button>`;

        tr_body.append(tData);
        tbody.append(tr_body);

        table = document.querySelector('#MyTable');
        table.append(tbody); 
        

    }


}
function deleteRow(rowIndex) {
    let table = document.querySelector('#MyTable'); 
    table.deleteRow(rowIndex); 
}


let btn = document.querySelector(".btn_booksNum");
let Input = document.getElementById('booksNumber');
let arrOfBooks = [];


if(btn !== null){
    btn.addEventListener('click', function(event){
        event.preventDefault();

        let numberOfBooks = Input.value;
        let i = 0;
        

        let takeNum = document.querySelector('.take_num');
        takeNum.innerHTML = "";
        takeNum.style.width = '0px';
        takeNum.style.height = '0px';

        function handleSubmit (event){

            event.preventDefault();

            alert(`Book number ${i+1} submitted`);

            let BookName = document.getElementById("bookName").value;
            let Price = document.getElementById("price").value;
            let authorName = document.getElementById("authorName").value;
            let email = document.getElementById("email").value;

            arrOfBooks.push(BookData(BookName, Price, authorName, email));

            let div = document.querySelector('.form_BookData');
            if (div) {
                div.innerHTML = '';
            }

            if (i < numberOfBooks - 1) {
                i++;
                
                creatForm();
                //document.getElementById('myForm').addEventListener('submit', handleSubmit);
                document.querySelector(".SubmitBook").addEventListener('click',handleSubmit );
            }

            if (arrOfBooks.length == numberOfBooks){
                for (let j = 0; j<arrOfBooks.length; j++){
                    CreateTable(arrOfBooks[j]);
                }
                
                let Delete_Buttons = document.getElementsByClassName("Delete");
                let Edit_Buttons = document.getElementsByClassName("Edit");

                for (let i = 0; i < Delete_Buttons.length; i++) {
                    Delete_Buttons[i].addEventListener('click', function() {

                        let row = this.parentNode.parentNode;
                
                        let index = row.rowIndex;
                        
                        deleteRow(index);
                    });
                }

                for (let i=0; i<Edit_Buttons.length; i++){

                    Edit_Buttons[i].addEventListener('click', function(){

                        let row = this.parentNode.parentNode;
                        let cells = row.querySelectorAll('.body-item');

                        for (let j = 0; j <cells.length-1; j++){
                            cells[j].contentEditable = true;

                            cells[j].addEventListener('keydown',function(e){

                                if (e.key === 'Enter'){
                                    e.preventDefault();
                                    this.contentEditable = false;
                                }
                            });
                        }
                    });
                }
            }
        }
        creatForm();
        //document.getElementById('myForm').addEventListener('submit', handleSubmit);
        document.querySelector(".SubmitBook").addEventListener('click', handleSubmit);
    });
}





