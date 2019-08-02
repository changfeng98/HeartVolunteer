//form
var email_final = "";
var verification_final = "";
var newPassword_final = "";
var repassword_final = "";
var idCardNumber_final = "";

var btnNextStep = $(".register_next_btn");
$(".register_body").on("click", ".register_next_btn_to_info", function () {
    email_final = $.trim($("#input_email").val());
    verification_final = $.trim($("#input_verification").val());
    idCardNumber_final = $.trim($("#input_id").val());
    $(".register_body_email").hide();
    $(".register_body_info").show();
    btnNextStep.removeClass("register_next_btn_to_info");
    btnNextStep.addClass("register_next_btn_forbid");
    btnNextStep.text("设置新密码");
});

$(".register_body").on("click", ".register_next_btn_to_complete", function () {
    newPassword_final = $.trim($("#input_new_password").val());
    repassword_final = $.trim($("#input_re_password").val());
    $(".register_body_info").hide();
    $(".register_body_complete").show();
    btnNextStep.removeClass("register_next_btn_to_complete");
    btnNextStep.removeClass("register_next_btn_forbid");
    btnNextStep.addClass("register_next_btn_to_login");
    btnNextStep.text("立即登录");
    $(".register_title").text("密码已重置");
    setTimeout(function () {
        location.href = "login.html";
    }, 5000);
});

$(".register_body").on("click", ".register_next_btn_to_login", function () {
    location.href = "login.html";
});

function onStepOneBlur(){
    var email = $.trim($("#input_email").val());
    var verification = $.trim($("#input_verification").val());
    var idCardNumber = $.trim($("#input_id").val());
    if((email == "" || email == null) || (verification == "" || verification == null) || (idCardNumber == "" || idCardNumber == null)){
        btnNextStep.removeClass("register_next_btn_to_info");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_info");
    }
}

function onStepTwoBlur(){
    var password = $.trim($("#input_new_password").val());
    var rePassword = $.trim($("#input_re_password").val());
    if((password == "" || password == null) || (rePassword != password)){
        btnNextStep.removeClass("register_next_btn_to_complete");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_complete");
    }
}
