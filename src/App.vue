<template>
    <div id="app">
        <InternationalHeader></InternationalHeader>
        <!-- <FirstScreen></FirstScreen> -->
        <router-view></router-view>
        <InternationalFooter></InternationalFooter>
    </div>
</template>

<script>
import InternationalHeader from "@/components/InternationalHeader.vue";
import InternationalFooter from "@/components/InternationalFooter.vue";
import FirstScreen from "@/components/FirstScreen.vue";
import common from "@/common";
export default {
    name: "App",
    components: {
        InternationalHeader,
        InternationalFooter,
        FirstScreen,
    },
};
</script>

<style lang='less'>
#app {
    color: #505050;
    font: 12px "-apple-system", "BlinkMacSystemFont", "Helvetica Neue",
        "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "sans-serif";
    -webkit-font-smoothing: antialiased;
}
@media screen and (max-width: 1870px) {
    //1414
    .warp {
        width: 1414px !important;
    }

    .hd-right-warp {
        width: 242px !important;
    }

    .rcmd-box {
        width: 854px !important;
        height: 242px;
    }

    .video-card:nth-child(n + 9) {
        display: none;
    }

    .left-report-box {
        width: 1070px !important;
    }
}

@media screen and (max-width: 1645px) {
    //1198
    .warp {
        width: 1198px !important;
    }

    .hd-right-warp {
        width: 220px !important;
    }

    .rcmd-box {
        width: 638px !important;
    }

    .video-card:nth-child(n + 7) {
        display: none;
    }

    .left-report-box {
        width: 854px !important;
    }
}

@media screen and (max-width: 1438px) {
    //999
    .warp {
        width: 999px !important;
    }

    .hd-left-warp {
        width: 50px !important;
    }

    .rcmd-box {
        width: 530px !important;
        height: 202px !important;
    }

    .shower-warp {
        width: 459px !important;
        height: 202px !important;
    }

    .video-card {
        width: 170px !important;
        height: 96px !important;
    }
    .video-card-g {
        width: 170px !important;
    }

    // 左侧栏
    .left-report-box {
        width: 710px !important;
    }

    // 右侧栏
    .right-report-box {
        width: 265px !important;
    }

    .ex-video-card {
        width: 170px !important;
    }

    .pic-card {
        height: 96px !important;
    }

    .rcmd-info {
        padding: 8px 10px 10px !important;
    }
    .rank-a,
    .rank-video-card {
        width: 235px !important;
    }
    .st-ad {
        img {
            width: 265px !important;
            height: 274px !important;
        }
    }
    .time-line-card {
        width: 210px !important;
    }
    .time-line-info {
        width: 128px !important;
    }
}

@media screen and(max-width:1122px) {
    .post {
        width: 60px !important;
    }
}

@media screen and (max-width: 1189px) {
    .search-min {
        display: block !important;
    }

    .search-bar {
        justify-content: end;

        & > form {
            display: none !important;
        }
    }
}

a {
    text-decoration: none;
    color: #505050;
}

.warp {
    width: 1630px;
    margin: 0 auto;
}

.separator-row {
    width: 100%;
    height: 1px;
    background-color: #eee;
}

.separator-column {
    height: 46px;
    width: 1px;
    background-color: #e7e7e7;
    margin: 0 8px;
}

.active-blue:hover {
    color: #73c9e5 !important;
    transition: color 0.3s;
}

//悬停样式（蓝）
.active-blue {
    transition: color 0.3s;
}

.active-sliver:hover {
    background-color: #f4f4f4 !important;
    transition: background-color 0.3s;
}

//悬停样式（灰）
.active-sliver {
    transition: background-color 0.3s;
}

// 视频的窗口（除了推广部分）
.video-card {
    height: 116px;
    width: 206px;
    background-color: #e7e7e7;
    margin-bottom: 10px;
    position: relative;
}

.content-title {
    display: flex;
    align-items: center;

    & svg {
        width: 36px;
        height: 36px;
        margin-right: 6px;
    }

    & img {
        width: 24px;
        height: 24px;
        margin-right: 6px;
    }

    & p {
        font-size: 20px;
        line-height: 20px;
        margin-right: 20px;
    }
}

//左侧内容区
.left-report-box {
    width: 1286px;
    display: flex;
    flex-direction: column;
}

//右侧内容区
.right-report-box {
    width: 320px;
}

.ex-up-info {
    display: flex;
    margin-top: 60px;
    line-height: 16px;
    color: #999;

    & i {
        font-size: 16px;
        margin-right: 4px;
        transform: scale(0.75);
    }
}
</style>
