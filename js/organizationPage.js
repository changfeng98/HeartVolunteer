
function init() {
    initUser();
    $(".organization_page").css({background: '#ff664b'});

    //组织团体ajax
    //发出:
    //接收: members_all(志愿人数), activities_all(发起活动数)
    console.log("OrganizerAjax: ");
    $.ajax({
        url: "service/organizer.php", //后台请求数据
        type: "GET",
        success: function (msg) {
            console.log("OrganizerAjax:success!");
            console.log(msg);
            initOrganization(msg);
        },
        error: function (msg) {
            console.log("OrganizerAjax:error!");
            console.log(msg);
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
                '                <img class="organization_item_pic" src="'+'picture/organization_logos/'+msg[i].org_avatar+'"/>\n' +
                '                <div class="organization_item">\n' +
                '                    <h3 class="organization_item_title">'+msg[i].name+'</h3>\n' +
                '                    <p class="organization_item_place">'+msg[i].ad_name+'</p>\n' +
                '                </div>\n' +
                '                <div class="organization_item">\n' +
                '                    <p class="organization_item_activities">'+msg[i].count+'个活动</p>\n' +
                '                    <p class="organization_item_duration">已志愿'+msg[i].time+'天</p>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>');
        }else {
            $(".organization_list_row_"+row).append('<div class="organization_item_content">\n' +
                '                <img class="organization_item_pic" src="'+'picture/organization_logos/'+msg[i].org_avatar+'"/>\n' +
                '                <div class="organization_item">\n' +
                '                    <h3 class="organization_item_title">'+msg[i].name+'</h3>\n' +
                '                    <p class="organization_item_place">'+msg[i].ad_name+'</p>\n' +
                '                </div>\n' +
                '                <div class="organization_item">\n' +
                '                    <p class="organization_item_activities">'+msg[i].count+'个活动</p>\n' +
                '                    <p class="organization_item_duration">已志愿'+msg[i].time+'天</p>\n' +
                '                </div>\n' +
                '            </div>');
        }
    }
}