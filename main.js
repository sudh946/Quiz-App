
// loggedin user ke liye hai
// window.addEventListener('load',() => {
//     const isloggedIn = localStorage.getItem("loggedInuser");

//     if(isloggedIn){
//         return
//     }
//     if(window.location.pathname === "/dashboard.html"){
//         window.location="/"
//     }
// })

function log(){
    window.location ="dashboard.html"
}
function questionPage(){
    window.location ="question.html"
}

function signin(){
    const fullname = document.getElementById('Full-Name').value;
    const email = document.getElementById('emailId').value;
    const password = document.getElementById('Passkey').value;

    const namePattern = /^[a-zA-Z/s/-]+$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!fullname){
        alert("Enter your name")
        return;
    }
    if(!namePattern.test(fullname)){
        alert("Enter the valid Name")
        return;
    }
    if(!emailPattern.test(email)){
        alert("Enter the valid Email")
        return;
    }
    if(password.length < 8){
        alert("Enter 8 character password")
        return;
    }
     
    window.location ="index.html"

}
