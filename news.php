<?php
include("service/dbconfig.php");
    $sql="SELECT * FROM advisory_video";
    //接收返回值
    $mysqli_result=$link->query($sql);
    if($mysqli_result == false){
        echo "SQL错误";
        exit;
    }
    //用数组储存信息,$mysqli_result->fetch_array(MYSQL_ASSOC)重复调用自动显示下一条数据，直至没有返回null,且该函数调用不可逆，只能用一次
    $rows=[];
    while($row=$mysqli_result->fetch_array(MYSQLI_ASSOC)){
        $rows[]=$row;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>心志愿-资讯</title>
    <link rel="stylesheet" href="styles/main_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/common_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/information_style.css" type="text/css"/>
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
    <div class="information">
<!--        <img class="shuffling" src="images/shuffling.jpg">-->
        <div class="content">
            <div class="content_tag">
                <span class="video_btn" onclick="open_video();">视频</span>
                <span class="news_btn" onclick="open_news();">新闻</span>
            </div>
            <div id="video_content" class="video_content">
                <table id="" class="video">
                <?php
                    $i=0;
                    foreach ($rows as $row){
                        if($i==0) echo "<tr>";
                ?>
                    <td>
                        <div class="video_description">
                            <video width="353px" height="200px" controls>
                                <source src="video/<?php echo $row['video']?>" type="video/mp4">
                                <source src="video/<?php echo $row['video']?>" type="video/ogg">
                                您的浏览器不支持 video 标签。
                            </video>
                            <span class="video_title"><?php echo $row['video_name']; ?></span>
                            <div class="video_from_time">
                                <span class="video_from_time_content"><?php echo $row['video_source']?></span>
                                <span class="video_from_time_content"><?php echo substr($row['time'],0,19)?></span>
                            </div>
                        </div>
                    </td>
                <?php
                     $i++;
                    if($i==3){
                        $i=0;
                        echo "</tr>";
                    }
                    }
                ?>
                </table>
            </div>
            <div style="display: none" id="news_contents" class="news_contents">
<!--                <div class="news">-->
<!--                    <img class="news_photo" src="images/news_protect_eye.jpg">-->
<!--                    <div class="news_content">-->
<!--                        <span class="news_content_title">福州眼科医院“暑期爱眼志愿者活动”圆满成功！</span>-->
<!--                        <p class="news_content_body">-->
<!--                            近年来青少年近视问题日益严峻，国家揪心，家长烦心，为了加强儿童青少年视力防护，同时丰富青少年暑期生活，帮助更多孩子了解爱眼护眼的常识，真正变成“防控近视”小能手，福州眼科医院于7月21日上午在我院2号楼2楼宣讲厅举办了一场主题为“预防近视，从我做起”的暑期爱眼志愿者活动...-->
<!--                        </p>-->
<!--                        <div class="news_content_form">-->
<!--                            <span class="news_content_from_content">福州眼科医院</span>-->
<!--&lt;!&ndash;                            <span class="news_content_from">2019-07-29</span>&ndash;&gt;-->
<!--                            <span class="news_content_num">浏览量：2600</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="news">-->
<!--                    <img class="news_photo" src="images/news_protect_eye.jpg">-->
<!--                    <div class="news_content">-->
<!--                        <span class="news_content_title">福州眼科医院“暑期爱眼志愿者活动”圆满成功！</span>-->
<!--                        <p class="news_content_body">-->
<!--                            近年来青少年近视问题日益严峻，国家揪心，家长烦心，为了加强儿童青少年视力防护，同时丰富青少年暑期生活，帮助更多孩子了解爱眼护眼的常识，真正变成“防控近视”小能手，福州眼科医院于7月21日上午在我院2号楼2楼宣讲厅举办了一场主题为“预防近视，从我做起”的暑期爱眼志愿者活动...-->
<!--                        </p>-->
<!--                        <div class="news_content_form">-->
<!--                            <span class="news_content_from_content">福州眼科医院</span>-->
<!--                            &lt;!&ndash;                            <span class="news_content_from">2019-07-29</span>&ndash;&gt;-->
<!--                            <span class="news_content_num">浏览量：2600</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="news">-->
<!--                    <img class="news_photo" src="images/news_protect_eye.jpg">-->
<!--                    <div class="news_content">-->
<!--                        <span class="news_content_title">福州眼科医院“暑期爱眼志愿者活动”圆满成功！</span>-->
<!--                        <p class="news_content_body">-->
<!--                            近年来青少年近视问题日益严峻，国家揪心，家长烦心，为了加强儿童青少年视力防护，同时丰富青少年暑期生活，帮助更多孩子了解爱眼护眼的常识，真正变成“防控近视”小能手，福州眼科医院于7月21日上午在我院2号楼2楼宣讲厅举办了一场主题为“预防近视，从我做起”的暑期爱眼志愿者活动...-->
<!--                        </p>-->
<!--                        <div class="news_content_form">-->
<!--                            <span class="news_content_from_content">福州眼科医院</span>-->
<!--                            &lt;!&ndash;                            <span class="news_content_from">2019-07-29</span>&ndash;&gt;-->
<!--                            <span class="news_content_num">浏览量：2600</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>

    <script type="text/javascript">
        function open_video() {
            // requestVideos();
            var video_content =  document.getElementById('video_content');
            var news_content = document.getElementById('news_contents');
            video_content.style.display='block';
            news_content.style.display='none';
            $('.video_btn').css({color:'#ff664b'});
            $('.news_btn').css({color:'#000'});
        }
        function open_news() {
            // requestNews();
            var video_content =  document.getElementById('video_content');
            var news_content = document.getElementById('news_contents');
            video_content.style.display='none';
            news_content.style.display='block';
            $('.news_btn').css({color:'#ff664b'});
            $('.video_btn').css({color:'#000'});
        }
    </script>
    <script type="text/javascript" src="js/footer.js"></script>
    <script type="application/javascript" src="js/newsPage.js"></script>
</body>
</html>