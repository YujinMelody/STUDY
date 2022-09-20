<template>
    <div class="user-history">
        <div class="topbar">
            <div
                class="videoTab tab-active"
                @click="changeTab"
                :index="0"
                ref="video"
            >
                视频动态
            </div>
            <div class="livTab" @click="changeTab" :index="1" ref="live">
                直播
            </div>
            <div class="columnTab" @click="changeTab" :index="2" ref="column">
                专栏
            </div>
        </div>
        <div class="history-box">
            <ul class="history-list">
                <li
                    class="history"
                    v-for="(item, index) in showList.list.trend"
                    :key="index"
                >
                    <div class="left-box">
                        <a
                            :href="item.target"
                            class="photo"
                            :style="{ backgroundColor: item.photo }"
                        ></a>
                    </div>
                    <div class="center-box">
                        <div class="info">{{ item.up }}</div>
                        <a href="">{{ item.title }}</a>
                    </div>
                    <div class="right-box">
                        <a href="" :style="{ backgroundColor: item.cover }"></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import common from "@/common";
import axios from "axios";
export default {
    name: "UserHistory",
    data() {
        return {
            state: 0,
            showList: { list: [] },
        };
    },
    methods: {
        changeTab(event) {
            let token = localStorage.getItem("token");
            async function getVideoList(path) {
                return await axios.post(
                    "http://localhost:3000/api/trends/" + `${path}`,
                    {
                        username: localStorage.getItem("user"),
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
            }
            let index = event.target.getAttribute("index");
            if (index != this.state) {
                common.addClass(event.target, "tab-active");
                switch (this.state) {
                    case 0:
                        common.removeClassName(this.$refs.video, "tab-active");
                        break;
                    case 1:
                        common.removeClassName(this.$refs.live, "tab-active");
                        break;
                    case 2:
                        common.removeClassName(this.$refs.column, "tab-active");
                        break;
                }
                this.state = parseInt(index);
                switch (this.state) {
                    case 0:
                        let x = JSON.parse(localStorage.getItem("videoTrend"));
                        if (!x) {
                            getVideoList("video").then(
                                (value) => {
                                    //生成缓存控制器
                                    console.log(value);
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "videoTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data.trend
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 验证是否过期，如果过期就重新请求
                        else if (
                            x &&
                            Date.now() / 1000 - x.overflow >= x.timeStamp
                        ) {
                            getVideoList("video").then(
                                (value) => {
                                    //生成缓存控制器
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "videoTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 如果没有过期就只读取缓存
                        else if (
                            x &&
                            Date.now() / 1000 - x.overflow < x.timeStamp
                        ) {
                            this.$set(
                                this.showList,
                                "list",
                                JSON.parse(localStorage.getItem("videoTrend"))
                                    .info
                            );
                        }
                        break;
                    case 1:
                        let x1 = JSON.parse(localStorage.getItem("liveTrend"));
                        if (!x1) {
                            getVideoList("live").then(
                                (value) => {
                                    //生成缓存控制器
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "liveTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 验证是否过期，如果过期就重新请求
                        else if (
                            x1 &&
                            Date.now() - x1.overflow >= x1.timeStamp
                        ) {
                            getVideoList("live").then(
                                (value) => {
                                    //生成缓存控制器
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "liveTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 如果没有过期就只读取缓存
                        else if (
                            x1 &&
                            Date.now() - x1.overflow < x1.timeStamp
                        ) {
                            this.$set(
                                this.showList,
                                "list",
                                JSON.parse(localStorage.getItem("liveTrend"))
                                    .info.trend
                            );
                        }
                        break;
                    case 2:
                        let x2 = JSON.parse(
                            localStorage.getItem("columnTrend")
                        );
                        if (!x2) {
                            getVideoList("column").then(
                                (value) => {
                                    //生成缓存控制器
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "columnTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 验证是否过期，如果过期就重新请求
                        else if (
                            x2 &&
                            Date.now() - x2.overflow >= x2.timeStamp
                        ) {
                            getVideoList("column").then(
                                (value) => {
                                    //生成缓存控制器
                                    let data = {
                                        info: value.data,
                                        timeStamp: Date.now() / 1000,
                                        overflow: 60,
                                    };
                                    // 储存trend
                                    localStorage.setItem(
                                        "columnTrend",
                                        JSON.stringify(data)
                                    );
                                    this.$set(
                                        this.showList,
                                        "list",
                                        value.data
                                    );
                                },
                                (reason) => {
                                    console.log(reason);
                                    this.$set(this.showList, "list", 0);
                                }
                            );
                        }
                        // 如果没有过期就只读取缓存
                        else if (
                            x2 &&
                            Date.now() - x2.overflow < x2.timeStamp
                        ) {
                            this.$set(
                                this.showList,
                                "list",
                                JSON.parse(localStorage.getItem("columnTrend"))
                                    .info.trend
                            );
                        }
                        break;
                }
            }
        },
    },
    mounted() {
        let token = localStorage.getItem("token");
        async function getVideoList(path) {
            return await axios.post(
                "http://localhost:3000/api/trends/" + `${path}`,
                {
                    username: localStorage.getItem("user"),
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        }
        let x = JSON.parse(localStorage.getItem("videoTrend"));
        console.log(x);
        if (!x) {
            getVideoList("video").then(
                (value) => {
                    //生成缓存控制器
                    let data = {
                        info: value.data,
                        timeStamp: Date.now() / 1000,
                        overflow: 60,
                    };
                    // 储存trend
                    localStorage.setItem("videoTrend", JSON.stringify(data));
                    this.$set(this.showList, "list", value.data);
                },
                (reason) => {
                    console.log(reason);
                    this.$set(this.showList, "list", 0);
                }
            );
        }
        // 验证是否过期，如果过期就重新请求
        else if (x && Date.now() - x.overflow >= x.timeStamp) {
            getVideoList("video").then(
                (value) => {
                    //生成缓存控制器
                    let data = {
                        info: value.data,
                        timeStamp: Date.now() / 1000,
                        overflow: 60,
                    };
                    // 储存trend
                    localStorage.setItem("videoTrend", JSON.stringify(data));
                    this.$set(this.showList, "list", value.data);
                },
                (reason) => {
                    console.log(reason);
                    this.$set(this.showList, "list", 0);
                }
            );
        }
        // 如果没有过期就只读取缓存
        else if (x && Date.now() - x.overflow < x.timeStamp) {
            console.log("timeout");
            this.$set(this.showList, "list", x.info.trend);
        }
    },
};
</script>

<style lang="less" scoped>
.user-history {
    width: 362px;
    height: 540px;
    z-index: 9999;
    box-sizing: border-box;
    position: absolute;
    left: -171px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    line-height: 16px;

    .topbar {
        padding-left: 19px;
        display: flex;
        font-size: 12px;
        height: 48px;
        align-items: center;
        border-bottom: 1px solid #e7e7e7;
        & > div {
            color: #999;
            margin-right: 14px;
            transition: 0.3s ease;
            cursor: pointer;
        }
    }
    .history-box {
        display: flex;
        flex-direction: column;
        transition: 0.3s ease;
        height: 490px;
        overflow: hidden;
        overflow-y: auto;
        .history {
            display: flex;
            padding: 11px 18px;

            .left-box {
                display: flex;
                width: 35px;
                height: 35px;
                justify-content: flex-start;
                > a {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .center-box {
                display: flex;
                flex-direction: column;
                padding: 0 11px;

                .info {
                    color: #505050;
                }
                > a {
                    line-height: 16px;
                    color: #212121;
                    width: 178px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-top: 5px;
                }
            }
            .right-box {
                display: flex;
                justify-content: flex-start;
                > a {
                    width: 60px;
                    height: 34px;
                }
            }
        }
    }
}
.tab-active {
    box-sizing: border-box;
    background-color: #00a1d6;
    color: #fff !important;
    padding: 4px 10px;
    border-radius: 12px;
}
</style>