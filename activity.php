<?php
include("./service/dbconfig.php");
    $sql="SELECT * FROM activity";
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

<?php
@$act_id = $_POST['act_id'];
@$Rec_ing = $_POST['Rec_ing'] + 1;
@$Recruitment = $_POST['Recruitment'] + 1;

if ($act_id && $Rec_ing) {
    if ($Rec_ing == $Recruitment) {
        echo "<script>alert(\"报名截止\");</script>";
    } else {
        $sql = "UPDATE activity SET Rec_ing='$Rec_ing' WHERE act_id=$act_id";
        $link->query($sql);
        echo "<script>alert(\"报名成功\");history.go(-2);location.reload();</script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>心志愿-活动</title>
    <meta name="Keywords" content="心志愿,志愿活动, 公益,生态,助学,环保,儿童关怀,社会责任,节水,污染,NGO,公益活动,">
    <link rel="stylesheet" href="styles/main_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/common_styles.css" type="text/css"/>
    <link rel="stylesheet" href="styles/activity_styles.css" type="text/css"/>
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

    <div class="content">
        <div class="search-line clearfix">
            <div class="tag-items" style="cursor: default;">
                <span class="classify">分类</span>
                <span class="classify-tag">全部</span>
                <span class="classify-tag">生态环保</span>
                <span class="classify-tag">文化/艺术</span>
                <span class="classify-tag">动物保护</span>
                <span class="classify-tag">儿童关怀</span>
                <span class="classify-tag">支教助学</span>
                <span class="classify-tag">扶老助残</span>
                <span class="classify-tag">其他</span>
            </div>
            <div class="activity-search">
                <input id="search" type="text" class="input_square activity-search-input" style="outline: none;border: #e9e9e9 solid 2px" placeholder="可搜索活动名称或组织" value="" name="">
                <button class="main_button_default serarch_btn" style="border-radius: 0;width: 65px">搜索</button>
            </div>
        </div>
        <div class="part-box">
<!--            找到重复出现的区间，嵌入php用数组循环显示-->
            <?php
                foreach ($rows as $row ) {
            ?>
                <div class="project-item">
                    <a href="activity_details.php?act_id='<?php echo $row['act_id'] ?>'" title="<?php echo $row['act_region']; ?>">

                        <img src="./images/activity_images/<?php echo $row['picture']?>" width="240" height="160">

                    </a>
                    <div class="project-item-right">
                        <span class="activity-title"><?php echo $row['act_name']; ?></span>
                        <div class="project-item-button">
                            <div class="project-item-middle">
<!--                                    活动没有详细地点？？？-->
                                <span class="activity-introduction">活动地点：<?php echo $row['act_region']; ?></span>
                                <span class="activity-introduction">活动发起：<?php echo $row['Founder']; ?></span>
                                <span class="activity-introduction">志愿时长：<?php echo $row['Deadline']; ?></span>
                            </div>
                            <div class="project-item-people">
                                <span class="activity-people-number">已报名人数：<?php echo $row['Rec_ing']; ?>人</span>
                                <span class="activity-people-number">总招募人数：<?php echo $row['Recruitment']; ?>人</span>
                            </div>
<!--                            --><?php //if($row['Rec_ing']==$row['Recruitment']){
                                //echo "报名截止";
                                //<input type="submit" value="点击按钮" >
//                            <button class="activity_apply main_button_default" style="border-radius: 0;">报名截止</button>
//                            }else{
//                                echo "马上报名";
//                            <button class="activity_apply main_button_default" style="border-radius: 0;">马上报名</button>
//                            }?>

                            <form method="post" action="">
                                <input name="act_id" type="hidden" value="<?php echo $row['act_id']; ?>">
                                <input name="Rec_ing" type="hidden" value="<?php echo $row['Rec_ing']; ?>">
                                <input name="Recruitment" type="hidden" value="<?php echo $row['Recruitment']; ?>">
                                <input class="activity_apply main_button_default" style="border-radius: 0;" type="submit" value="马上报名">
                            </form>

                        </div>
                        <span class="activity-tag">活动类别：<?php echo $row['act_category']; ?></span>
                    </div>
                </div>
                <?php
                    }
                ?>
            <!-- 活动列表结束  -->
        </div>
        <!-- 活动页结束 -->
    </div>

    <script type="text/javascript" src="js/footer.js"></script>
    <script type="application/javascript" src="js/activityPage.js"></script>
</body>
</html>