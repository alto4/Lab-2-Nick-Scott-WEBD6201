// Upon login button with username and password, show name in nav between contact and login/logout link
$("#loginForm .btn-success").on("click", function(e){
  e.preventDefault();
  console.log("Clicked!");

  // Get values for username and password
  let name = $("#userName").val();
  let password = $("#password").val();

  if($("#welcomeMessage").text().length < 1)
  {
    $(".login-container button").before('<span id="welcomeMessage" class="text-white px-4">Hello ' + name + '</span>');
    $(".login-container button").text("Logout");
  };
  
  console.log(`Name: ${name}\nPassword: ${password}`);
});


$(".btn-login").on("click", logoutUser);

function logoutUser() 
{
  $("#welcomeMessage").remove();
  $(".login-container button").text("Login");
  $(".login-container").remove($("#welcomeMessage"));
  name = "";
  password = "";
}