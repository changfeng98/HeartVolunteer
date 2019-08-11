function init() {
    initUser();
    $(".group_page").css({background: '#ff664b'});

    //社区ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {class:"全部"};
    console.log("CommunityAjax: ");
    console.log(data);
    $.ajax({
        url: "service/community_one.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
        data: JSON.stringify(data),
        type: "GET",
        success: function (msg) {
            console.log("CommunityAjax:success!");
            console.log(msg);
            //initCommunity(msg);
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
        console.log(i%4);
        if(i <= 1){
            $(".community_left").append('<div class="topic_content">\n' +
                '                        <img class="topic_img" src="images/pic_home.jpeg" onclick="">\n' +
                '                        <div class="topic_content_right">\n' +
                '                            <span class="topic_title">话题标题：网络行动能改变世界吗？</span>\n' +
                '                            <p class="topic_content_content">\n' +
                '                                编者按：互联网时代，“行动”的门槛变得前所未有的低。点个赞，签个名，转发一项倡议，参与一项讨论，只要在网络上对某个公共话题付出些微的努力，都可以说是“行动”的一种。正因为它包罗万象，这一现象也出现了众...\n' +
                '                            </p>\n' +
                '                            <div class="topic_from_time">\n' +
                '                                <span class="topic_from">来自：长风</span>\n' +
                '                                <span class="topic_from">发表时间：2018-02-12</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>');
        }else {
            break;
        }
    }
}