//form
var email_final = "";
var verification_final = "";
var nickname_final = "";
var password_final = "";
var repassword_final = "";
var name_final = "";
var phoneNumber_final = "";
var idCardNumber_final = "";
var gender_final = "";
var btnNextStep = $(".register_next_btn");
$(".register_body").on("click", ".register_next_btn_to_info", function () {
    email_final = $.trim($("#input_email").val());
    verification_final = $.trim($("#input_verification").val());
    $(".register_body_email").hide();
    $(".register_body_info").show();
    btnNextStep.removeClass("register_next_btn_to_info");
    btnNextStep.addClass("register_next_btn_forbid");
});

$(".register_body").on("click", ".register_next_btn_to_personal", function () {
    nickname_final = $.trim($("#input_nickname").val());
    password_final = $.trim($("#input_password").val());
    repassword_final = $.trim($("#input_re_password").val());
    $(".register_body_info").hide();
    $(".register_body_personal").show();
    btnNextStep.removeClass("register_next_btn_to_info");
    btnNextStep.addClass("register_next_btn_forbid");
    btnNextStep.text("完成注册");
    $(".register_title").text("身份认证");
});

$(".register_body").on("click", ".register_next_btn_to_complete", function () {
    name_final = $.trim($("#input_name").val());
    phoneNumber_final = $.trim($("#input_phone").val());
    idCardNumber_final = $.trim($("#input_id").val());
    gender_final = $.trim($(".gender_line input[name=\"input_gender\"]:checked").val());

    //ajax
    //prepared data: email,nickname,password,name,phoneNumber,idCard,gender
    var data= {email:email_final,nickname:nickname_final,password:password_final,name:name_final,phoneNumber:phoneNumber_final,idCard:idCardNumber_final,gender:gender_final};
    console.log("RegisterAjax");
    console.log(data);
    console.log(JSON.stringify(data));
    $.ajax({
        url: "service/registerVolunteer.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("success!");
            console.log(msg);
            sessionStorage.setItem("user_info", JSON.stringify(msg));
            if(msg.a == "1"){
                $(".register_body_personal").hide();
                $(".register_body_complete").show();
                btnNextStep.removeClass("register_next_btn_forbid");
                btnNextStep.addClass("register_next_btn_to_login");
                btnNextStep.text("立即登录");
                $(".register_title").text("完成注册");
                setTimeout(function () {
                    location.href = "login.html";
                }, 5000);
            }else if(msg.a == "0"){
                alert("该邮箱已被注册！");
            }else{
                alert("内部错误，请联系管理员！");
            }
        },
        error: function (msg) {
            console.log("error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });
});

$(".register_body").on("click", ".register_next_btn_to_login", function () {
    location.href = "login.html";
});

function onStepOneBlur(){
    var email = $.trim($("#input_email").val());
    var verification = $.trim($("#input_verification").val());
    console.log(":"+email+":"+verification+":");
    if((email == "" || email == null) || (verification == "" || verification == null)){
        btnNextStep.removeClass("register_next_btn_to_info");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_info");
    }
}

function onStepTwoBlur(){
    var nickname = $.trim($("#input_nickname").val());
    var password = $.trim($("#input_password").val());
    var rePassword = $.trim($("#input_re_password").val());
    if((nickname == "" || nickname == null) || (password == "" || password == null) || (rePassword != password)){
        btnNextStep.removeClass("register_next_btn_to_personal");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_personal");
    }
}

function onStepThreeBlur(){
    var name = $.trim($("#input_name").val());
    var phoneNumber = $.trim($("#input_phone").val());
    var idCardNumber = $.trim($("#input_id").val());
    var gender = $.trim($(".gender_line input[name=\"input_gender\"]:checked").val());
    console.log(gender);
    if((name == "" || name == null) || (phoneNumber == "" || phoneNumber == null) || (idCardNumber == "" || idCardNumber == null) ||(gender == "" || gender == null)){
        btnNextStep.removeClass("register_next_btn_to_complete");
        btnNextStep.addClass("register_next_btn_forbid");
    } else {
        btnNextStep.removeClass("register_next_btn_forbid");
        btnNextStep.addClass("register_next_btn_to_complete");
    }
}
