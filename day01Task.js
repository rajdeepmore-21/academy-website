console.log("Hello JS");

function clickMe() {

  ///  alert("BUTTON CLICKED");

    let h1 = document.getElementById("one");

    if (h1.innerHTML == "welcome to day 1") {
        h1.innerHTML = "change by DOM";
        h1.style.backgroundColor = "orange";

    }   else {
        h1.innerHTML = "welcome to day 1";
        h1.style.backgroundColor = "yellow";
    }    
}

function checkname() {
    let name = document.getElementById("name").value;
     alert();
         if(name == "rajdeep") {
        console.log('welcome rajdeep');
    } else {
        console.log('you are not rajdeep');
    }
}
