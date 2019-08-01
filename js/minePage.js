var menuItems = [$("#nav_checking_data"), $("#nav_modify_info"), $("#nav_change_head"), $("#nav_change_password"), $("#nav_post_topic"), $("#nav_participation_topic"), $("#nav_sent_topic")];

function init(){
    $("#nav_checking_data").addClass("mine_menu_item_hovered");
}

$.fn.showMineItem = function (obj) {
    for(var i = 0; i < 7; i++){
        if(menuItems[i].is(obj)){
            obj.addClass("mine_menu_item_hovered");
        } else {
            menuItems[i].removeClass("mine_menu_item_hovered");
        }
    }
    this.show();
    return this;
}

$("#nav_checking_data").click(function (e) {
    $(".mine_checking_data").showMineItem($("#nav_checking_data"));
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
});

$("#nav_modify_info").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").showMineItem($("#nav_modify_info"));
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
});

$("#nav_change_head").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").showMineItem($("#nav_change_head"));
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
});

$("#nav_change_password").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").showMineItem($("#nav_change_password"));
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
});

$("#nav_post_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").showMineItem($("#nav_post_topic"));
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
});

$("#nav_participation_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").showMineItem($("#nav_participation_topic"));
    $(".mine_sent_topic").hide();
});

$("#nav_sent_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").showMineItem($("#nav_sent_topic"));
});