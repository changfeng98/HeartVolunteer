function init() {
    initUser();
    $(".group_page").css({background: '#ff664b'});

    $('#type_all').css({color:'#ee4639'});
    requestGroup('全部');
}

function requestGroup(type) {
    //社区ajax
    var data= {class:type};
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
            $('.community_left').html('');
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
}

//渲染社区列表
function initCommunity(msg) {
    for(var i in msg){
        $('.community_left').append('<div class="topic_content">\n' +
            '                        <img class="topic_img" src="'+msg[i].topic_image+'" onclick="">\n' +
            '                        <div class="topic_content_right">\n' +
            '                            <span class="topic_title">'+msg[i].topic_name+'</span>\n' +
            '                            <p class="topic_content_content">\n' +
            '                                '+msg[i].topic_content+'' +
            '                            </p>\n' +
            '                            <div class="topic_from_time">\n' +
            '                                <span class="topic_from">'+msg[i].user_name+'</span>\n' +
            '                                <span class="topic_from">发表时间：'+msg[i].release_date.substring(0, 10)+'</span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>')
    }
}

//渲染精选
function initFeatured(msg){
    $('.topic_select').append('<div class="topic_selected">\n' +
        '                        <img style="height: 80px;width: 80px" src="'+msg.topic_image+'">\n' +
        '                        <div class="topic_selected_right">\n' +
        '                            <span class="topic_selected_title">'+msg.topic_name+'</span>\n' +
        '                            <span class="post_time">发表时间：'+msg[i].release_date.substring(0, 10)+'</span>\n' +
        '                        </div>\n' +
        '                    </div>');
}

$('#type_all').click(function (e) {
    $('#type_all').css({color:'#ee4639'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('全部');
});

$('#type_1').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#ee4639'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('生态保护');
});

$('#type_2').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#ee4639'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('文化/艺术');
});

$('#type_3').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#ee4639'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('动物保护');
});

$('#type_4').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#ee4639'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('儿童关怀');
});

$('#type_5').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#ee4639'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#000'});
    requestGroup('支援助学');
});

$('#type_6').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#0'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#ee4639'});
    $('#type_7').css({color:'#000'});
    requestGroup('扶老助残');
});

$('#type_7').click(function (e) {
    $('#type_all').css({color:'#000'});
    $('#type_1').css({color:'#000'});
    $('#type_2').css({color:'#000'});
    $('#type_3').css({color:'#000'});
    $('#type_4').css({color:'#000'});
    $('#type_5').css({color:'#000'});
    $('#type_6').css({color:'#000'});
    $('#type_7').css({color:'#ee4639'});
    requestGroup('其他');
});