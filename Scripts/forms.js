/* Authors: Nick Sturch-Flint - 100303769 & Scott Alton - 100762638
 * Date   : 2021-03-04
 * Program: This file contains the validations for the login and register forms.
 */

// Upon login button with username and password, show name in nav between contact and login/logout link
$("#loginForm .btn-success").on("click", function (e) 
{
  e.preventDefault();
  console.log("Clicked!");

  // Get values for username and password
  let name = $("#userName").val();
  let password = $("#password").val();

  //Welcome the user with a prompt on successful login
  if ($("#welcomeMessage").text().length < 1) 
  {
    $(".login-container button").before( 
      '<span id="welcomeMessage" class="text-white px-4 text-nowrap my-auto">Hello ' +
        name +
        "</span>");

    $(".login-container button").text("Logout"); //update the login button to logout, when logged in
  }

  console.log(`Name: ${name}\nPassword: ${password}`);
});

$(".btn-login").on("click", logoutUser); //logs out the user when they click the logout button

/**
 * logoutUser - toggles text of login button and removes welcome message
 * 
 * @returns {void}
 */
function logoutUser() 
{
  $("#welcomeMessage").remove();
  $(".login-container button").text("Login");
  $(".login-container").remove($("#welcomeMessage"));
  name = "";
  password = "";
}

/**
 * Method is used to validate entries for first name
 * 
 * @returns {void}
 */
function testFirstName() 
{
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let firstNamePattern = /([A-Z][a-z]{1,25})/;
  //validates strings based on regex
  $("#firstName").on("blur", function () {
    if (!firstNamePattern.test($(this).val())) 
    {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid last name.");
    } 
    else 
    {
      messageArea.removeAttr("class").hide(); //if validation fails, flash message
    }
  });
}

/**
 * Method is used to validate entries for last name
 * 
 * @returns {void}
 */
function testLastName() 
{
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let lastNamePattern = /([A-Z][a-z]{1,25})/;
  //validates strings based on regex
  $("#lastName").on("blur", function () 
  {
    if (!lastNamePattern.test($(this).val())) 
    {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid last name."); 
    } 
    else 
    {
      messageArea.removeAttr("class").hide(); //if validation fails, flash the message
    }
  });
}
/**
 * Method is used to validate the entries for email address
 * 
 * @returns {void}
 */
function testEmailAddress() 
{
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let emailAddressPattern = /^([a-zA-Z0-9._%-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,6})*$/;

  //validates a string using regex
  $("#emailAddress").on("blur", function () 
  {
    if (!emailAddressPattern.test($(this).val()) || $(this).val().length < 1) 
    {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid Email Address.");
    } 
    else 
    {
      messageArea.removeAttr("class").hide(); //if validation fails, flash the message
    }
  });
}

/**
 * Method is used for validating password entries
 * 
 * @returns {void}
 */
function testPassword() 
{
  //sets the flashing message to hidden
  let messageArea = $("#messageArea").hide();
  let passwordPattern = /^.{6,}$/;
  //validates a string using regex
  $("#confirmPassword").on("blur", function () 
  {
    if (!passwordPattern.test($(this).val()))  //regex validation
    {
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please make sure password is more than 5 characters in length.");
    } 
    else if ($("#password").val() !== $(this).val()) //confirming that both passwords match
    {
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text(
          "Please make sure password and confirm password values match exactly."
        );
    } 
    else //if either thing fails, flash an error message
    {
      messageArea.removeAttr("class").hide();
    }
  });
}

/**
 * Function runs the validation methods created to run on a blur from the respective textboxes
 * 
 * @returns {void}
 */
function formValidation() 
{
  testFirstName();
  testLastName();
  testEmailAddress();
  testPassword();
}

/**
 * displayRegister - Method displays the register form for the user to input their data
 * 
 * @returns {void}
 */
function displayRegister() 
{
  // Inject message area before form
  $("form").before(`<div id="messageArea"></div>`);

  //hides the message 
  $("#messageArea").hide();
  //$("#firstName").focus();

  formValidation(); //validates on leaving a textbox

  $("#registerButton").on("click", (e) => 
  {
    e.preventDefault(); //prevents the default action for the register button on form

    let user = new core.User //creates a new user using the values input
    (
      firstName.value,
      lastName.value,
      firstName.value,
      emailAddress.value,
      password.value
    );

    if (messageArea.style.display === "none") 
    {
      console.log("New user registered");
      console.log("---------------------");
      console.log(user.toString());

      $("form")[0].reset();

      $("#messageArea")
        .show()
        .addClass("alert alert-success")
        .text("Successfully registered."); //Displays a positive flash message of success

      setTimeout(function () {
        $("#messageArea").hide();
      }, 3000);
    }
    else
    {
      console.log("Fix your input please.!"); //Something went wrong!
    }
  });
}
//Displays the form
displayRegister();
