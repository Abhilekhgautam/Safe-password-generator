var btn = document.querySelector(".btn");
var pass = document.querySelector(".pass")

function generate_pass(){
 const specialKey = "!@#$%^&*()_+;'"
 const ints = "1234567890"
 const lower_alphabets = "abcdefghijklmnopqrstuvwxyz"
 const upper_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 
 var password = "";

 for(var i = 0 ; i < 5 ; i++){
  password += lower_alphabets.charAt(Math.floor(Math.random() * lower_alphabets.length))
  password += ints.charAt(Math.floor(Math.random() * ints.length))
  password += specialKey.charAt(Math.floor(Math.random() * 4))
  password += upper_alphabets.charAt(Math.floor(Math.random() * upper_alphabets.length))
 }
 return password 
}

btn.addEventListener('click',()=>{
var password =  generate_pass();
pass.innerText = password; 
})

pass.innerText = generate_pass()
