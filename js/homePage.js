var catDialog = $("#cat_dialog");
var catWord = $("#cat_word");
function init() {
    initUser();
    $(".index_page").css({background: '#ff664b'});
    catWord_1_sleep();
}

function catWord_1_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_1, 3000);
}

function catWord_1() {
    $("#cat_word").html("已有<br>502288<br>个小伙伴!");
    fadeAndZommIn(catDialog, catWord);
    setTimeout(catWord_2_sleep, 5000);
}

function catWord_2_sleep() {
    fadeAndZommOut(catDialog, catWord);
    setTimeout(catWord_2, 3000);
}

function catWord_2() {
    $("#cat_word").html("我们共发起了<br>532<br>个活动!");
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