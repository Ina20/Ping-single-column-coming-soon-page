function validateForm() {
  console.log('Hello');
  let myForm = document.getElementById("emailInput").value;
  let errorMessage = document.getElementById("errorMsg");
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm)) {
    errorMessage.style.display = "none";
  }else if (myForm == ""){
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
  }else {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Please provide a valid email address";
  }
}
