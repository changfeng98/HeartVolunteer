$(document).ready(function () {
    var topH=$(".header_top_content").height();//获取头部高度，top指导航栏上面的部分
    var navbg=$(".header_main");//获取导航栏对象
    var headerTop = $(".header_top_content");
    var headerFixed = $(".header_fixed");
    $(window).scroll(function () {
        if($(window).scrollTop()>topH){//对比滚动的距离与导航栏上面部分的高度大小来动态添加css样式
            navbg.addClass("scrollNav")//对导航栏添加样式
            headerTop.addClass("hide_header_top")
            headerFixed.removeClass("hide_header_fixed");
        }else{
            navbg.removeClass("scrollNav")//去掉导航栏添加的样式
            headerTop.removeClass("hide_header_top")
            headerFixed.addClass("hide_header_fixed");
        }
    });
});

$(function() {
    var duplicate = $(".home_content").clone();
    var contentBlurred = $("<div></div>");
    $(contentBlurred).append(duplicate);
    $(contentBlurred).addClass('content-blurred');
    $("#header").append(contentBlurred);
    var translation;
    $(window).bind("scroll", function(){
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        translation = 'translate3d(0,' + (-top + 'px') + ',0)';
        $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation});
    });
})

function init() {
    $(".index_page").css({background: '#ff664b'});
}