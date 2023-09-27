// logic to send get request to server side (json-server)
// server url: http://localhost:3000
// resource url : http://localhost:3000/books
function testRequest(){
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "http://localhost:3000/books");  
    httpRequest.send();
    httpRequest.onload=function(){
        console.log("handler handling response");
        console.log(httpRequest);
    }
    httpRequest.onerror=function(){
        console.log("something went wrong");
    }
}
