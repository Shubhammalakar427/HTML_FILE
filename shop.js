let cloths=document.getElementById("cloths");
let blogs=document.getElementById("blogs");
let reviews=document.getElementById("reviews");
let contacts=document.getElementById("contacts");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    reviews.style.color="black";
    blogs.style.color="black";
    contacts.style.color="black";

})
reviews.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="red";
    blogs.style.color="black";
    contacts.style.color="black";

})
blogs.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="black";
    blogs.style.color="red";
    contacts.style.color="black";

})
contacts.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="black";
    blogs.style.color="black";
    contacts.style.color="red";

})

let login = document.getElementById("login");
login.addEventListener("click",function(){
    let loginpage =document.querySelector(".loginpage").style.display="block";
})

let loged=document.getElementById("loged");
loged.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
        
    }else{
        alert("You Loged In")
        document.querySelector(".loginpage").style.display="none";
    }

})

let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    let name=document.getElementById("name");
    let pass=document.getElementById("pass");

    if(name.value == "" || pass.value == ""){
        alert("Please Enter Name & Password")   
    }else{
        alert("Thanks for Connecting")
    }

})
