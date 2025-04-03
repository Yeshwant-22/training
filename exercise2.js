function text(){
    document.getElementById("name").innerHTML= "Text Changed!";
}

function color(){
    document.body.style.backgroundColor = "red";
}

function sayhi(){
    let name = document.getElementById("iname").value;
    document.getElementById("sayhii").innerText = `Hello, ${name}`;
}

function addItem() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = "New Item";
    ul.appendChild(li);
}

function removeItem() {
    let ul = document.getElementById("list");
    if (ul.children.length > 1) {
        ul.removeChild(ul.lastElementChild);
    }
}

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

function showMessage() {
    document.getElementById("message").innerText = "Wait for 3 seconds...";
    
    setTimeout(function() {
        document.getElementById("message").innerText = "Naa dhan da leo";
    }, 3000);
}

function showAlert() {
    alert("This is an alert!");
}

function showConfirm() {
    let result = confirm("Are you sure?");
    document.getElementById("messagehere").innerText = result ? "You clicked OK!" : "You clicked Cancel!";
}

function showPrompt() {
    let name = prompt("Enter your name:");
    if (name) {
        document.getElementById("messagehere").innerText = `Hello, ${name}!`;
    } else {
        document.getElementById("messagehere").innerText = "No name entered!";
    }
}

document.getElementById("textInput").addEventListener("keyup", function() {
    document.getElementById("output").innerText = this.value;
});

function redirect() {
    window.location.href = "https://www.google.com"; // Rwill redirect in the same tab
}

function openNewTab() {
    window.open("https://www.google.com"); // will open Google in a new tab
}