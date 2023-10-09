  // First create an XMLHttprequest object
   function getByID(){
  const bookId=555;
  const xh = new XMLHttpRequest();
  xh.open("GET", `http://localhost:3000/books/${bookId}`);
  xh.getResponseHeader("Content-type", "application/json"); //  extra line
  xh.send();
  xh.onload =  function() {
    console.log("GETbyID request");
     console.log(xh.responseText);
  }
  }
  getByID();

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/books");
   xhr.send();
  xhr.onload=  function(){
    console.log("GETALL request");
    console.log(xhr.responseText);
  }


  console.log("........the work after req sent to server..............");
  console.log("........Asynchronous IO..............");
  
