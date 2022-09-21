<template>
    <div class="live-rank">
        <div class="tab-bar" ref="btnList">
            <div class="tab-item" @click="changeTab(0)">直播排行</div>
            <div class="tab-item" @click="changeTab(1)">关注的主播</div>
            <div class="tab-item tab-active" @click="changeTab(2)">
                为你推荐
            </div>
        </div>
        <div ref="contentList">
            <div class="rank" style="display: none">
                <div
                    v-for="(v, index) in rankList.gList"
                    :key="index"
                    class="rankItem"
                >
                    <!-- 排名第一的使用有图片的显示效果 -->
                    <div class="rank-card">
                        <div class="rank-count">{{ index + 1 }}</div>
                        <div
                            class="rank-photo"
                            :style="{ backgroundColor: v.img }"
                        ></div>
                        <div class="rank-title">
                            <div>{{ v.up }}</div>
                            <div>{{ v.title }}</div>
                        </div>
                    </div>
                    <div class="count">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 16px; width: 16px"
                        >
                            <use xlink:href="#icon-zhiboguankanshu"></use>
                        </svg>
                        <span>{{ v.count }}</span>
                    </div>
                </div>
            </div>
            <div class="follow" style="display: none">
                <div class="befLogin" v-show="!loginState">没有数据(-_-#)</div>
                <div
                    v-for="(v, index) in rankList.followList"
                    :key="index"
                    class="rankItem"
                    v-show="loginState"
                >
                    <!-- 排名第一的使用有图片的显示效果 -->
                    <div class="rank-card">
                        <div
                            class="rank-photo"
                            :style="{ backgroundColor: v.photo }"
                        ></div>
                        <div class="rank-title">
                            <div>{{ v.up }}</div>
                            <div>{{ v.title }}</div>
                        </div>
                    </div>
                    <div class="count">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            style="height: 16px; width: 16px"
                        >
                            <use xlink:href="#icon-zhiboguankanshu"></use>
                        </svg>
                        <span>{{ v.count }}</span>
                    </div>
                </div>
            </div>
            <div class="lunbo">
                <div
                    class="lunbo-list"
                    ref="lunbo"
                    @mouseenter="pauseLunbo"
                    @mouseleave="startLunbo"
                >
                    <div
                        class="lunbo-item"
                        v-for="(item, index) in lunboData"
                        :key="index"
                    >
                        <a :href="item.target">
                            <img :src="item.path" alt="" />
                            <p>{{ item.info }}</p>
                        </a>
                    </div>
                </div>
                <div class="lunbo-index" ref="index">
                    <span
                        v-for="(item, index) in lunboData"
                        :key="index"
                        @click="changeIndex"
                        :index="index"
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
import common from "@/common.js";
import myAxios from "@/http/index";
export default {
    name: "LiveRank",
    props: ["lunboData"],
    data() {
        return {
            n: 0,
            timer: null,
            classNameStr: "lunbo-item",
            tabState: 2,
            rankList: {
                gList: [],
                followList: [],
                gState: 1,
                fState: 1,
            },
        };
    },
    computed: {
        preIndex() {
            return (this.n % this.lunboData.length) - 1;
        },
        nextIndex() {
            return (this.n % this.lunboData.length) + 1;
        },
        nowIndex() {
            return this.n % this.lunboData.length;
        },
        elemList() {
            return this.$refs.lunbo.children;
        },
        indexList() {
            return this.$refs.index.children;
        },
        ...mapState({ loginState: "login" }),
    },
    methods: {
        async getVideoList(path) {
            let token = localStorage.getItem("token");
            return await myAxios.post(
                "/api/trends/" + `${path}`,
                {
                    username: localStorage.getItem("user"),
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        },
        async getRank() {
            return await myAxios.get("/gApi/liveRank");
        },
        changeTab(i) {
            if (i != this.tabState) {
                common.removeClassName(
                    this.$refs.btnList.children[this.tabState],
                    "tab-active"
                );
                common.addClass(this.$refs.btnList.children[i], "tab-active");
                this.$refs.contentList.children[this.tabState].style.display =
                    "none";
                this.$refs.contentList.children[i].style.display = "block";
                this.tabState = i;
            }
        },
        lunbo() {
            let timeCount = this.lunboData.length;
            let zIndexCount = 150;
            this.timer = setInterval(() => {
                //设定其实的状态
                if (this.n == 0) {
                    //重写index
                    //写动画
                    this.elemList[0].style.transition = "transform 0.6s";
                    this.elemList[1].style.zIndex = zIndexCount + this.n + 2;
                    this.elemList[1].style.transition = "transform 0.6s";
                    // 写位置
                    this.elemList[0].style.transform = "translateX(-256px)";
                    this.elemList[1].style.transform = "translateX(0px)";
                    common.toggleClass(this.indexList[0], "on-index");
                    common.toggleClass(this.indexList[1], "on-index");
                } else {
                    //当轮播图回到第一张时
                    if (this.n % timeCount == 0) {
                        // 写动画
                        this.elemList[timeCount - 1].style.transition = "none";
                        this.elemList[1].style.zIndex =
                            zIndexCount + this.n + 2;
                        this.elemList[1].style.transition = "transform 0.6s";
                        //写位置
                        this.elemList[timeCount - 1].style.transform =
                            "translateX(459px)";
                        this.elemList[1].style.transform = "translateX(0px)";
                        this.elemList[0].style.transform = "translateX(-256px)";
                        common.toggleClass(
                            this.indexList[this.n % timeCount],
                            "on-index"
                        );
                    } else if (this.n % timeCount < timeCount - 1) {
                        // 写动画
                        this.elemList[this.preIndex].style.transition = "none";
                        this.elemList[this.nextIndex].style.zIndex =
                            parseInt(
                                this.elemList[this.nowIndex].style.zIndex
                            ) + 1;
                        this.elemList[this.nextIndex].style.transition =
                            "transform 0.6s";
                        //写位置
                        this.elemList[this.preIndex].style.transform =
                            "translateX(256px)";
                        this.elemList[this.nextIndex].style.transform =
                            "translateX(0px)";
                        this.elemList[this.n % timeCount].style.transform =
                            "translateX(-256px)";
                        common.toggleClass(
                            this.indexList[this.n % timeCount],
                            "on-index"
                        );
                    }
                    //显示最后一张时
                    else if (this.n % timeCount == timeCount - 1) {
                        // 写动画
                        this.elemList[this.preIndex].style.transition = "none";
                        this.elemList[0].style.zIndex =
                            parseInt(
                                this.elemList[this.nowIndex].style.zIndex
                            ) + 1;
                        this.elemList[0].style.transition = "transform 0.6s";
                        // 写位置
                        this.elemList[this.preIndex].style.transform =
                            "translateX(256px)";
                        this.elemList[0].style.transform = "translateX(0px)";
                        this.elemList[this.n % timeCount].style.transform =
                            "translateX(-256px)";
                        common.toggleClass(
                            this.indexList[this.n % timeCount],
                            "on-index"
                        );
                    }
                    if (this.n % timeCount == timeCount - 1) {
                        common.toggleClass(this.indexList[0], "on-index");
                    } else {
                        common.toggleClass(
                            this.indexList[(this.n % timeCount) + 1],
                            "on-index"
                        );
                    }
                }
                console.log(this.n);
                this.n++;
            }, 6000);
        },
        changeIndex: throttle(function (target) {
            let zIndexCount = 150;
            // 获得被点击的按键的序号
            let eCount = target.target.getAttribute("index");
            let timeCount = this.lunboData.length;
            //避免触发事件时正好碰上切图的时间点而导致冲突
            clearInterval(this.timer);
            //显示的序号和点击的序号一致就跳过
            if (eCount !== this.nowIndex) {
                // 向前跳转
                if (eCount < this.nowIndex) {
                    this.elemList[eCount].style.transform =
                        "translateX(-256px)";
                    this.elemList[eCount].style.transition = "none";
                    //防止动画出错
                    setTimeout(() => {
                        this.elemList[eCount].style.transition =
                            "transform 0.5s";
                        this.elemList[this.nowIndex].style.transform =
                            "translateX(256px)";
                        this.elemList[eCount].style.transform = "translateX(0)";
                        this.elemList[eCount].style.zIndex =
                            parseInt(
                                this.elemList[this.nowIndex].style.zIndex
                            ) + 1;
                        common.toggleClass(
                            this.indexList[this.nowIndex],
                            "on-index"
                        );
                        common.toggleClass(this.indexList[eCount], "on-index");
                        // 解决跳过后导致一部分图片没有回到正确位置
                        if (this.nowIndex - eCount > 1) {
                            this.elemList[this.nowIndex - 1].style.transition =
                                "none";
                            this.elemList[this.nowIndex - 1].style.transform =
                                "translateX(256px)";
                        }
                        if (this.n < this.elemList.length) {
                            this.n -= this.nowIndex - eCount;
                        } else {
                            this.n -= this.nowIndex - eCount;
                            this.n += this.elemList.length;
                        }
                    }, 10);
                }
                // 向后跳转
                else if (eCount > this.nowIndex) {
                    this.elemList[eCount].style.zIndex =
                        parseInt(this.elemList[this.nowIndex].style.zIndex) + 1;
                    this.elemList[eCount].style.transition = "transform 0.5s ";
                    this.elemList[this.nowIndex].style.transition =
                        "transform 0.5s";
                    this.elemList[eCount].style.transform = "translateX(0)";
                    this.elemList[this.nowIndex].style.transform =
                        "translateX(-256px)";
                    common.toggleClass(
                        this.indexList[this.nowIndex],
                        "on-index"
                    );
                    common.toggleClass(this.indexList[eCount], "on-index");
                    let bu = this.nowIndex;
                    if (this.nowIndex != 0) {
                        this.elemList[this.nowIndex - 1].style.transition =
                            "none";
                        this.elemList[this.nowIndex - 1].style.transform =
                            "translateX(256px)";
                    }
                    //解决边界问题
                    if (this.nowIndex == 0 && eCount == 3) {
                        this.elemList[timeCount - 1].style.transition = "none";
                        this.elemList[timeCount - 1].style.transform =
                            "translateX(256px)";
                    }
                    this.n += eCount - this.nowIndex;
                    //解决回退动画消失
                    setTimeout(() => {
                        this.elemList[bu].style.transition = "none";
                        this.elemList[bu].style.transform = "translateX(459px)";
                        // 解决跳过后导致一部分图片没有回到正确位置
                    }, 500);
                }
            }
            this.lunbo();
        }, 200),
        pauseLunbo() {
            clearInterval(this.timer);
        },
        startLunbo() {
            this.lunbo();
        },
    },
    mounted() {
        let zIndexCount = 150;
        for (let i = 0; i < this.elemList.length; i++) {
            if (i == 0) {
                this.elemList[i].style.transform = "translateX(0px)";
                this.elemList[i].style.zIndex = zIndexCount;
            }
            if (i !== 0) {
                this.elemList[i].style.transform = "translateX(256px)";
                this.elemList[i].style.zIndex = zIndexCount - 1;
            }
        }
        common.toggleClass(this.indexList[0], "on-index");
        this.lunbo();
        this.getRank().then(
            (value) => {
                this.$set(this.rankList, "gList", value.data.content);
            },
            (reason) => {
                this.$set(this.rankList, "gState", 0);
                console.log(reason);
            }
        );
        if (this.loginState) {
            this.getVideoList("live").then(
                (value) => {
                    this.$set(this.rankList, "followList", value.data.trend);
                },
                (reason) => {
                    console.log(reason);
                    this.$set(this.rankList, "followList", 0);
                }
            );
        }
    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1438px) {
    .lunbo {
        width: 256px !important;
        height: 264px !important;
    }
    .rankItem {
        margin-bottom: 16px !important;
    }
    .rank-card {
        width: 198px !important;
    }
}
.live-rank {
    .tab-active {
        color: #00a1d6;
        border-bottom: 1px solid #00a1d6;
    }
    .tab-bar {
        display: flex;
        height: 36px;
        margin-bottom: 16px;
        margin-right: 16px;
        line-height: 22px;
        align-items: center;
        .tab-item {
            margin-right: 12px;
            cursor: pointer;
        }
    }

    .rank {
        .rankItem {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 22px;
            .rank-count {
                flex-shrink: 0;
                background-color: #00a1d6;
                height: 18px;
                width: 18px;
                margin-right: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                line-height: 18px;
                border-radius: 2px;
            }
            .rank-card {
                display: flex;
                justify-content: flex-start;
                width: 254px;
                .rank-title {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                display: flex;
                .rank-photo {
                    flex-shrink: 0;
                    height: 44px;
                    width: 44px;
                    margin-right: 12px;
                    border-radius: 50%;
                }
            }
            .count {
                display: flex;
                svg {
                    margin-right: 4px;
                }
            }
        }

        .rankItem:nth-child(n + 4) .rank-count {
            background-color: transparent;
            color: #999999 !important;
        }
    }
    .follow {
        .befLogin {
            display: flex;
            justify-content: center;
        }
        .rankItem {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 22px;
            .rank-count {
                flex-shrink: 0;
                background-color: #00a1d6;
                height: 18px;
                width: 18px;
                margin-right: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                line-height: 18px;
                border-radius: 2px;
            }
            .rank-card {
                display: flex;
                justify-content: flex-start;
                width: 254px;
                .rank-title {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                display: flex;
                .rank-photo {
                    flex-shrink: 0;
                    height: 44px;
                    width: 44px;
                    margin-right: 12px;
                    border-radius: 50%;
                }
            }
            .count {
                display: flex;
                svg {
                    margin-right: 4px;
                }
            }
        }
    }
    .recommand {
        position: absolute;
    }
    .on-index {
        border-width: 0px !important;
        background-color: transparent !important;
        background-image: url("@/assets/icon_slide_selected.png");
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(1.8);
    }
    .lunbo {
        position: relative;
        overflow: hidden;
        height: 330px;
        width: 320px;
        .lunbo-list {
            display: flex;
            height: 100%;
            position: relative;
            .lunbo-item {
                position: absolute;
                & a img {
                    width: 100%;
                }
                & a p {
                    position: absolute;
                    z-index: 10000;
                    position: absolute;
                    bottom: 12px;
                    left: 12px;
                    display: -ms-flexbox;
                    display: flex;
                    overflow: hidden;
                    -ms-flex-align: center;
                    align-items: center;
                    width: 70%;
                    color: #fff;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 14px;
                }
            }
            .lunbo-item::before {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 48px;
                border-radius: 2px;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
                background-size: contain;
                content: "";
            }
        }
        .lunbo-index {
            display: flex;
            position: absolute;
            z-index: 9999;
            bottom: 12px;
            right: 12px;
            & span {
                display: inline-block;
                margin-left: 10px;
                width: 10px;
                height: 10px;
                border: 2px solid transparent;
                border-radius: 50%;
                background-color: #fff;
                vertical-align: middle;
                cursor: pointer;
                transition: all 0.2s;
                box-sizing: border-box;
            }
            & span:not(.on-index):hover {
                border: 2px solid #fff;
                background-color: #00a1d6;
                transform: scale(1.3);
            }
        }
        .lunbo-more {
            position: absolute;
            z-index: 9999;
            opacity: 0;
            bottom: 44px;
            right: 12px;
            padding: 4px 8px;
            border-radius: 2px;
            transition: opacity 0.5s;
            background: rgba(0, 0, 0, 0.65);
            color: #fff;
        }
    }
}
</style>