function init() {
    initUser();
    $(".help_page").css({background: '#ff664b'});
    $("#help_menu_reg").css({background: "#fff6f6"});
}

$("#help_menu_reg").click(function (e) {
    $("#help_menu_reg").css({background: "#fff6f6"});
    $("#help_menu_acc").css({background: "#fff"});
    $("#help_menu_web").css({background: "#fff"});
    $("#help_menu_cus").css({background: "#fff"});
    $(".account_question").show();
    $(".activity_organized").hide();
    $(".website_instructions").hide();
    $(".contact_us").hide();
});

$("#help_menu_acc").click(function (e) {
    $("#help_menu_reg").css({background: "#fff"});
    $("#help_menu_acc").css({background: "#fff6f6"});
    $("#help_menu_web").css({background: "#fff"});
    $("#help_menu_cus").css({background: "#fff"});
    $(".account_question").hide();
    $(".activity_organized").show();
    $(".website_instructions").hide();
    $(".contact_us").hide();
});

$("#help_menu_web").click(function (e) {
    $("#help_menu_reg").css({background: "#fff"});
    $("#help_menu_acc").css({background: "#fff"});
    $("#help_menu_web").css({background: "#fff6f6"});
    $("#help_menu_cus").css({background: "#fff"});
    $(".account_question").hide();
    $(".activity_organized").hide();
    $(".website_instructions").show();
    $(".contact_us").hide();
});

$("#help_menu_cus").click(function (e) {
    $("#help_menu_reg").css({background: "#fff"});
    $("#help_menu_acc").css({background: "#fff"});
    $("#help_menu_web").css({background: "#fff"});
    $("#help_menu_cus").css({background: "#fff6f6"});
    $(".account_question").hide();
    $(".activity_organized").hide();
    $(".website_instructions").hide();
    $(".contact_us").show();
});