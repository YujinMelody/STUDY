<template>
    <div>
        <FirstScreen :lunboData="lunboData">
            <template slot="title-name"> 推广 </template>
        </FirstScreen>
        <div class="storey-box">
            <ColumnBox>
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-zhibo"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">直播</template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-Animation"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">动画</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <TimeLine :accept="bangumiData" :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-dianshi"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">番剧</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <RankBangumi></RankBangumi>
                </template>
            </TimeLine>
            <ColumnBox :titleState="1" :moreState="1">
                <template slot="columnName">番剧动态</template>
                <template slot="rank-type">
                    <Lunbo style="width: 100%"></Lunbo>
                </template>
                <template slot="right-box-title">特别推荐</template>
            </ColumnBox>
            <TimeLine :accept="guochuangData" :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-guochandonghuatuijian"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">国创</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <RankBangumi></RankBangumi>
                </template>
            </TimeLine>
            <ColumnBox :titleState="1">
                <template slot="columnName">国创相关</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
                <template slot="right-box-title">排行榜</template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="svg-icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-erji"></use>
                        </svg>
                    </div>
                </template>
                <template slot="right-box-title">排行榜</template>
                <template slot="columnName">音乐</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-shanzi-"></use>
                        </svg>
                    </div>
                </template>
                <template slot="right-box-title">排行榜</template>
                <template slot="columnName">舞蹈</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-youxi"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">游戏</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-diandengpao"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">知识</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox>
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-tushu"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">课堂</template>
                <template slot="rank-type">
                    <RightStaticAd>
                        <template slot="ad-title"></template>
                        <template slot="ad-img">
                            <img src="../assets/class.webp" alt="" />
                        </template>
                    </RightStaticAd>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-keji-"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">科技</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-paobu"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">运动</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-qiche"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">汽车</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-shenghuo"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">生活</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-shiwu"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">美食</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-maozhao"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">动物圈</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-guixu"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">鬼畜</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-shishang"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">时尚</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox>
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-wenzhang"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">资讯</template>
                <template slot="rank-type">
                    <RightStaticAd>
                        <template slot="ad-title">
                            资讯分区正式上线啦！
                        </template>
                        <template slot="ad-img">
                            <img src="../assets/zixun.webp" alt="" />
                        </template>
                    </RightStaticAd>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-yule"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">娱乐</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-zhishi"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">专栏</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
        </div>
    </div>
</template>

