

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