var menuItems = [$("#nav_checking_data"), $("#nav_modify_info"), $("#nav_change_head"), $("#nav_change_password"), $("#nav_post_topic"), $("#nav_participation_topic"), $("#nav_sent_topic"), $("#nav_post_activity"), $("#nav_sent_activity")];

function init(){
    initUser();
    $("#nav_checking_data").addClass("mine_menu_item_hovered");
    initUserInfo();
}

function initUserInfo(){
    $('.mine_info_head').attr('src', user_info.user_avatar);
    $('#modify_avatar').attr('src', user_info.user_avatar);
    $('.mine_info_nickname').text(user_info.nickname);
    $('.mine_info_gender').text(user_info.sex);
    if(user_info.sex == '男'){
        $('.mine_info_gender_icon').attr('src', 'images/ic_gender_male.png');
    }else{
        $('.mine_info_gender_icon').attr('src', 'images/ic_gender_female.png');
    }
    $('.mine_info_phone').text(user_info.user_phone);
    $('.mine_info_address').text(user_info.province + user_info.city);
    $('.mine_info_introduce').text(user_info.introduce);

    $('#modify_username').val(user_info.nickname);
    if(user_info.sex == '男'){
        $('#input_gender_male').attr('checked','checked');
        $('#input_gender_female').removeAttr('checked');
    }else{
        $('#input_gender_male').removeAttr('checked');
        $('#input_gender_female').attr('checked','checked');
    }
    $('#modify_phone').val(user_info.user_phone);
    $('#modify_province').val(user_info.province);
    $('#modify_city').val(user_info.city);
    $('#modify_introduce').val(user_info.introduce);
    $('#modify_email').val(user_info.user_mailbox);
}

function updateSession(data) {
    user_info.nickname = data.nickname;
    user_info.sex = data.gender;
    user_info.user_phone = data.phoneNumber;
    user_info.province = data.company;
    user_info.address = data.address;
    sessionStorage.setItem("user_info", JSON.stringify(user_info));
    location.reload();
    showTip("信息修改成功！");
}

function onModifyInfo(){
    var modify_email = $.trim($('#modify_email').val());
    var modify_gender = $.trim($(".gender_line input[name=\"input_gender\"]:checked").val());
    var modify_phone = $.trim($('#modify_phone').val());
    var modify_province = $.trim($('#modify_province').val());
    var modify_city = $.trim($('#modify_city').val());
    var modify_introduce = $.trim($('#modify_introduce').val());
    if(modify_email != '' && modify_email != null){
        $('#modify_email').css({'border-color': 'rgba(203,54,56,0)'});
        if(modify_gender != '' && modify_gender != null){
            $('#modify_gender').css({'border-color': 'rgba(203,54,56,0)'});
            if(modify_phone != '' && modify_phone != null){
                $('#modify_phone').css({'border-color': 'rgba(203,54,56,0)'});
                if(modify_province != '' && modify_province != null){
                    $('#modify_province').css({'border-color': 'rgba(203,54,56,0)'});
                    if(modify_city != '' && modify_city != null){
                        $('#modify_city').css({'border-color': 'rgba(203,54,56,0)'});
                        if(modify_introduce != '' && modify_introduce != null){
                            $('#modify_introduce').css({'border-color': 'rgba(203,54,56,0)'});
                            //修改信息ajax
                            var data= {name:user_info.nickname,email:modify_email,nickname:modify_gender,phoneNumber:modify_phone,idCard:modify_province,gender:modify_city,introduce:modify_introduce};
                            console.log(data);
                            console.log("ModifyVolunteerInfoAjax");
                            $.ajax({
                                url: "/IBDS/update_Volunteer.php?data="+JSON.stringify(data), //后台请求数据
                                dataType: "json",
                                type: "get",
                                success: function (msg) {
                                    console.log("ModifyVolunteerInfoAjax:Success!");
                                    console.log(msg);
                                    if(msg.a == '1'){
                                        updateSession(data);
                                    }else {
                                        showTip("信息修改失败！");
                                    }
                                },
                                error: function (msg) {
                                    console.log("ModifyVolunteerInfoAjax:Error!");
                                    console.log(msg);
                                    alert("请求失败，请重试");
                                    showTip("信息修改失败！");
                                }
                            });
                        }else {
                            $('#modify_introduce').css({'border-color': '#cb3638'});
                            $('#modify_introduce').shake(2, 10, 400);
                        }
                    }else {
                        $('#modify_city').css({'border-color': '#cb3638'});
                        $('#modify_city').shake(2, 10, 400);
                    }
                }else {
                    $('#modify_province').css({'border-color': '#cb3638'});
                    $('#modify_province').shake(2, 10, 400);
                }
            }else {
                $('#modify_phone').css({'border-color': '#cb3638'});
                $('#modify_phone').shake(2, 10, 400);
            }
        }else {
            $('#modify_gender').css({'border-color': '#cb3638'});
            $('#modify_gender').shake(2, 10, 400);
        }
    }else {
        $('#modify_email').css({'border-color': '#cb3638'});
        $('#modify_email').shake(2, 10, 400);
    }

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