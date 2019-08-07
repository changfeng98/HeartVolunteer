var catDialog = $("#cat_dialog");
var catWord = $("#cat_word");

//number
var volunteer_num;
var activity_num;

function init() {
    initUser();
    $(".index_page").css({background: '#ff664b'});
    catWord_1_sleep();

    //志愿人数、发起活动数ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    console.log("NumbersAjax: ");
    $.ajax({
        url: "service/number.php", //后台请求数据
        success: function (msg) {
            console.log("NumbersAjax:success!");
            console.log(msg);
            msg = JSON.parse(msg);
            volunteer_num = msg.volunteer_num;
            activity_num = msg.activity_num;
            console.log(volunteer_num);
            console.log(activity_num);
        },
        error: function (msg) {
            console.log("NumbersAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });
    //活动ajax
    //发出: class(类别), city(城市)
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {class:"全部",city:"1"};
    console.log("ActivityAjax: ");
    console.log(data);
    $.ajax({
        url: "service/activity.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("ActivityAjax:success!");
            console.log(msg);
        },
        error: function (msg) {
            console.log("ActivityAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });

    //社区ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {class:"全部"};
    console.log("CommunityAjax: ");
    console.log(data);
    $.ajax({
        url: "service/community.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("CommunityAjax:success!");
            console.log(msg);
        },
        error: function (msg) {
            console.log("CommunityAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });

    //资讯ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {advisory:"新闻"};
    console.log("NewsAjax: ");
    console.log(data);
    $.ajax({
        url: "service/advisory.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("NewsAjax:success!");
            console.log(msg);
        },
        error: function (msg) {
            console.log("NewsAjax:error!");
            console.log(msg);
            var parsedJson = JSON.stringify(msg);
            console.log(parsedJson);
            var jsonData = JSON.parse(parsedJson);
            console.log(jsonData);
            alert("请求失败，请重试");
        }
    });

    //组织团体ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
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

function catWord_1_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_1, 3000);
}

function catWord_1() {
    $("#cat_word").html("已有<br>"+volunteer_num+"<br>个小伙伴!");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_2_sleep, 5000);
}

function catWord_2_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_2, 3000);
}

function catWord_2() {
    $("#cat_word").html("我们共发起了<br>"+activity_num+"<br>个活动!");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_3_sleep, 5000);
}

function catWord_3_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_3, 3000);
}

function catWord_3() {
    $("#cat_word").html("奉献他人，<br>提升自己!");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_4_sleep, 5000);
}

function catWord_4_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_4, 3000);
}

function catWord_4() {
    $("#cat_word").html("心志愿，<br>用心做志愿!");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_5_sleep, 5000);
}

function catWord_5_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_5, 3000);
}

function catWord_5() {
    $("#cat_word").html("喵喵喵~~");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_1_sleep, 5000);
}