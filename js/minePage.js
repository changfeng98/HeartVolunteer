var menuItems = [$("#nav_checking_data"), $("#nav_modify_info"), $("#nav_change_head"), $("#nav_change_password"), $("#nav_post_topic"), $("#nav_participation_topic"), $("#nav_sent_topic"), $("#nav_post_activity"), $("#nav_sent_activity")];
var selectedTag = '';

function init(){
    initUser();
    $("#nav_checking_data").addClass("mine_menu_item_hovered");
    initUserInfo();
}

function initUserInfo(){
    $('#session_info').val(user_info.nickname);
    if(user_info.b == '1'){
        $('.mine_info_head').attr('src', 'picture/'+user_info.user_avatar);
        $('#modify_avatar').attr('src', 'picture/'+user_info.user_avatar);
        $('.mine_info_nickname').text(user_info.nickname);
        $('.mine_info_gender').text(user_info.sex);
        if(user_info.sex == '男'){
            $('.mine_info_gender_icon').attr('src', 'images/ic_gender_male.png');
        }else{
            $('.mine_info_gender_icon').attr('src', 'images/ic_gender_female.png');
        }
        $('.mine_info_phone').text(user_info.user_phone);
        $('.mine_info_address').text(user_info.province + user_info.city);
        if(user_info.introduce != '' && user_info.introduce != null){
            $('.mine_info_introduce').text(user_info.introduce);
        }else {
            $('.mine_info_introduce').text('无');
        }

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
    }else {
        $('.mine_info_head').attr('src', user_info.org_avatar);
        $('#modify_avatar').attr('src', user_info.org_avatar);
        $('.mine_info_nickname').text(user_info.org_name);
        $('.mine_info_phone').text(user_info.org_phone);
        $('.mine_info_address').text(user_info.province + user_info.city);
        if(user_info.introduce != '' && user_info.introduce != null){
            $('.mine_info_introduce').text(user_info.introduce);
        }else {
            $('.mine_info_introduce').text('无');
        }

        $('#modify_org_username').val(user_info.org_name);
        $('#modify_org_phone').val(user_info.org_phone);
        $('#modify_org_province').val(user_info.province);
        $('#modify_org_city').val(user_info.city);
        $('#modify_org_introduce').val(user_info.introduce);
        $('#modify_org_email').val(user_info.org_mailbox);
        $('#modify_ad_phone').val(user_info.ad_phone);
        $('#modify_ad_id').val(user_info.ad_id);
        $('#modify_ad_email').val(user_info.ad_mailbox);
        $('#modify_ad_username').val(user_info.ad_name);
    }

}

