const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.onclick = () => {
    if(password.type==="password"){
        password.type="text";
        toggle.textContent="🙈";
    }else{
        password.type="password";
        toggle.textContent="👁";
    }
};

form.addEventListener("submit",function(e){

    e.preventDefault();

    const username=document.getElementById("username").value;
    const pass=password.value;

    if(username==="student123" && pass==="erp123"){
        message.style.color="lightgreen";
        message.innerHTML="Login Successful!";
    }else{
        message.style.color="yellow";
        message.innerHTML="Invalid Student ID or Password";
    }

});