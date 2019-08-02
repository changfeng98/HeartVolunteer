$(".login_btn").click(function () {
    var jqelet_acc = $("#input_account");
    var jqelet_pwd = $("#input_password");
    var account = $.trim(jqelet_acc.val());
    var password = $.trim(jqelet_pwd.val());

    console.log(account+":"+password);
    if(account == "" || account == null){
        changeBorderColor(jqelet_acc, "#ff0700");
        jqelet_acc.shake(2, 10, 400);
    }else if(password == "" || password == null){
        changeBorderColor(jqelet_pwd, "#ff0700");
        jqelet_pwd.shake(2, 10, 400);
    }else{
        //ajax
        //prepared data: usernmae,password
        var data= {name:account,password:password};
        console.log("LoginAjax: ");
        console.log(data);
        $.ajax({
            url: "service/login.php?data= "+JSON.stringify(data), //后台请求数据
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
                    waitToLogin(5);
                    // setTimeout(function () {
                    //     location.href = "login.html";
                    // }, 5000);
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
    }
});

$(".register_btn").click(function (e) {
    location.href = "register.html";
});