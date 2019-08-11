
function init() {
    initUser();
    $(".organization_page").css({background: '#ff664b'});

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

//渲染组织列表
function initOrganization(msg) {
    var row = 1;
    for(var i in msg){
        if(i % 2 == 0){
            row++;
            $(".organization_item_content_body").append('<div class="organization_line organization_list_row_'+row+'">\n' +
                '            <div class="organization_item_content">\n' +
                '                <img class="organization_item_pic" src="'+msg[i].org_avatar+'"/>\n' +
                '                <div class="organization_item">\n' +
                '                    <h3 class="organization_item_title">'+msg[i].org_name+'</h3>\n' +
                '                    <p class="organization_item_place">'+msg[i].ad_name+'</p>\n' +
                '                </div>\n' +
                '                <div class="organization_item">\n' +
                '                    <p class="organization_item_activities">53个活动</p>\n' +
                '                    <p class="organization_item_duration">已志愿4027天</p>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>');
        }else {
            $(".organization_list_row_"+row).append('<div class="organization_item_content">\n' +
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
        }
    }
}