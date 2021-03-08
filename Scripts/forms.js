// Upon login button with username and password, show name in nav between contact and login/logout link
$("#loginForm .btn-success").on("click", function (e) {
  e.preventDefault();
  console.log("Clicked!");

  // Get values for username and password
  let name = $("#userName").val();
  let password = $("#password").val();

  if ($("#welcomeMessage").text().length < 1) {
    $(".login-container button").before(
      '<span id="welcomeMessage" class="text-white px-4 text-nowrap my-auto">Hello ' +
        name +
        "</span>"
    );
    $(".login-container button").text("Logout");
  }

  console.log(`Name: ${name}\nPassword: ${password}`);
});

$(".btn-login").on("click", logoutUser);

/**
 * logoutUser - toggles text of login button and removes welcome message
 */
function logoutUser() {
  $("#welcomeMessage").remove();
  $(".login-container button").text("Login");
  $(".login-container").remove($("#welcomeMessage"));
  name = "";
  password = "";
}

function testFirstName() {
  let messageArea = $("#messageArea").hide();
  let firstNamePattern = /([A-Z][a-z]{1,25})/;

  $("#firstName").on("blur", function () {
    if (!firstNamePattern.test($(this).val())) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid last name.");
    } else {
      messageArea.removeAttr("class").hide();
    }
  });
}

function testLastName() {
  let messageArea = $("#messageArea").hide();
  let lastNamePattern = /([A-Z][a-z]{1,25})/;

  $("#lastName").on("blur", function () {
    if (!lastNamePattern.test($(this).val())) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid last name.");
    } else {
      messageArea.removeAttr("class").hide();
    }
  });
}

function testEmailAddress() {
  let messageArea = $("#messageArea");
  let emailAddressPattern = /^([a-zA-Z0-9._%-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,6})*$/;

  $("#emailAddress").on("blur", function () {
    if (!emailAddressPattern.test($(this).val()) || $(this).val().length < 1) {
      $(this).trigger("focus").trigger("select");
      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please enter a valid Email Address.");
    } else {
      messageArea.removeAttr("class").hide();
    }
  });
}

function testPassword() {
  let messageArea = $("#messageArea");
  let passwordPattern = /^.{6,}$/;

  $("#confirmPassword").on("blur", function () {
    if (!passwordPattern.test($(this).val())) {
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text("Please make sure password is more than 5 characters in length.");
    } else if ($("#password").val() !== $(this).val()) {
      $("#password").trigger("focus").trigger("select");

      messageArea
        .show()
        .addClass("alert alert-danger")
        .text(
          "Please make sure password and confirm password values match exactly."
        );
    } else {
      messageArea.removeAttr("class").hide();
    }
  });
}

function formValidation() {
  testFirstName();
  testLastName();
  testEmailAddress();
  testPassword();
}

/**
 * displayRegister
 */
function displayRegister() {
  // Inject message area before form
  $("form").before(`<div id="messageArea"></div>`);

  //
  $("#messageArea").hide();
  $("#firstName").focus();

  formValidation();

  $("#registerButton").on("click", (e) => {
    e.preventDefault();

    let user = new core.User(
      firstName.value,
      lastName.value,
      firstName.value,
      emailAddress.value,
      password.value
    );

    if (messageArea.style.display === "none") {
      console.log("New user registered");
      console.log("---------------------");
      console.log(user.toString());

      $("form")[0].reset();

      $("#messageArea")
        .show()
        .addClass("alert alert-success")
        .text("Successfully registered.");

      setTimeout(function () {
        $("#messageArea").hide();
      }, 3000);
    } else {
      console.log("Fix your input please.!");
    }
  });
}

displayRegister();
