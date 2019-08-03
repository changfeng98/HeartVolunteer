c
function init() {
    user_info = JSON.parse(sessionStorage.getItem("user_info"));
    console.log(user_info);
    if(user_info == null || user_info.a != "1"){
        $(".no_login_body").show();
        $(".user_body").hide();
    }else{
        $(".no_login_body").hide();
        $(".user_body").show();
        $(".user_head").attr("src", user_info.user_avatar);
        $(".user_name").text(user_info.nickname);
    }
    $(".help_page").css({background: '#ff664b'});

}