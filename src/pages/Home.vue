<template>
    <div>
        <FirstScreen :lunboData="lunboData">
            <template slot="title-name"> 推广 </template>
        </FirstScreen>
        <div class="storey-box">
            <ColumnBox :changeInfo="'live'" :titleState="0">
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
                <template slot="rank-type">
                    <LiveRank :lunboData="liveLunbo"></LiveRank>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1" :changeInfo="'anime'">
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
            <TimeLine :accept="timelineData.bangumi" :titleState="1">
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
            <ColumnBox :titleState="1" :moreState="1" :changeInfo="'bangumi'">
                <template slot="columnName">番剧动态</template>
                <template slot="rank-type">
                    <BangumiLunbo :lunboData="bangumiLunbo"></BangumiLunbo>
                </template>
                <template slot="right-box-title">特别推荐</template>
            </ColumnBox>
            <TimeLine :accept="timelineData.guochuang" :titleState="1">
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
            <ColumnBox :titleState="1" :changeInfo="'guochuang'">
                <template slot="columnName">国创相关</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
                <template slot="right-box-title">排行榜</template>
            </ColumnBox>
            <ColumnBox :titleState="1" :changeInfo="'music'">
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
            <ColumnBox :titleState="1" :changeInfo="'dance'">
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
            <ColumnBox :titleState="1" :changeInfo="'game'">
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
            <ColumnBox :titleState="1" :changeInfo="'knowledge'">
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
            <ColumnBox :changeInfo="'class'">
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
            <ColumnBox :titleState="1" :changeInfo="'tech'">
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
            <ColumnBox :titleState="1" :changeInfo="'sports'">
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
            <ColumnBox :titleState="1" :changeInfo="'car'">
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
            <ColumnBox :titleState="1" :changeInfo="'daily'">
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
            <ColumnBox :titleState="1" :changeInfo="'food'">
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
            <ColumnBox :titleState="1" :changeInfo="'animal'">
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
            <ColumnBox :titleState="1" :changeInfo="'guichu'">
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
            <ColumnBox :titleState="1" :changeInfo="'fashion'">
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
            <ColumnBox :changeInfo="'news'">
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
            <ColumnBox :titleState="1" :changeInfo="'entertainment'">
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
            <ColumnBox :titleState="1" :changeInfo="'column'">
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
            <ColumnBox :titleState="1" :changeInfo="'movie'">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 36px; width: 36px"
                        >
                            <use xlink:href="#icon-dianying"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">电影</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1" :changeInfo="'tv'">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-dianshiju1"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">TV剧</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1" :changeInfo="'yingshi'">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-yingshi"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">影视</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox :titleState="1" :changeInfo="'documentary'">
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-jingyu"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">纪录片</template>
                <template slot="right-box-title">排行榜</template>
                <template slot="rank-type">
                    <Ranking></Ranking>
                </template>
            </ColumnBox>
            <ColumnBox
                :titleState="1"
                :changeInfo="'specialRecom'"
                :btn="1"
                :moreState="1"
            >
                <template slot="columnIcon">
                    <div class="svg-box">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 26px; width: 26px"
                        >
                            <use xlink:href="#icon-tuijian"></use>
                        </svg>
                    </div>
                </template>
                <template slot="columnName">特别推荐</template>
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
import LiveRank from "@/components/LiveRank.vue";
import BangumiLunbo from "@/components/bangumiLunbo.vue";
const axios = require("axios").default;
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
        LiveRank,
        BangumiLunbo,
    },
    data() {
        return {
            timelineState: true,
            timelineData: {
                bangumi: {},
                guochuang: {},
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
            liveLunbo: [
                {
                    path: require("@/assets/livelunbo/livelunbo1.webp"),
                    target: "1",
                    info: "上麦说出你的故事！",
                },
                {
                    path: require("@/assets/livelunbo/livelunbo2.webp"),
                    target: "3",
                    info: "明日方舟UP主应援计划",
                },
                {
                    path: require("@/assets/livelunbo/livelunbo3.webp"),
                    target: "3",
                    info: "VirtuaReal夏日合唱Promax线上演唱会",
                },
            ],
            bangumiLunbo: [
                {
                    path: require("@/assets/bangumi-img/01.webp"),
                    target: "1",
                    info: "散装家庭的爆笑喜剧",
                },
                {
                    path: require("@/assets/bangumi-img/02.webp"),
                    target: "2",
                    info: "紧贴系？青春恋爱喜剧！！",
                },
                {
                    path: require("@/assets/bangumi-img/03.webp"),
                    target: "3",
                    info: "用盾，拯救世界",
                },
            ],
        };
    },
    mounted() {
        async function timeline(target, p) {
            try {
                let x = await axios.get(target);
                this.$set(this.timelineData, p, x.data);
            } catch (error) {
                console.log(error);
            }
        }
        timeline.call(
            this,
            "http://localhost:3000/gApi/bangumiTimeline",
            "bangumi"
        );
        timeline.call(
            this,
            "http://localhost:3000/gApi/guochuangTimeline",
            "guochuang"
        );
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
</style>