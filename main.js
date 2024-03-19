function send() {
  var password = document.getElementById("password").value;
  var conpassword = document.getElementById("conpassword").value;
  if (password == "") {
    document.getElementById("messagee").innerHTML = "Empty";
  } else {
    if (password === conpassword) {
      document.getElementById("message").innerHTML =
        "Password match" + password.length;
    } else {
      document.getElementById("message").innerHTML = "Password don't match";
    }
  }
}
