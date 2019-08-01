//form
var organizeName_fianl = "";
var organizeEmail_final = "";
var organizePhone_final = "";
var organizePassword_final = "";
var adminEmail_final = "";
var verification_final = "";
var adminName_final = "";
var adminPhone_final = "";
var idCard_final = "";
var serviceClient_final = "";
var serviceType_final = "";

var btnNextStep = $(".register_next_btn");
$(".register_body").on("click", ".register_next_btn_to_admin", function () {
    organizeName_fianl = $.trim($("#input_organize_name").val());
    organizePassword_final = $.trim($("#input_organize_password").val());
    organizeEmail_final = $.trim($("#input_organize_email").val());
    organizePhone_final = $.trim($("#input_organize_phone").val());
    $(".register_body_organize").hide();
    $(".register_body_admin").show();
    btnNextStep.removeClass("register_next_btn_to_admin");
    btnNextStep.addClass("register_next_btn_forbid");
    $(".register_title").text("管理员信息");
});

$(".register_body").on("click", ".register_next_btn_to_personal", function () {
    adminEmail_final = $.trim($("#input_admin_email").val());
    verification_final = $.trim($("#input_verification").val());
    $(".register_body_admin").hide();
    $(".register_body_personal").show();
    btnNextStep.removeClass("register_next_btn_to_personal");
    btnNextStep.addClass("register_next_btn_forbid");
    btnNextStep.text("完成注册");
    $(".register_title").text("身份认证");
});

$(".register_body").on("click", ".register_next_btn_to_complete", function () {
    adminName_final = $.trim($("#input_admin_name").val());
    adminPhone_final = $.trim($("#input_admin_phone").val());
    idCard_final = $.trim($("#input_admin_id").val());
    $(".register_body_personal").hide();
    $(".register_body_complete").show();
    btnNextStep.removeClass("register_next_btn_forbid");
    btnNextStep.addClass("register_next_btn_to_login");
    btnNextStep.text("立即登录");
    $(".register_title").text("完成注册");
    setTimeout(function () {
        location.href = "login.html";
    }, 5000);
});

// $(".register_body").on("click", ".register_next_btn_to_complete", function () {
//     $(".register_body_service").hide();
//     $(".register_body_complete").show();
//     btnNextStep.removeClass("register_next_btn_to_complete");
//     btnNextStep.addClass("register_next_btn_forbid");
//     btnNextStep.text("立即登录");
//     $(".register_title").text("完成注册");
//     setTimeout(function () {
//         location.href = "login.html";
//     }, 5000);
// });

$(".register_body").on("click", ".register_next_btn_to_login", function () {
    location.href = "login.html";
});

function onStepOneBlur(){
    var organizeName = $.trim($("#input_organize_name").val());
    var organizePassword = $.trim($("#input_organize_password").val());
    var organizeEmail = $.trim($("#input_organize_email").val());
    var organizePhone = $.trim($("#input_organize_phone").val());
    if((organizeName == "" || organizeName == null) || (organizePassword == "" || organizePassword == null) || (organizeEmail == "" || organizeEmail == null) || (organizePhone == "" || organizePhone == null)){
        btnNextStep.removeClass("register_next_btn_to_admin");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_admin");
    }
}

function onStepTwoBlur(){
    var adminEmail = $.trim($("#input_admin_email").val());
    var verification = $.trim($("#input_verification").val());
    if((adminEmail == "" || adminEmail == null) || (verification == "" || verification == null)){
        btnNextStep.removeClass("register_next_btn_to_personal");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_personal");
    }
}

function onStepThreeBlur(){
    var adminName = $.trim($("#input_admin_name").val());
    var adminPhone = $.trim($("#input_admin_phone").val());
    var idCard = $.trim($("#input_admin_id").val());
    if((adminName == "" || adminName == null) || (adminPhone == "" || adminPhone == null) || (idCard == "" || idCard == null)){
        btnNextStep.removeClass("register_next_btn_to_complete");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_complete");
    }
}

// function onStepFourBlur(){
//     if((name == "" || name == null) || (phoneNumber == "" || phoneNumber == null) || (idCardNumber == "" || idCardNumber == null) ||(gender == "" || gender == null)){
//         btnNextStep.removeClass("register_next_btn_to_complete");
//         btnNextStep.addClass("register_next_btn_forbid");
//     } else {
//         btnNextStep.removeClass("register_next_btn_forbid");
//         btnNextStep.addClass("register_next_btn_to_complete");
//     }
//         btnNextStep.removeClass("register_next_btn_forbid");
//         btnNextStep.addClass("register_next_btn_to_complete");
// }