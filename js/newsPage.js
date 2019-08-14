function init() {
    initUser();
    $(".news_page").css({background: '#ff664b'});
    $('.video_btn').css({color:'#ff664b'});

    requestVideos();
    requestNews();
}

function requestVideos() {
    //资讯ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {advisory:"视频"};
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
            initVideos(msg);
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
}

function requestNews() {
    //资讯ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    var data= {advisory:"新闻"};
    console.log("NewsAjax: ");
    console.log(data);
    $.ajax({
        url: "service/advisory.php?data= "+JSON.stringify(data), //后台请求数据
        dataType: "json",
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
}

//渲染视频列表
function initVideos(msg) {
    var row = 1;
    for(var i in msg){
        console.log(i%4);
        if(i % 3 == 0){
            row++;
            $("#video_list").append('<tr class="video_list_row_'+row+'">\n' +
                '                        <td>\n' +
                '                            <div class="video_description">\n' +
                '                                <video width="353px" height="200px" controls>\n' +
                '                                    <source src="video/video_animal.mp4" type="video/mp4">\n' +
                '                                    <source src="video/video_animal.mp4" type="video/ogg">\n' +
                '                                    您的浏览器不支持 video 标签。\n' +
                '                                </video>\n' +
                '                                <span class="video_title">'+msg[i].video_name+'</span>\n' +
                '                                <div class="video_from_time">\n' +
                '                                    <span class="video_from_time_content">来源：小世界的动物</span>\n' +
                '                                    <span class="video_from_time_content">上传时间：2018-09-03</span>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </td>\n' +
                '                    </tr>');
        }else {
            $(".video_list_row_"+row).append('<td>\n' +
                '                            <div class="video_description">\n' +
                '                                <video width="353px" height="200px" controls>\n' +
                '                                    <source src="video/video_animal.mp4" type="video/mp4">\n' +
                '                                    <source src="video/video_animal.mp4" type="video/ogg">\n' +
                '                                    您的浏览器不支持 video 标签。\n' +
                '                                </video>\n' +
                '                                <span class="video_title">'+msg[i].video_name+'</span>\n' +
                '                                <div class="video_from_time">\n' +
                '                                    <span class="video_from_time_content">来源：小世界的动物</span>\n' +
                '                                    <span class="video_from_time_content">上传时间：2018-09-03</span>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </td>');
        }
    }
}

//渲染新闻列表
function initNews(msg) {
    for(var i in msg){
        $("#news_contents").append('<div class="news">\n' +
            '                    <img class="news_photo" src="'+'images/news_images/'+msg[i].image+'">\n' +
            '                    <div class="news_content">\n' +
            '                        <span class="news_content_title">'+msg[i].news_name+'</span>\n' +
            '                        <p class="news_content_body">\n' +
            '                            '+msg[i].content+'\n' +
            '                        </p>\n' +
            '                        <div class="news_content_form">\n' +
            '                            <span class="news_content_from_content">'+msg[i].source+'</span>\n' +
            '<!--                            <span class="news_content_from">2019-07-29</span>-->\n' +
            '                            <span class="news_content_num">'+msg[i].time.substring(0, 19)+'</span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    }
}