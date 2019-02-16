var allPasswordInp = [];

(function() {

  $("input[type=password]").each(function(idx, ele) {
    allPasswordInp.push(ele)
  })

  routie({
    '': function() {
      showProgress()
      $("#passwordDiv").addClass("scale-out")
      $(".formTitle").html("Sign In")
      /* Show Login Form */
      $("#formContainer").removeClass("goLeft").addClass("goRight")

    },

    'hasPassword': function() {
      showProgress()
      $("#passwordDiv").addClass("pulse").removeClass("scale-out")
      $("#enterOTPDiv").addClass("scale-out")
      $(".passwordOrOTP").html("Enter OTP").attr("data-PassOTP","OTP").attr("href", "#enterOTP")
      $(".loginNextBtn").addClass("hide")
      $(".loginBtn").removeClass("hide")
    },

    'enterOTP': function() {
      showProgress()

      setTimeout(function() {
        M.toast({html: 'OTP Sent!', classes: 'rounded'})
      }, 600)

      $("#passwordDiv").addClass("scale-out")
      $("#enterOTPDiv").addClass("pulse").removeClass("scale-out")
      $(".passwordOrOTP").html("I have Password").attr("data-PassOTP","Password").attr("href", "#hasPassword")
      $(".loginNextBtn").addClass("hide")
      $(".loginBtn").removeClass("hide")

    },

    'createAccountNow': function() {
      $(".formTitle").html("Sign Up")
      showProgress()
      /* Show Signup Form */
      $("#formContainer").removeClass("goRight").addClass("goLeft")
    }
  });

})()

function showProgress() {
  $("#progress-bar").removeClass("hidden")
  setTimeout(function() {
    $("#progress-bar").addClass("hidden")
  }, 500)
}

function showPassword() {
  var iconText = $(".showPassword i").text();
  var input_type = (iconText == "visibility") ? "text" : "password";

  if(input_type == "text") {
    $(".showPassword i").text("visibility_off");
  }else{
    $(".showPassword i").text("visibility");
  }

  $.each(allPasswordInp, function(idx, ele) {
    $(ele).attr("type", input_type);
  })
}
