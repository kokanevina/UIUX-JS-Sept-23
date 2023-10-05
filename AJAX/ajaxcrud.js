

function makeGetRequest() {
    // First create an XMLHttprequest object
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/books");
    xhr.getResponseHeader("Content-type", "application/json"); //  extra line
    xhr.send();
    xhr.onload = function() {
       // console.log(xhr);   
       //console.log(xhr.responseText); 
       //console.log(JSON.parse(xhr.responseText));
       const books=JSON.parse(xhr.responseText);
       console.log(books);
       // display books in table format on html page
    }
    xhr.onerror=function(){
        console.log("something went wrong");
    }

}

function searchById(){
    const bookId=document.getElementById('bid').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/books/${bookId}`);
    xhr.getResponseHeader("Content-type", "application/json"); //  extra line
    xhr.send();
    xhr.onload = function() {
       console.log(xhr.responseText);
       const book=JSON.parse(xhr.responseText);
       document.getElementById('id').value=book.id;
       document.getElementById('bookName').value=book.bookName;
       document.getElementById('bookPrice').value=book.bookPrice;
       document.getElementById('bookAuthor').value=book.bookAuthor;
    }
    xhr.onerror=function(){
        console.log("something went wrong");
        
    }
}

function addorupdate(event){
    event.preventDefault();
    console.log(event.submitter);
    if(event.submitter.id==="addButton")
        addBook();
    else
        updateBook();
}

function addBook(){
    const id=document.getElementById('id').value;
    const bookName=document.getElementById('bookName').value;
    const bookPrice=document.getElementById('bookPrice').value;
    const bookAuthor=document.getElementById('bookAuthor').value;
    const newBook={
        "id":parseInt(id),  // if u dont set id then json server auto incremnts id
        "bookName":bookName,
        "bookPrice":parseFloat(bookPrice),
        "bookAuthor":bookAuthor
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:3000/books`); // data not in address link
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(newBook)); // data sent from request body
    xhr.onprogress=function(){
        console.log("SUCCESS");
        console.log(xhr);
    }
    xhr.onerror=function(){
        console.log("something went wrong");
    }
}

function updateBook(){
    const id=document.getElementById('id').value;
    const bookName=document.getElementById('bookName').value;
    const bookPrice=document.getElementById('bookPrice').value;
    const bookAuthor=document.getElementById('bookAuthor').value;
    const updatedBook={
        "id":parseInt(id),  // id is existing
        "bookName":bookName,
        "bookPrice":parseFloat(bookPrice),
        "bookAuthor":bookAuthor
    }
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:3000/books/${id}`); 
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(updatedBook)); // data sent from request body
    xhr.onprogress=function(){
        console.log("SUCCESS");
        console.log(xhr);
    }
    xhr.onerror=function(){
        console.log("something went wrong");
    }
}


function deleteById(){
    const bookId=document.getElementById('bid').value;
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:3000/books/${bookId}`); 
    xhr.send();
    xhr.onload = function() {
       console.log("DELETED");
       console.log(xhr);
      
    }
    xhr.onerror=function(){
        console.log("something went wrong");
    }
}