<script>
import VideoCardG from "@/components/VideoCardG.vue";
import ColumnBox from "@/components/ColumnBox.vue";
import FirstScreen from "@/components/FirstScreen.vue";
import Ranking from "@/components/Ranking.vue";
import RankBangumi from "@/components/RankBangumi.vue";
import RightStaticAd from "@/components/RightStaticAd.vue";
import TimeLine from "@/components/TimeLine.vue";
import Lunbo from "@/components/Lunbo.vue";
// import Lunbo from "@/components/Lunbo.vue";
export default {
    name: "Home",
    components: {
        VideoCardG,
        ColumnBox,
        FirstScreen,
        Ranking,
        RankBangumi,
        RightStaticAd,
        TimeLine,
        Lunbo,
    },
    data() {
        return {
            bangumiData: {
                recent: [
                    { title: "黑之召唤士", info: "第8话" },
                    {
                        title: "Love All Paly热血羽毛球/羽球青春",
                        info: "第15话",
                    },
                    {
                        title: "德凯奥特曼",
                        info: "第7话",
                    },
                    {
                        title: "德凯奥特曼（中配）",
                        info: "第7话",
                    },
                    {
                        title: "勇者斗恶龙 达伊的大冒险",
                        info: "第83话",
                    },
                    { title: "团团奇米莫", info: "06A~08B" },
                    {
                        title: "测不准的阿波连同学 中配版",
                        info: "第11话~第12话",
                    },
                    {
                        title: "新干线变形机器人 辛卡利欧Z / 进化利恩 极",
                        info: "第14话",
                    },
                    {
                        title: "幕末替身传说",
                        info: "第8话",
                    },
                    {
                        title: "惑星公主蜥蜴骑士",
                        info: "第14话",
                    },
                    { title: "夏日重现", info: "第16话" },
                    { title: "新 东京猫猫", info: "第8话" },
                    { title: "相合之物", info: "第11话" },
                    { title: "小林家的龙女仆 第二季 中配版", info: "第9话" },
                    { title: "歌愈少女", info: "第11话" },
                ],
                mon: [
                    { title: "小林家的龙女仆 第二季 中配版", info: "第9话" },
                    { title: "歌愈少女", info: "第11话" },
                ],
                tues: [{ title: "东方少女 第二季", info: "第7话" }],
                wed: [
                    { title: "新 东京猫猫", info: "第8话" },
                    { title: "相合之物", info: "第11话" },
                ],
                thur: [{ title: "夏日重现", info: "第16话" }],
                fri: [
                    { title: "团团奇米莫", info: "06A~08B" },
                    {
                        title: "测不准的阿波连同学 中配版",
                        info: "第11话~第12话",
                    },
                    {
                        title: "新干线变形机器人 辛卡利欧Z / 进化利恩 极",
                        info: "第14话",
                    },
                    {
                        title: "幕末替身传说",
                        info: "第8话",
                    },
                    {
                        title: "惑星公主蜥蜴骑士",
                        info: "第14话",
                    },
                ],
                sat: [
                    {
                        title: "勇者斗恶龙 达伊的大冒险",
                        info: "第83话",
                    },
                    {
                        title: "德凯奥特曼",
                        info: "第7话",
                    },
                    {
                        title: "德凯奥特曼（中配）",
                        info: "第7话",
                    },
                    {
                        title: "Love All Paly热血羽毛球/羽球青春",
                        info: "第15话",
                    },
                    {
                        title: "黑之召唤士",
                        info: "第8话",
                    },
                ],
                sun: [
                    {
                        title: "鲁邦三世",
                        info: "第19话",
                    },
                    {
                        title: "博人传 火影忍者新时代",
                        info: "第255话",
                    },
                ],
            },
            guochuangData: {
                recent: [
                    { title: "星源之主", info: "第12话" },
                    { title: "凡人修仙传", info: "第65话" },
                    { title: "汉化日记 第二季", info: "第6话" },
                    { title: "新围棋少年", info: "第32话~第33话" },
                    { title: "肥志百科", info: "第66话" },
                    { title: "我的弟子遍布诸天万界 动态漫", info: "第16话" },
                    { title: "食草老龙被冠以恶龙之名", info: "第6话" },
                    { title: "绝顶", info: "第1话~第26话" },
                    { title: "战千年", info: "第7话" },
                    { title: "阳光咖啡厅之新友纪", info: "第13话" },
                    { title: "阳光咖啡厅之新友纪 上海话版", info: "第13话" },
                    { title: "思无邪", info: "第9话" },
                    { title: "斗破苍穹之大主宰 动态漫 第四季", info: "第22话" },
                    { title: "阿衰 第八季", info: "第28话" },
                    { title: "我不是白吃", info: "第450话" },
                    { title: "黑门", info: "第6话" },
                    { title: "剑网3·侠肝义胆沈剑心 第三季", info: "第10话" },
                    { title: "正邪 动态漫", info: "第51话" },
                    { title: "日月同错 动态漫", info: "第45话" },
                    { title: "被迫成为反派赘婿 动态漫 第三季", info: "第14话" },
                    { title: "阿衰 第八季", info: "第27话" },
                ],
                mon: [
                    { title: "百妖谱·京师篇", info: "第6话" },
                    { title: "梦幻书院 第七集", info: "第10话" },
                    { title: "团子们的使命", info: "第9话" },
                    { title: "小狮子赛几 第二季", info: "第67话" },
                ],
                tues: [
                    { title: "萌妻食神", info: "第33话" },
                    { title: "山海绝伦", info: "第1话~第3话" },
                    { title: "小狮子赛几 第二季", info: "第68话" },
                    { title: "我不是白吃", info: "第448话" },
                ],
                wed: [
                    { title: "星源之主", info: "第11话" },
                    { title: "靠你啦！战神系统", info: "第6话" },
                    { title: "阳光咖啡厅之新友纪", info: "第12话" },
                    { title: "阳光咖啡厅之新友纪 上海话版", info: "第12话" },
                    { title: "元尊 动态漫 第三季：真假圣龙", info: "第7话" },
                    { title: "小狮子赛几 第二季", info: "第69话" },
                ],
                thur: [
                    { title: "君有云", info: "第20话" },
                    { title: "我的弟子遍布诸天万界 动态漫", info: "第15话" },
                    { title: "中华小子", info: "第1话" },
                    { title: "三寸人间", info: "第4话" },
                    { title: "小狮子赛几 第二季", info: "第70话" },
                    { title: "我不是白吃", info: "第449话" },
                ],
                fri: [
                    { title: "黑门", info: "第6话" },
                    { title: "剑网3·侠肝义胆沈剑心 第三季", info: "第10话" },
                    { title: "正邪 动态漫", info: "第51话" },
                    { title: "日月同错 动态漫", info: "第45话" },
                    { title: "被迫成为反派赘婿 动态漫 第三季", info: "第14话" },
                    { title: "阿衰 第八季", info: "第27话" },
                ],
                sat: [
                    { title: "肥志百科", info: "第66话" },
                    { title: "我的弟子遍布诸天万界 动态漫", info: "第16话" },
                    { title: "食草老龙被冠以恶龙之名", info: "第6话" },
                    { title: "绝顶", info: "第1话~第26话" },
                    { title: "战千年", info: "第7话" },
                    { title: "阳光咖啡厅之新友纪", info: "第13话" },
                    { title: "阳光咖啡厅之新友纪 上海话版", info: "第13话" },
                    { title: "思无邪", info: "第9话" },
                    { title: "斗破苍穹之大主宰 动态漫 第四季", info: "第22话" },
                    { title: "阿衰 第八季", info: "第28话" },
                    { title: "我不是白吃", info: "第450话" },
                ],
                sun: [
                    { title: "星源之主", info: "第12话" },
                    { title: "凡人修仙传", info: "第65话" },
                    { title: "汉化日记 第二季", info: "第6话" },
                    { title: "新围棋少年", info: "第32话~第33话" },
                ],
            },
            lunboData: [
                {
                    path: require("@/assets/main-lunbo-img/lunbo1.webp"),
                    target: "1",
                    info: "全都秒了",
                },
                {
                    path: require("@/assets/main-lunbo-img/lunbo2.png"),
                    target: "2",
                    info: "凡人修仙传",
                },
                {
                    path: require("@/assets/main-lunbo-img/lunbo3.webp"),
                    target: "3",
                    info: "不是吧这都能换到！",
                },
                {
                    path: require("@/assets/main-lunbo-img/lunbo4.webp"),
                    target: "4",
                    info: "这个杀手不需要改需求",
                },
                {
                    path: require("@/assets/main-lunbo-img/lunbo5.webp"),
                    target: "5",
                    info: "用图片上首页",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.g-title {
    height: 36px;
    margin-bottom: 16px;
    display: flex;
    .svg-box {
        height: 36px;
        width: 36px;
        margin-right: 3px;
        vertical-align: baseline;
    }
    & div:not(.content-title) {
        display: flex;
        align-items: center;

        & a {
            display: flex;
            align-items: center;
        }
    }
}

.g-box {
    display: flex;
    justify-content: space-between;

    .ex-video-card {
        width: 206px;

        .pic-card {
            width: 100%;
            height: 116px;

            & a {
                color: #212121;

                & p {
                    display: -webkit-box;
                    font-size: 14px;
                    height: 40px;
                    margin: 10px 0 8px;
                    line-height: 20px;
                    padding-right: 12px;
                    overflow: hidden;
                    // text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>