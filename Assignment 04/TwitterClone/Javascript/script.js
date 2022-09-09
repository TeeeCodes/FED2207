const users = function (username, password, email, name, dob, uid) {
    this.username = username
    this.password = password
    this.email = email
    this.name = name
    this.dob = dob
    this.uid = uid
}

const Post = function (text, dateCreated, uid) {
    this.text = text
    this.dateCreated = dateCreated
    this.dateUpdated = dateUpdated
    this.uid = uid
}

function obj (someObj) {
    $.ajax({
        type: "POST",
        url: 
    })
}
    


var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else {
    localStorage.setItem("theme", "light");
}


const firebaseConfig = {
    apiKey: "AIzaSyBXVt-RsOc14ZX2YGFuIB-j4MVDOoNw2og",
    authDomain: "twitter-clone-72847.firebaseapp.com",
    projectId: "twitter-clone-72847",
    storageBucket: "twitter-clone-72847.appspot.com",
    messagingSenderId: "255051256392",
    appId: "1:255051256392:web:4563fc1d98672ec1a7fe7d",
    measurementId: "G-NMDF7VZ4JF"
  };

  const app = initializeApp(firebaseConfig);