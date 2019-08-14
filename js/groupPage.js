var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

function init() {
    var type = $_GET['type'];
    initUser();
    $(".group_page").css({background: '#ff664b'});
    console.log(type)
    if(type === '%E7%94%9F%E6%80%81%E4%BF%9D%E6%8A%A4'){
        $('#type_1').css({color:'#ee4639'});
    }else if(type === '%E6%96%87%E5%8C%96/%E8%89%BA%E6%9C%AF'){
        $('#type_2').css({color:'#ee4639'});
    }else if(type === '%E5%8A%A8%E7%89%A9%E4%BF%9D%E6%8A%A4'){
        $('#type_3').css({color:'#ee4639'});
    }else if(type === '%E5%84%BF%E7%AB%A5%E5%85%B3%E6%80%80'){
        $('#type_4').css({color:'#ee4639'});
    }else if(type === '%E6%94%AF%E6%95%99%E5%8A%A9%E5%AD%A6'){
        $('#type_5').css({color:'#ee4639'});
    }else if(type === '%E6%89%B6%E8%80%81%E5%8A%A9%E6%AE%8B'){
        $('#type_6').css({color:'#ee4639'});
    }else if(type === '%E5%85%B6%E5%AE%83'){
        $('#type_7').css({color:'#ee4639'});
    }else {
        $('#type_all').css({color:'#ee4639'});
    }

    if(type != '' && type != null && type != undefined){
        requestGroup(type);
    }else {
        requestGroup('全部');
    }
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

function requestGroupSearch(keyWords) {
    //社区ajax
    var data= {name:keyWords};
    console.log("CommunitySearchAjax: ");
    console.log(data);
    $.ajax({
        url: "service/topic_search.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("CommunitySearchAjax:success!");
            console.log(msg);
            $('.community_left').html('');
            initCommunity(msg);
        },
        error: function (msg) {
            console.log("CommunitySearchAjax:error!");
            console.log(msg);
            alert("请求失败，请重试");
        }
    });
}

//渲染社区列表
function initCommunity(msg) {
    for(var i in msg){
        $('.community_left').append('<div class="topic_content">\n' +
            '                        <img class="topic_img" src="'+'images/community_images/'+msg[i].topic_image+'" onclick="">\n' +
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
            '                    </div>');
        if(i < 4){
            initFeatured(msg[i]);
        }
    }
}

//渲染精选
function initFeatured(msg){
    $('.topic_select').append('<div class="topic_selected">\n' +
        '                        <img style="height: 80px;width: 80px" src="'+'images/community_images/'+msg.topic_image+'">\n' +
        '                        <div class="topic_selected_right">\n' +
        '                            <span class="topic_selected_title">'+msg.topic_name+'</span>\n' +
        '                            <span class="post_time">发表时间：'+msg.release_date.substring(0, 10)+'</span>\n' +
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

$('.search_btn').click(function (e) {
    requestGroupSearch($.trim($('.search_box').val()));
});