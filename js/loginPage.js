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
    }
});

$(".register_btn").click(function (e) {
    location.href = "register.html";
});