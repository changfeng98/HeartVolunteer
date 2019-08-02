<?php
include("./php/dbconfig.php");
    $sql="SELECT * FROM activity";
    //接收返回值
    $mysqli_result=$db->query($sql);
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
        <div class="tag-items">
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
        <!-- 标签结束 -->
        <div class="search-line clearfix">
            <div class="select">
                <select id="selectStats" class="pub-select" style="display: none;">
                    <option value="">不限状态</option>
                    <option value="">招募中</option>
                    <option value="">进行中</option>
                    <option value="">已结束</option>
                </select><div id="sbHolder_46070727" class="sbHolder"><a id="sbToggle_46070727" href="https://125cn.net/activity/search/-----#" class="sbToggle"></a><a id="sbSelector_46070727" href="https://125cn.net/activity/search/-----#" class="sbSelector">不限状态</a><ul id="sbOptions_46070727" class="sbOptions" style="display: none;"><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/-----" rel="https://125cn.net/activity/search/-----" class="sbFocus">不限状态</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/1-----?keyword=" rel="https://125cn.net/activity/search/1-----?keyword=">招募中</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/2-----?keyword=" rel="https://125cn.net/activity/search/2-----?keyword=">进行中</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/3-----?keyword=" rel="https://125cn.net/activity/search/3-----?keyword=">已结束</a></li></ul></div>
            </div>
            <div class="select">
                <select id="selectTime" class="pub-select"  style="display: none;">
                    <option >不限时间</option>
                    <option >今天</option>
                    <option >明天</option>
                    <option >周末</option>
                    <option >最近一周</option>
                    <option >一个月</option>
                </select>
                <div id="" class="sbHolder"><a id="sbToggle_98391197" href="https://125cn.net/activity/search/-----#" class="sbToggle"></a><a id="sbSelector_98391197" href="https://125cn.net/activity/search/-----#" class="sbSelector">不限时间</a><ul id="sbOptions_98391197" class="sbOptions" style="display: none;"><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/-----" rel="https://125cn.net/activity/search/-----" class="sbFocus">不限时间</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/---1--?keyword=" rel="https://125cn.net/activity/search/---1--?keyword=">今天</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/---2--?keyword=" rel="https://125cn.net/activity/search/---2--?keyword=">明天</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/---3--?keyword=" rel="https://125cn.net/activity/search/---3--?keyword=">周末</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/---4--?keyword=" rel="https://125cn.net/activity/search/---4--?keyword=">最近一周</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/---5--?keyword=" rel="https://125cn.net/activity/search/---5--?keyword=">一个月</a></li></ul></div>
            </div>
            <div class="select">
                <select id="selectDistrictId" class="pub-select" style="display: none;">
                    <option >不限地区</option>
                    <option >日照市</option>
                    <option >青岛市</option>
                    <option >济南市</option>
                    <option >烟台市</option>
                    <option >聊城市</option>
                </select>
                <div id="sbHolder_85740895" class="sbHolder"><a id="sbToggle_85740895" href="https://125cn.net/activity/search/-----#" class="sbToggle"></a><a id="sbSelector_85740895" href="https://125cn.net/activity/search/-----#" class="sbSelector">不限地区</a><ul id="sbOptions_85740895" class="sbOptions" style="display: none;"><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/-----" rel="https://125cn.net/activity/search/-----" class="sbFocus">不限地区</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1654---?keyword=" rel="https://125cn.net/activity/search/--1654---?keyword=">滨州市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1663---?keyword=" rel="https://125cn.net/activity/search/--1663---?keyword=">荷泽市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--6023---?keyword=" rel="https://125cn.net/activity/search/--6023---?keyword=">菏泽</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1544---?keyword=" rel="https://125cn.net/activity/search/--1544---?keyword=">东营市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1613---?keyword=" rel="https://125cn.net/activity/search/--1613---?keyword=">莱芜市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1607---?keyword=" rel="https://125cn.net/activity/search/--1607---?keyword=">日照市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1631---?keyword=" rel="https://125cn.net/activity/search/--1631---?keyword=">德州市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1644---?keyword=" rel="https://125cn.net/activity/search/--1644---?keyword=">聊城市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1601---?keyword=" rel="https://125cn.net/activity/search/--1601---?keyword=">威海市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1536---?keyword=" rel="https://125cn.net/activity/search/--1536---?keyword=">枣庄市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1593---?keyword=" rel="https://125cn.net/activity/search/--1593---?keyword=">泰安市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1526---?keyword=" rel="https://125cn.net/activity/search/--1526---?keyword=">淄博市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1617---?keyword=" rel="https://125cn.net/activity/search/--1617---?keyword=">临沂市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1512---?keyword=" rel="https://125cn.net/activity/search/--1512---?keyword=">青岛市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1579---?keyword=" rel="https://125cn.net/activity/search/--1579---?keyword=">济宁市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1500---?keyword=" rel="https://125cn.net/activity/search/--1500---?keyword=">济南市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1565---?keyword=" rel="https://125cn.net/activity/search/--1565---?keyword=">潍坊市</a></li><li><a href="https://125cn.net/activity/search/-----#https://125cn.net/activity/search/--1551---?keyword=" rel="https://125cn.net/activity/search/--1551---?keyword=">烟台市</a></li></ul></div>
            </div>
            <p></p>
            <div class="activity-search">
                <input id="search" type="text" class="activity-search-input" style="outline: none" placeholder="可搜索活动名称或组织" value="" name="">
                <button class="serarch_btn">搜索</button>
            </div>
            <p></p>
        </div>
        <div class="part-box">
<!--            找到重复出现的区间，嵌入php用数组循环显示-->
            <?php
                foreach ($rows as $row ) {
            ?>
                <div class="project-items">
                    <div class="project-item">
                        <a href="activity_details.html" title="<?php echo $row['act_region']; ?>">
                            <img src="./images/activity_images/<?php echo $row['picture']?>" width="240" height="160">
                        </a>
                        <div class="project-item-right">
                            <span class="activity-title"><?php echo $row['act_name']; ?></span>
                            <div class="project-item-button">
                                <div class="project-item-middle">
<!--                                    活动没有详细地点？？？-->
                                    <span class="activity-introduction">活动地点：<?php echo $row['act_region']; ?></span>
                                    <span class="activity-introduction">活动发起：<?php echo $row['Founder']; ?></span>
                                    <span class="activity-introduction">报名截止：<?php echo $row['Deadline']; ?></span>
                                </div>
                                <div class="project-item-people">
                                    <span class="activity-people-number">已报名人数：<?php echo $row['Rec_ing']; ?>人</span>
                                    <span class="activity-people-number">总招募人数：<?php echo $row['Recruitment']; ?>人</span>
                                </div>
                                <button class="activity_apply">马上报名</button>
                            </div>
                            <span class="activity-tag">活动类别：<?php echo $row['act_category']; ?></span>
                        </div>
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