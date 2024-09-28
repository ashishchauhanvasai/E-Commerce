let signupForm = document.getElementById("signupForm")
let username = document.getElementById("username")
let password = document.getElementById("password")
let errorUnMsg = document.getElementById("errorUnMsg")
let errorpwdMsg = document.getElementById("errorpwdMsg")

let udata = {un : "", pwd : ""}

signupForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    udata.un =  username.value;
    udata.pwd =  password.value;
    console.log(udata)

    localStorage.setItem("userdata",JSON.stringify(udata))
})

username.addEventListener("blur",()=>{
    if (username.value == "") {
        errorUnMsg.textContent = "Enter UserName"
        errorUnMsg.style.color = "red"
    }
    else{
        errorUnMsg = ""
    }    
})


password.addEventListener("blur",()=>{
    if (password.value == "") {
        errorpwdMsg.textContent = "Enter Password"
        errorpwdMsg.style.color = "red"
    }
    else{
        errorpwdMsg = ""
    }
})