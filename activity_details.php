<?php
include("./service/dbconfig.php");
    $act_id=$_GET['act_id'];
    $sql="SELECT * FROM activity where act_id = $act_id";
    //接收返回值
    $mysqli_result=$link->query($sql);
    if($mysqli_result == false){
        echo "SQL错误";
        exit;

    }
    //因为只有一条数据，用变量储存信息,$mysqli_result->fetch_array(MYSQL_ASSOC)重复调用自动显示下一条数据，直至没有返回null,且该函数调用不可逆，只能用一次
    $rows;
    while($row=$mysqli_result->fetch_array(MYSQLI_ASSOC)){
        $rows=$row;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>心志愿-活动详情</title>
    <link rel="stylesheet" href="styles/main_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/common_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/activity_details_styles.css" type="text/css"/>
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/affects.js"></script>
    <script type="text/javascript">
        window.onload = (function () {
            init();
        });
    </script>
</head>
<body>
    <script type="text/javascript" src="js/header.js"></script>
    <div class="activity_details_content">
        <div class="activity_details_content_left">
            <div class="activity_details_content_left_top">
                <img class="activity_details_pic" src="./images/activity_images/<?php echo $rows['picture']?>">
                <div class="activity_details_content_left_top_right">
                    <span class="activity_details_title_content"><?php echo $rows['act_name']; ?></span>
                    <div class="activity_details_time_adress_tag">
                        <span class="activity_details_time_adress_tag_content">时间：<?php echo $rows['Initiation_time']; ?>--<?php echo $rows['Ending_time']; ?></span>
                        <span class="activity_details_time_adress_tag_content">地点：<?php echo $rows['act_region']; ?></span>
                        <span class="activity_details_time_adress_tag_content">分类：<?php echo $rows['act_category']; ?></span>
                    </div>
                    <span class="organized">发起组织：<?php echo $rows['Founder']; ?></span>
                </div>
            </div>
            <ul class="activity_details_content_left_menu_content">
               <li onclick="open_activity_details_content_left_activity_detail()">活动详情</li>
               <li onclick="open_activity_details_content_left_activity_comments()">活动评论</li>
            </ul>
            <div class="activity_details_content_left_activity">
                <div id="activity_details_content_left_activity_detail" class="activity_details_content_left_activity_detail">
                    <span class="activity_details_summary">活动摘要：</span>
                    <p class="activity_summary_content">
                        新时代文明实践”垃圾分类青年志愿服务主题活动定于7月20日（本周六）下午16:00在北京路312号青年文化宫广州青年之家总部门店举行，活动设置垃圾分类宣讲、游戏互动、拍照打卡、宣传单派发等环节。
                    </p>
                    <span class="activity_details_summary">活动详情：</span>
                    <p class="activity_details">
                        【活动简介】
                    </p>
                    <p class="activity_details_introduction_content">
                        为贯彻落实习近平总书记对于垃圾分类工作的指示精神，开展广泛的教育引导工作，让广大人民群众认识到实行垃圾分类的重要性和必要性，通过有效的督促引导，让更多人行动起来，培养垃圾分类的好习惯。
                    </p>
                    <p class="activity_details">
                        【活动内容】
                    </p>
                    <p class="activity_details_introduction_content">
                        活动设置垃圾分类宣讲、游戏互动、拍照打卡、宣传单派发等环节，邀请市民互动参与。
                    </p>
                    <p class="rear"></p>
                </div>
                <div id="activity_details_content_left_activity_comments" class="activity_details_content_left_activity_comments" style="display: none">
                    <textarea class="activity_comments"></textarea>
                    <button class="comments_btn">评论</button>
                    <span class="all_comments">所有评论</span>
                    <div class="all_comments_content">
                        <div class="comment">
                            <img class="head_portrait" src="images/pic_home.jpeg">
                            <div class="comment_right">
                                <div class="comment_right_top">
                                    <span class="nickname">一叶子</span>
                                    <span class="time">2019-10-20</span>
                                </div>
                                <p class="comment_content">
                                    你好我们是学生，我们有个小组，对这个活动感兴趣，我们是自愿组织想参加一下这个活动，请问下这个活动如何参加的呢，去哪里集合呢？我们也想去献血。
                                </p>
                            </div>
                        </div>
                        <div class="comment">
                            <img class="head_portrait" src="images/pic_home.jpeg">
                            <div class="comment_right">
                                <div class="comment_right_top">
                                    <span class="nickname">一叶子</span>
                                    <span class="time">2019-10-20</span>
                                </div>
                                <p class="comment_content">
                                    你好我们是学生，我们有个小组，对这个活动感兴趣，我们是自愿组织想参加一下这个活动，请问下这个活动如何参加的呢，去哪里集合呢？我们也想去献血。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity_details_content_right">
            <div class="activity_state">
                <span class="activity_content_ongoing">正在进行</span>
                <span class="activity_content_end">已结束</span>
                <button class="activity_btn secondary_button_default">活动报名</button>
            </div>
            <div class="activity_dynamic">
                <span class="activity_dynamic_title">活动动态</span>
                <span class="participation_number"><?php echo $rows['Rec_ing']; ?>/<?php echo $rows['Recruitment']; ?>人</span>
            </div>
            <div class="activity_sign_up_details">
                <div class="activity_sign_up_details_content">
                    <img class="head_portrait" src="images/pic_home.jpeg">
                    <div class="content_nickname_time">
                        <span class="content_nickname_content">长风</span>
                        <span class="content_participation_time_content">加入时间：2019-09-12</span>
                    </div>
                </div>
                <div class="activity_sign_up_details_content">
                    <img class="head_portrait" src="images/pic_home.jpeg">
                    <div class="content_nickname_time">
                        <span class="content_nickname_content">长风</span>
                        <span class="content_participation_time_content">加入时间：2019-09-12</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        function open_activity_details_content_left_activity_detail() {
            var activity_details_content_left_activity_detail =  document.getElementById('activity_details_content_left_activity_detail');
            var activity_details_content_left_activity_comments = document.getElementById('activity_details_content_left_activity_comments');
            activity_details_content_left_activity_detail.style.display='block';
            activity_details_content_left_activity_comments.style.display='none';
        }
        function open_activity_details_content_left_activity_comments() {
            var activity_details_content_left_activity_detail =  document.getElementById('activity_details_content_left_activity_detail');
            var activity_details_content_left_activity_comments = document.getElementById('activity_details_content_left_activity_comments');
            activity_details_content_left_activity_detail.style.display='none';
            activity_details_content_left_activity_comments.style.display='block';
        }
    </script>
    <script type="text/javascript" src="js/footer.js"></script>
</body>
</html>