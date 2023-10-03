

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
     //  const book=JSON.parse(xhr.responseText);
       console.log(xhr.response);
       // display books in table format on html page
    }
    xhr.onerror=function(){
        console.log("something went wrong");
    }
}

function addBook(){
    // extracting all book details from form
    // putting all data in book json object
    // making post request
    // collecting server response
}