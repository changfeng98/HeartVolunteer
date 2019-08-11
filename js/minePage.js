var menuItems = [$("#nav_checking_data"), $("#nav_modify_info"), $("#nav_change_head"), $("#nav_change_password"), $("#nav_post_topic"), $("#nav_participation_topic"), $("#nav_sent_topic"), $("#nav_post_activity"), $("#nav_sent_activity")];

function init(){
    initUser();
    $("#nav_checking_data").addClass("mine_menu_item_hovered");

    //我的
    var data= {advisory:"新闻"};
    console.log("OrganizerAjax: ");
    console.log(data);
    $.ajax({
        url: "service/organizer.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("OrganizerAjax:success!");
            console.log(msg);
        },
        error: function (msg) {
            console.log("OrganizerAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });
}

function onPostTopic(){
    var topic_name = $.trim($('.article_title').val());
    var topic_name = $.trim($('.article_title').val());
    var topic_name = $.trim($('.article_title').val());
    var topic_name = $.trim($('.article_title').val());
    //PostTopic
    var data= {topic_name:1};
    console.log("OrganizerAjax: ");
    console.log(data);
    $.ajax({
        url: "service/organizer.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("OrganizerAjax:success!");
            console.log(msg);
        },
        error: function (msg) {
            console.log("OrganizerAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });
}

function onSelectType_1(){
    $('#type_1').addClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_2(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').addClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_3(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').addClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_4(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').addClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_5(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').addClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_6(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').addClass("article_tag_selected");
    $('#type_7').removeClass("article_tag_selected");
}

function onSelectType_7(){
    $('#type_1').removeClass("article_tag_selected");
    $('#type_2').removeClass("article_tag_selected");
    $('#type_3').removeClass("article_tag_selected");
    $('#type_4').removeClass("article_tag_selected");
    $('#type_5').removeClass("article_tag_selected");
    $('#type_6').removeClass("article_tag_selected");
    $('#type_7').addClass("article_tag_selected");
}

$.fn.showMineItem = function (obj) {
    for(var i = 0; i < 9; i++){
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
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_modify_info").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").showMineItem($("#nav_modify_info"));
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_change_head").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").showMineItem($("#nav_change_head"));
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_change_password").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").showMineItem($("#nav_change_password"));
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_post_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").showMineItem($("#nav_post_topic"));
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_participation_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").showMineItem($("#nav_participation_topic"));
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_sent_topic").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").showMineItem($("#nav_sent_topic"));
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").hide();
});

$("#nav_post_activity").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").showMineItem($("#nav_post_activity"));
    $(".mine_sent_activity").hide();
});

$("#nav_sent_activity").click(function (e) {
    $(".mine_checking_data").hide();
    $(".mine_modify_info").hide();
    $(".mine_change_head").hide();
    $(".mine_change_password").hide();
    $(".mine_post_topic").hide();
    $(".mine_participation_topic").hide();
    $(".mine_sent_topic").hide();
    $(".mine_post_activity").hide();
    $(".mine_sent_activity").showMineItem($("#nav_sent_activity"));
});