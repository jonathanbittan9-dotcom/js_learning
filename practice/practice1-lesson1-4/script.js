document.getElementById("welcome").textContent = "hello! click on the button!";
document.getElementById("press").onclick = function(){
    document.getElementById("welcome").textContent = "never gonna give you up"
    console.log("the operation has been done.")
}

let numbers = null;
document.getElementById("submit").onclick = function(){
    numbers = document.getElementById("num").value;
    console.log(numbers)
}