

function makeGetRequest() {
    // First create an XMLHttprequest object
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/books", true);
    xhr.getResponseHeader("Content-type", "application/json");
  
    xhr.onload = function() {
        console.log(xhr);
        console.log(xhr.responseText);
        const books = JSON.parse(this.responseText);
        console.log(books);
    }
    xhr.send();
    console.log("Hello this is after async req");
}