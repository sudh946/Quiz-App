
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


function questionPage(){
    window.location ="question.html"
}
// signin function
// signin page to login page

function signin(){
    const fullname = document.getElementById('Full-Name').value;
    const email = document.getElementById('emailId').value;
    const password = document.getElementById('Passkey').value;

    const namePattern = /^[a-zA-Z\s\-']+$/;
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

                // email should not be repeated

     let userDetail=JSON.parse(localStorage.getItem("user"))||[]
     let userExist=userDetail.some(
        (userDetail)=>userDetail.email === email
     );
     if(userExist){
        alert("user already exist")
        return;
     }

                 // set values to localstorage from singin function


    let user =
        {
            "name":fullname,
            "email":email,
            "password":password
        }
    userDetail.push(user)
    let newUser = JSON.stringify(userDetail)
    localStorage.setItem("user",newUser)

     
    
    window.location ="index.html"
    alert("register successfully")

}
function log(){
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!emailPattern.test(email)){
    alert("Enter the valid Email")
    return;
}
if(password.length < 8){
    alert("Enter 8 character password")
    return;
}


  const userDetail = JSON.parse(localStorage.getItem("user")) || [];

  // Find user with matching email and password
  const user = userDetail.find((user) => user.email === email && user.password === password);

  if (!user) {
    alert("Invalid email or password");
    return;
  }
  // Login successful, redirect to dashboard
  window.location = "dashboard.html";
  alert("Logged in successfully");

}

let profileName = getElementById("profile-name");
let profile=JSON.parse(localStorage.getItem("user"));
profileName.innerText=profile[2].name;