function updateSession(data) {
    if(user_info.b == '1'){
        user_info.nickname = data.nickname;
        user_info.sex = data.gender;
        user_info.user_phone = data.phoneNumber;
        user_info.province = data.company;
        user_info.address = data.address;
        sessionStorage.setItem("user_info", JSON.stringify(user_info));
    }else {
        user_info.ad_id = data.ad_id;
        user_info.ad_mailbox = data.ad_mailbox;
        user_info.ad_name = data.ad_name;
        user_info.ad_phone = data.ad_phone;
        user_info.org_avatar = data.org_avatar;
        user_info.org_mailbox = data.org_mailbox;
        user_info.org_name = data.org_name;
        user_info.org_password = data.org_password;
        user_info.org_phone = data.org_phone;
        sessionStorage.setItem("user_info", JSON.stringify(user_info));
    }
    initUserInfo();
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

function onChangePWD(){
    var origin_pwd = $.trim($('#origin_pwd').val());
    var new_pwd = $.trim($('#new_pwd').val());
    var verify_pwd = $.trim($('#verify_pwd').val());
    if(origin_pwd.length >= 6 && origin_pwd.length <= 16){
        $('#origin_pwd').css({'border-color': 'rgba(203,54,56,0)'});
        if(new_pwd.length >= 6 && new_pwd.length <= 16){
            $('#new_pwd').css({'border-color': 'rgba(203,54,56,0)'});
            if(verify_pwd === new_pwd){
                $('#verify_pwd').css({'border-color': 'rgba(203,54,56,0)'});
                //修改密码ajax_changePWD_POST
                //发出(data)：用户名username, 原密码origin_pwd, 新密码new_pwd
                //接收(json)：ifsuccess:0(失败),1(成功)
                var data= {name:user_info.nickname,old_password:origin_pwd,password:verify_pwd};
                console.log(data);
                console.log("ChangePWDAjax");
                $.ajax({
                    url: "service/update_pass.php?data= "+JSON.stringify(data), //后台请求数据
                    dataType: "json",
                    data:JSON.stringify(data),
                    type: "post",
                    success: function (msg) {
                        console.log("ChangePWDAjax:Success!");
                        console.log(msg);
                        if(msg.a == '1'){
                            showTip("密码修改成功！");
                        }else {
                            showTip("原密码错误，密码修改失败！");
                        }
                    },
                    error: function (msg) {
                        console.log("ChangePWDAjax:Error!");
                        console.log(msg);
                        alert("请求失败，请重试");
                        if(msg.ifsuccess == '1'){
                            showTip("密码修改成功！");
                        }else {
                            showTip("密码修改失败！");
                        }
                    }
                });
            }else {
                $('#verify_pwd').css({'border-color': '#cb3638'});
                $('#verify_pwd').shake(2, 10, 400);
            }
        }else {
            $('#new_pwd').css({'border-color': '#cb3638'});
            $('#new_pwd').shake(2, 10, 400);
        }
    }else {
        $('#origin_pwd').css({'border-color': '#cb3638'});
        $('#origin_pwd').shake(2, 10, 400);
    }
}

function onPostTopic(){
    var article_pic;
    var article_title = $.trim($('#article_title').val());
    var article_words = $.trim($('#article_words').val());
    // if (article_pic != null){
        if(article_title != '' && article_title != null){
            $('#article_title').css({'border-color': 'rgba(203,54,56,0)'});
            if(selectedTag != '' && selectedTag != null && selectedTag != undefined){
                $('.article_tag_content').css({'border-color': 'rgba(203,54,56,0)'});
                if(article_words != '' && article_words != null){
                    $('#article_words').css({'border-color': 'rgba(203,54,56,0)'});
                    //PostTopic
                    var data= {topic_name:article_title,topic_class:selectedTag,user_name:user_info.nickname,topic_content:article_words,topic_image:article_pic};
                    console.log("OrganizerAjax: ");
                    console.log(data);
                    $.ajax({
                        url: "service/send_topic.php?data= "+JSON.stringify(data), //后台请求数据
                        dataType: "json",
                        data: JSON.stringify(data),
                        type: "GET",
                        success: function (msg) {
                            console.log("OrganizerAjax:success!");
                            console.log(msg);
                            if(msg.a == '1'){
                                showTip('发布话题成功!');
                            }else {
                                showTip('发布话题失败!');
                            }
                        },
                        error: function (msg) {
                            console.log("OrganizerAjax:error!");
                            console.log(msg);
                            alert("请求失败，请重试");
                        }
                    });
                }else {
                    $('#article_words').css({'border-color': '#cb3638'});
                }
            }else {
                $('.article_tag_content').css({'border-color': '#cb3638'});
            }
        }else {
            $('#article_title').css({'border-color': '#cb3638'});
        }
    // }
}

function renderingTopicHead(jqNode) {
    jqNode.html('');
    jqNode.append('<div class="participation_topic_filter_content">\n' +
        '                    <ul>\n' +
        '                        <li>全部</li>\n' +
        '                        <li>最近一周</li>\n' +
        '                        <li>最近一月</li>\n' +
        '                        <li>最近一年</li>\n' +
        '                    </ul>\n' +
        '                    <div class="participation_topic_search">\n' +
        '                        <input class="input_square article_topic_search_input" type="text" placeholder="话题主题"/>\n' +
        '                        <button class="secondary_button_default_square participation_search_title">搜索</button>\n' +
        '                    </div>\n' +
        '                </div>');
}

function renderingTopic(jqNode, msg) {
    for(var i in msg){
        jqNode.append('<div class="participation_topic_body">\n' +
            '                    <img class="participation_topic_pic" src="'+'images/community_images/'+msg[i].topic_image+'" onclick=""/>\n' +
            '                    <div class="participation_topic_item">\n' +
            '                        <div class="participation_topic_item_top">\n' +
            '                            <h3 class="participation_topic_item_topic">'+msg[i].topic_name+'</h3>\n' +
            '                            <span class="participation_topic_publisher">发布人：'+msg[i].user_name+'</span>\n' +
            '                        </div>\n' +
            '                        <span class="participation_topic_item_short">'+msg[i].topic_content+'</span>\n' +
            '                        <div class="participation_topic_item_bottom">\n' +
            '                            <span class="participation_topic_tag">'+msg[i].topic_class+'</span>\n' +
            '                            <span class="participation_topic_comment">'+msg[i].like+'&nbsp;评论</span>\n' +
            '                            <span class="participation_topic_date">'+msg[i].release_date.substring(0,10)+'</span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    }

}

function renderingActivity(jqNode, msg) {
    for(var i in msg){
        jqNode.append('<div class="participation_topic_body">\n' +
            '                    <img class="participation_topic_pic" src="'+'images/activity_images/'+msg[i].picture+'" onclick=""/>\n' +
            '                    <div class="participation_topic_item">\n' +
            '                        <div class="participation_topic_item_top">\n' +
            '                            <h3 class="participation_topic_item_topic">'+msg[i].act_name+'</h3>\n' +
            '                            <span class="participation_topic_publisher">主办方：'+msg[i].Founder+'</span>\n' +
            '                        </div>\n' +
            '                        <span class="participation_topic_item_short">'+msg[i].content+'</span>\n' +
            '                        <div class="participation_topic_item_bottom">\n' +
            '                            <span class="participation_topic_tag">'+msg[i].act_category+'</span>\n' +
            '                            <span class="participation_topic_comment">'+msg[i].Rec_ing+'&nbsp;人参与</span>\n' +
            '                            <span class="participation_topic_date">'+msg[i].Initiation_time.substring(0,10)+'</span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    }

}

function onLogout() {
    localStorage.removeItem("user_info");
    location.href = 'home.html';
}

function onSelectType_1(){
    selectedTag = '生态保护';
    $('.type_1').addClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_2(){
    selectedTag = '文化/艺术';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').addClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_3(){
    selectedTag = '动物保护';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').addClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_4(){
    selectedTag = '儿童关怀';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').addClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_5(){
    selectedTag = '支教助学';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').addClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_6(){
    selectedTag = '扶老助残';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').addClass("article_tag_selected");
    $('.type_7').removeClass("article_tag_selected");
}

function onSelectType_7(){
    selectedTag = '其它';
    $('.type_1').removeClass("article_tag_selected");
    $('.type_2').removeClass("article_tag_selected");
    $('.type_3').removeClass("article_tag_selected");
    $('.type_4').removeClass("article_tag_selected");
    $('.type_5').removeClass("article_tag_selected");
    $('.type_6').removeClass("article_tag_selected");
    $('.type_7').addClass("article_tag_selected");
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
    selectedTag = '';
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

    $('#pa_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#pa_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});

    //参与的话题
    var data;
    if(user_info.b == '1'){
        data= {name:user_info.nickname};
    }else {
        data= {name:user_info.org_name};
    }
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/partake_post.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_participation_topic_body').html('');
            renderingTopic($('.mine_participation_topic_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
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

    $('#se_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#se_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});

    //发布的话题
    var data;
    if(user_info.b == '1'){
        data= {name:user_info.nickname};
    }else {
        data= {name:user_info.org_name};
    }
    console.log(data);
    console.log("already_postAjax");
    $.ajax({
        url: "service/already_post.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("already_postAjax:Success!");
            console.log(msg);
            $('.mine_sent_topic_body').html('');
            renderingTopic($('.mine_sent_topic_body'), msg);
        },
        error: function (msg) {
            console.log("already_postAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
});

$("#nav_post_activity").click(function (e) {
    selectedTag = '';
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

    $('#at_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#at_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});

    //发布的活动
    var data= {name:user_info.org_name};
    console.log(data);
    console.log("already_postAjax");
    $.ajax({
        url: "service/already_activity.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("already_postAjax:Success!");
            console.log(msg);
            $('.mine_sent_activity_body').html('');
            renderingActivity($('.mine_sent_activity_body'), msg);
        },
        error: function (msg) {
            console.log("already_postAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
});

function onModifyInfoManager(){
    var modify_org_username = $.trim($('#modify_org_username').val());
    var modify_org_phone = $.trim($('#modify_org_phone').val());
    var modify_org_province = $.trim($('#modify_org_province').val());
    var modify_org_city = $.trim($('#modify_org_city').val());
    var modify_org_introduce = $.trim($('#modify_org_introduce').val());
    var modify_org_email = $.trim($('#modify_org_email').val());
    var modify_ad_phone = $.trim($('#modify_ad_phone').val());
    var modify_ad_id = $.trim($('#modify_ad_id').val());
    var modify_ad_email = $.trim($('#modify_ad_email').val());
    var modify_ad_username = $.trim($('#modify_ad_username').val());
    if(modify_org_phone != '' && modify_org_phone != null){
        $('#modify_org_phone').css({'border-color': 'rgba(203,54,56,0)'});
        if(modify_org_email != '' && modify_org_email != null){
            $('#modify_org_email').css({'border-color': 'rgba(203,54,56,0)'});
            if(modify_ad_phone != '' && modify_ad_phone != null){
                $('#modify_ad_phone').css({'border-color': 'rgba(203,54,56,0)'});
                if(modify_ad_id != '' && modify_ad_id != null){
                    $('#modify_ad_id').css({'border-color': 'rgba(203,54,56,0)'});
                    if(modify_ad_email != '' && modify_ad_email != null){
                        $('#modify_ad_email').css({'border-color': 'rgba(203,54,56,0)'});
                        if(modify_ad_username != '' && modify_ad_username != null){
                            $('#modify_ad_username').css({'border-color': 'rgba(203,54,56,0)'});
                            //修改信息ajax
                            var data= {org_name:modify_org_username,org_mailbox:modify_org_email,org_phone:modify_org_phone,ad_mailbox:modify_ad_email,ad_name:modify_ad_username,ad_phone:modify_ad_phone,ad_id:modify_ad_id};
                            console.log(data);
                            console.log("ModifyVolunteerInfoAjax");
                            $.ajax({
                                url: "/IBDS/update_organizer.php?data="+JSON.stringify(data), //后台请求数据
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
                            $('#modify_ad_username').css({'border-color': '#cb3638'});
                            $('#modify_ad_username').shake(2, 10, 400);
                        }
                    }else {
                        $('#modify_ad_email').css({'border-color': '#cb3638'});
                        $('#modify_ad_email').shake(2, 10, 400);
                    }
                }else {
                    $('#modify_ad_id').css({'border-color': '#cb3638'});
                    $('#modify_ad_id').shake(2, 10, 400);
                }
            }else {
                $('#modify_ad_phone').css({'border-color': '#cb3638'});
                $('#modify_ad_phone').shake(2, 10, 400);
            }
        }else {
            $('#modify_org_email').css({'border-color': '#cb3638'});
            $('#modify_org_email').shake(2, 10, 400);
        }
    }else {
        $('#modify_org_phone').css({'border-color': '#cb3638'});
        $('#modify_org_phone').shake(2, 10, 400);
    }
}

function onPostTopicManager(){
    var article_pic;
    var article_title = $.trim($('#article_title').val());
    var article_words = $.trim($('#article_words').val());
    // if (article_pic != null){
    if(article_title != '' && article_title != null){
        $('#article_title').css({'border-color': 'rgba(203,54,56,0)'});
        if(selectedTag != '' && selectedTag != null && selectedTag != undefined){
            $('.article_tag_content').css({'border-color': 'rgba(203,54,56,0)'});
            if(article_words != '' && article_words != null){
                $('#article_words').css({'border-color': 'rgba(203,54,56,0)'});
                //PostTopic
                var data= {topic_name:article_title,topic_class:selectedTag,user_name:user_info.org_name,topic_content:article_words,topic_image:article_pic};
                console.log("OrganizerAjax: ");
                console.log(data);
                $.ajax({
                    url: "service/send_topic.php?data= "+JSON.stringify(data), //后台请求数据
                    dataType: "json",
                    data: JSON.stringify(data),
                    type: "GET",
                    success: function (msg) {
                        console.log("OrganizerAjax:success!");
                        console.log(msg);
                        if(msg.a == '1'){
                            showTip('发布话题成功!');
                        }else {
                            showTip('发布话题失败!');
                        }
                    },
                    error: function (msg) {
                        console.log("OrganizerAjax:error!");
                        console.log(msg);
                        alert("请求失败，请重试");
                    }
                });
            }else {
                $('#article_words').css({'border-color': '#cb3638'});
            }
        }else {
            $('.article_tag_content').css({'border-color': '#cb3638'});
        }
    }else {
        $('#article_title').css({'border-color': '#cb3638'});
    }
    // }
}

function onPostActivityManager(){
    var act_pic;
    var act_name = $.trim($('#act_name').val());
    var act_region = $.trim($('#act_region').val());
    var regional_sponsors = $.trim($('#regional_sponsors').val());
    var initiation_time = $.trim($('#initiation_time').val());
    var deadline_year = $.trim($('#deadline_year').val());
    var deadline_month = $.trim($('#deadline_month').val());
    var deadline_day = $.trim($('#deadline_day').val());
    var recruitment = $.trim($('#recruitment').val());
    // if (article_pic != null){
    if(act_name != '' && act_name != null){
        $('#act_name').css({'border-color': 'rgba(203,54,56,0)'});
        if(selectedTag != '' && selectedTag != null && selectedTag != undefined){
            $('.article_tag_content').css({'border-color': 'rgba(203,54,56,0)'});
            if(act_region != '' && act_region != null){
                $('#act_region').css({'color': '#000'});
                if(regional_sponsors != '' && regional_sponsors != null){
                    $('#regional_sponsors').css({'color': '#000'});
                    if(initiation_time != '' && initiation_time != null){
                        $('#initiation_time').css({'color': '#000'});
                        if((deadline_year != '' && deadline_year != null) && (deadline_month != '' && deadline_month != null) && (deadline_day != '' && deadline_day != null)){
                            $('#deadline_year').css({'color': '#000'});
                            $('#deadline_month').css({'color': '#000'});
                            $('#deadline_day').css({'color': '#000'});
                            if(recruitment != '' && recruitment != null){
                                $('#recruitment').css({'border-color': 'rgba(203,54,56,0)'});
                                //PostTopic
                                var data= {act_name:act_name,act_region:act_region,regional_sponsors:regional_sponsors,initiation_time:initiation_time,deadline:deadline_year+'-'+deadline_month+'-'+deadline_day,recruitment:recruitment};
                                console.log("OrganizerAjax: ");
                                console.log(data);
                                $.ajax({
                                    url: "service/send_activity.php?data= "+JSON.stringify(data), //后台请求数据
                                    dataType: "json",
                                    data: JSON.stringify(data),
                                    type: "GET",
                                    success: function (msg) {
                                        console.log("OrganizerAjax:success!");
                                        console.log(msg);
                                        if(msg.a == '1'){
                                            showTip('发布话题成功!');
                                        }else {
                                            showTip('发布话题失败!');
                                        }
                                    },
                                    error: function (msg) {
                                        console.log("OrganizerAjax:error!");
                                        console.log(msg);
                                        alert("请求失败，请重试");
                                    }
                                });
                            }else {
                                $('#recruitment').css({'border-color': '#cb3638'});
                            }
                        }else {
                            $('#deadline_year').css({'color': '#cb3638'});
                            $('#deadline_month').css({'color': '#cb3638'});
                            $('#deadline_day').css({'color': '#cb3638'});
                        }
                    }else {
                        $('#initiation_time').css({'color': '#cb3638'});
                    }
                }else {
                    $('#regional_sponsors').css({'color': '#cb3638'});
                }
            }else {
                $('#act_region').css({'color': '#cb3638'});
            }
        }else {
            $('.article_tag_content').css({'border-color': '#cb3638'});
        }
    }else {
        $('#act_name').css({'border-color': '#cb3638'});
    }
    // }
}

$('#pa_all').click(function (e) {
    $('#pa_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#pa_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onPaFilter('全部');
});

$('#pa_week').click(function (e) {
    $('#pa_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_week').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#pa_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onPaFilter('周');
});

$('#pa_month').click(function (e) {
    $('#pa_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_month').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#pa_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onPaFilter('月');
});

$('#pa_year').click(function (e) {
    $('#pa_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#pa_year').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    onPaFilter('年');
});

$('#se_all').click(function (e) {
    $('#se_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#se_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onSeFilter('全部');
});

$('#se_week').click(function (e) {
    $('#se_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_week').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#se_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onSeFilter('周');
});

$('#se_month').click(function (e) {
    $('#se_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_month').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#se_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onSeFilter('月');
});

$('#se_year').click(function (e) {
    $('#se_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#se_year').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    onSeFilter('年');
});

$('#at_all').click(function (e) {
    $('#at_all').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#at_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onAtFilter('全部');
});

$('#at_week').click(function (e) {
    $('#at_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_week').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#at_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onAtFilter('周');
});

$('#at_month').click(function (e) {
    $('#at_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_month').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    $('#at_year').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    onAtFilter('月');
});

$('#at_year').click(function (e) {
    $('#at_all').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_week').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_month').css({'background':'#fff', 'border':'#e9e9e9 solid 1px'});
    $('#at_year').css({'background':'#ffede8', 'border':'#ffe3d9 solid 1px'});
    onAtFilter('年');
});

function onPaFilter(type) {
    //参与的话题
    var data;
    if(user_info.b == '1'){
        data={class:type,name:user_info.nickname};
    }else {
        data={class:type,name:user_info.org_name};
    }
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/partake_post_time.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_participation_topic_body').html('');
            renderingTopic($('.mine_participation_topic_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
}

function onSeFilter(type) {
    //参与的话题
    var data;
    if(user_info.b == '1'){
        data={class:type,name:user_info.nickname};
    }else {
        data={class:type,name:user_info.org_name};
    }
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/already_potic_time.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_sent_topic_body').html('');
            renderingTopic($('.mine_sent_topic_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
}

function onAtFilter(type) {
    //发布的活动
    var data= {class:type,name:user_info.org_name};
    console.log(data);
    console.log("already_postAjax");
    $.ajax({
        url: "service/already_activity_time.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("already_postAjax:Success!");
            console.log(msg);
            $('.mine_sent_activity_body').html('');
            renderingActivity($('.mine_sent_activity_body'), msg);
        },
        error: function (msg) {
            console.log("already_postAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
}

$('#pa_search').click(function (e) {
    var pa_keywords = $.trim($('#pa_keywords').val());
    var data;
    if(user_info.b == '1'){
        data={word:pa_keywords,name:user_info.nickname};
    }else {
        data={word:pa_keywords,name:user_info.org_name};
    }
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/partake_post_word.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_participation_topic_body').html('');
            renderingTopic($('.mine_participation_topic_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
});

$('#se_search').click(function (e) {
    var pa_keywords = $.trim($('#se_keywords').val());
    var data;
    if(user_info.b == '1'){
        data={word:pa_keywords,name:user_info.nickname};
    }else {
        data={word:pa_keywords,name:user_info.org_name};
    }
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/already_potic_word.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_sent_topic_body').html('');
            renderingTopic($('.mine_sent_topic_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
});

$('#at_search').click(function (e) {
    var pa_keywords = $.trim($('#at_keywords').val());
    var data = {word:pa_keywords,name:user_info.org_name};
    console.log(data);
    console.log("ParticipationTopicAjax");
    $.ajax({
        url: "service/already_activity_word.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data:JSON.stringify(data),
        type: "post",
        success: function (msg) {
            console.log("ParticipationTopicAjax:Success!");
            console.log(msg);
            $('.mine_sent_activity_body').html('');
            renderingActivity($('.mine_sent_activity_body'), msg);
        },
        error: function (msg) {
            console.log("ParticipationTopicAjax:Error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
});