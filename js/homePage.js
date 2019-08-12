var catDialog = $("#cat_dialog");
var catWord = $("#cat_word");

//number
var volunteer_num;
var activity_num;

function init() {
    initUser();
    $(".index_page").css({background: '#ff664b'});
    catWord_1_sleep();
    showMap_2();

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
    var data= {class:"全部",city:"日照"};
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
            initActivity(msg);
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
            initCommunity(msg);
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
            initNews(msg);
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
            initOrganization(msg);
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

//渲染活动列表
function initActivity(msg) {
    for(var i in msg){
        console.log(i%4);
        if(i <= 7){
            if(i == 0 || i == 4){
                $(".home_activity_content").append('<tr class="home_activity_content_row'+i+'">\n' +
                    '                <td>\n' +
                    '                    <div class="activity_item_body">\n' +
                    '                        <img class="activity_item_pic" src="'+msg[i].picture+'"/>\n' +
                    '                        <h3 class="activity_item_title">'+msg[i].act_name+'</h3>\n' +
                    '                        <p class="activity_item_spot">活动地点：'+msg[i].act_region+'</p>\n' +
                    '                        <p class="activity_item_organized">活动发起：'+msg[i].Founder+'</p>\n' +
                    '                        <p class="activity_item_end">报名截止：'+msg[i].Ending_time+'</p>\n' +
                    '                        <div class="activity_item_bottom">\n' +
                    '                            <img src="images/ic_people.png" onclick=""/>\n' +
                    '                            <p class="activity_item_people">'+msg[i].Rec_ing+'</p>\n' +
                    '                            <img src="images/ic_see.png" onclick=""/>\n' +
                    '                            <p class="activity_item_see">'+msg[i].look+'</p>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </td>\n' +
                    '             </tr>');
            }
            if (i > 0 && i <= 3){
                $(".home_activity_content_row0").append('<td>\n' +
                    '                    <div class="activity_item_body">\n' +
                    '                        <img class="activity_item_pic" src="'+msg[i].picture+'"/>\n' +
                    '                        <h3 class="activity_item_title">'+msg[i].act_name+'</h3>\n' +
                    '                        <p class="activity_item_spot">活动地点：'+msg[i].act_region+'</p>\n' +
                    '                        <p class="activity_item_organized">活动发起：'+msg[i].Founder+'</p>\n' +
                    '                        <p class="activity_item_end">报名截止：'+msg[i].Ending_time+'</p>\n' +
                    '                        <div class="activity_item_bottom">\n' +
                    '                            <img src="images/ic_people.png" onclick=""/>\n' +
                    '                            <p class="activity_item_people">'+msg[i].Rec_ing+'</p>\n' +
                    '                            <img src="images/ic_see.png" onclick=""/>\n' +
                    '                            <p class="activity_item_see">'+msg[i].look+'</p>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </td>');
            }
            if (i > 4 && i <= 8){
                $(".home_activity_content_row4").append('<td>\n' +
                    '                    <div class="activity_item_body">\n' +
                    '                        <img class="activity_item_pic" src="'+msg[i].picture+'"/>\n' +
                    '                        <h3 class="activity_item_title">'+msg[i].act_name+'</h3>\n' +
                    '                        <p class="activity_item_spot">活动地点：'+msg[i].act_region+'</p>\n' +
                    '                        <p class="activity_item_organized">活动发起：'+msg[i].Founder+'</p>\n' +
                    '                        <p class="activity_item_end">报名截止：'+msg[i].Ending_time+'</p>\n' +
                    '                        <div class="activity_item_bottom">\n' +
                    '                            <img src="images/ic_people.png" onclick=""/>\n' +
                    '                            <p class="activity_item_people">'+msg[i].Rec_ing+'</p>\n' +
                    '                            <img src="images/ic_see.png" onclick=""/>\n' +
                    '                            <p class="activity_item_see">'+msg[i].look+'</p>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </td>');
            }
        }else {
            break;
        }
    }
}

//渲染社区列表
function initCommunity(msg) {
    for(var i in msg){
        console.log(i%4);
        if(i <= 1){
            $(".home_group_content_community").append('<div class="group_content">\n' +
                '                <img class="group_item_pic" src="'+msg[i].topic_image+'"/>\n' +
                '                <div class="group_item">\n' +
                '                    <h3 class="group_item_title">'+msg[i].topic_name+'</h3>\n' +
                '                    <p class="group_item_title">'+msg[i].topic_content+'</p>\n' +
                '                </div>\n' +
                '            </div>');
        }else {
            break;
        }
    }
}

//渲染资讯列表
function initNews(msg) {
    for(var i in msg){
        console.log(msg);
        if(i <= 2){
            $(".home_news_content").append('<div class="news_content">\n' +
                '                <img class="news_item_pic" src="'+msg[i].image+'"/>\n' +
                '                <h3 class="news_item_title">'+msg[i].news_name+'</h3>\n' +
                '                <p class="news_item_author">'+msg[i].source+'</p>\n' +
                '            </div>');
        }else {
            break;
        }
    }
}

//渲染组织列表
function initOrganization(msg) {
    for(var i in msg){
        console.log(msg);
        if(i <= 1){
            $(".home_organization_content").append('<div class="organization_content">\n' +
                '                <img class="organization_item_pic" src="'+msg[i].org_avatar+'"/>\n' +
                '                <div class="organization_item">\n' +
                '                    <h3 class="organization_item_title">'+msg[i].org_name+'</h3>\n' +
                '                    <p class="organization_item_place">'+msg[i].ad_name+'</p>\n' +
                '                </div>\n' +
                '                <div class="organization_item">\n' +
                '                    <p class="organization_item_activities">53个活动</p>\n' +
                '                    <p class="organization_item_duration">已志愿4027天</p>\n' +
                '                </div>\n' +
                '            </div>');
        }else {
            break;
        }
    }
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

function showMap_1() {
    setTimeout(function () {
        $('#map_1').fadeIn(500);
        $('#map_2').hide();
        $('#map_3').hide();
        $('#map_nav_1').css({'background':'rgba(238, 70, 57, 1)'});
        $('#map_nav_2').css({'background':'rgba(255, 255, 255, 0.3)'});
        $('#map_nav_3').css({'background':'rgba(255, 255, 255, 0.3)'});
        showMap_2();
    }, 5000);
}

function showMap_2() {
    setTimeout(function () {
        $('#map_1').hide();
        $('#map_2').fadeIn(500);
        $('#map_3').hide();
        $('#map_nav_1').css({'background':'rgba(255, 255, 255, 0.3)'});
        $('#map_nav_2').css({'background':'rgba(238, 70, 57, 1)'});
        $('#map_nav_3').css({'background':'rgba(255, 255, 255, 0.3)'});
        showMap_3();
    }, 5000);
}

function showMap_3() {
    setTimeout(function () {
        $('#map_1').hide();
        $('#map_2').hide();
        $('#map_3').fadeIn(500);
        $('#map_nav_1').css({'background':'rgba(255, 255, 255, 0.3)'});
        $('#map_nav_2').css({'background':'rgba(255, 255, 255, 0.3)'});
        $('#map_nav_3').css({'background':'rgba(238, 70, 57, 1)'});
        showMap_1();
    }, 5000);
}