$(".login_btn").click(function () {
    var jqelet_acc = $("#input_account");
    var jqelet_pwd = $("#input_password");
    var account = $.trim(jqelet_acc.val());
    var password = $.trim(jqelet_pwd.val());

    console.log(account+":"+password);
    if(account == "" || account == null){
        changeBorderColor(jqelet_acc, "#ff0700");
        $("#account_tip").text("请输入邮箱！");
        jqelet_acc.shake(2, 10, 400);
    }else if(password == "" || password == null){
        $("#pwd_tip").text("请输入密码！");
        changeBorderColor(jqelet_pwd, "#ff0700");
        jqelet_pwd.shake(2, 10, 400);
    }else if(!drag_validate){
        $("#drag_tip").text("请验证！");
        changeBorderColor($("#drag"), "#ff0700");
        $("#drag").shake(2, 10, 400);
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
                if(msg.a == "1"){
                    //success
                    sessionStorage.setItem("user_info", JSON.stringify(msg));
                    location.href = "home.html";
                }else if(msg.a == "0"){
                    changeBorderColor(jqelet_acc, "#ff0700");
                    $("#account_tip").text("该用户不存在！");
                    jqelet_acc.shake(2, 10, 400);
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