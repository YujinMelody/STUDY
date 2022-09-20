<template>
    <div class="user-collection">
        <div class="tab-column" ref="tablist">
            <div
                class="hover-sliver tab-btn active-tab"
                :index="0"
                @click="changeTab"
            >
                <span class="c-name">默认收藏夹</span>
                <span class="c-count">{{
                    clist.list["collection0"].content.length
                }}</span>
            </div>
            <div
                v-for="(item, i) in clist.namelist"
                :key="i"
                class="tab-btn hover-sliver"
                @click="changeTab"
                :index="i + 1"
            >
                <span class="c-name">{{ item }}</span>
                <span class="c-count">{{
                    clist.list[`collection${i + 1}`].content.length
                }}</span>
            </div>
        </div>
        <div class="content-box">
            <div class="box">
                <ul>
                    <li
                        v-for="(item, i) in clist.showlist.collection.content"
                        :key="i"
                        class="trend"
                    >
                        <div class="left-box">
                            <a
                                :href="item.target"
                                class="photo"
                                :style="{ backgroundColor: item.photo }"
                            ></a>
                        </div>
                        <div class="center-box">
                            <a href="">{{ item.title }}</a>
                            <div class="info">{{ item.up }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="play-btn">
                <div class="check-all active-sliver">
                    <span>查看全部</span>
                </div>
                <div class="play-all active-sliver">
                    <!-- <i class="fa-solid fa-play"></i> -->
                    <span>播放全部</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/common";
import axios from "axios";
export default {
    name: "UserCollection",
    data() {
        return {
            index: 0,
            clist: {
                list: {
                    collection0: {
                        content: {},
                        username: "",
                    },
                },
                showlist: {
                    collection: {
                        content: {},
                        username: "",
                    },
                },
                namelist: [],
            },
        };
    },
    methods: {
        changeTab(event) {
            let token = localStorage.getItem("token");
            async function getCollection() {
                return await axios.post(
                    "http://localhost:3000/api/collections",
                    {
                        username: localStorage.getItem("user"),
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
            }
            //防止获得不到index
            if (common.checkClassName(event.target, "tab-btn")) {
                let index = event.target.getAttribute("index");
                let x = JSON.parse(localStorage.getItem(`collection${index}`));
                console.log(index);
                // 点击的是不同的按钮
                if (this.index != index) {
                    console.log("@@@@@");
                    common.addClass(event.target, "active-tab");
                    common.removeClassName(
                        this.$refs.tablist.children[this.index],
                        "active-tab"
                    );
                    this.index = index;
                    // 如果缓存过期
                    if (x && Date.now() / 1000 - x.overflow >= x.timeStamp) {
                        // 请求
                        getCollection().then(
                            (value) => {
                                for (
                                    let i = 0;
                                    i < value.data.list.length;
                                    i++
                                ) {
                                    this.clist.namelist.push(
                                        value.data.list[i]
                                    );
                                }
                                for (
                                    let i = 0;
                                    i < value.data.content.length;
                                    i++
                                ) {
                                    localStorage.setItem(
                                        "collection" + i,
                                        JSON.stringify({
                                            timeStamp: Date.now() / 1000,
                                            data: value.data.content[i],
                                            overflow: 60,
                                        })
                                    );
                                    this.$set(
                                        this.clist.list,
                                        "collection" + i,
                                        value.data.content[i]
                                    );
                                }
                                this.$set(
                                    this.clist.showlist,
                                    `collection`,
                                    value.data.content[index]
                                );
                            },
                            (reason) => {
                                console.log(reason);
                            }
                        );
                    }
                    // 如果没有过期就只读取缓存
                    else if (
                        x &&
                        Date.now() / 1000 - x.overflow < x.timeStamp
                    ) {
                        this.$set(
                            this.clist.showlist,
                            "collection",
                            JSON.parse(
                                localStorage.getItem(`collection${index}`)
                            ).data
                        );
                    }
                }
            }
            //如果点击的是子元素
            else {
                let pIndex = event.target.parentNode.getAttribute("index");
                if (this.index != pIndex) {
                    console.log("@@@@@");
                    common.addClass(event.target.parentNode, "active-tab");
                    common.removeClassName(
                        this.$refs.tablist.children[this.index],
                        "active-tab"
                    );
                    this.index = pIndex;
                    if (x && Date.now() / 1000 - x.overflow >= x.timeStamp) {
                        // 请求
                        getCollection().then(
                            (value) => {
                                for (
                                    let i = 0;
                                    i < value.data.list.length;
                                    i++
                                ) {
                                    this.clist.namelist.push(
                                        value.data.list[i]
                                    );
                                }
                                for (
                                    let i = 0;
                                    i < value.data.content.length;
                                    i++
                                ) {
                                    localStorage.setItem(
                                        "collection" + i,
                                        JSON.stringify({
                                            timeStamp: Date.now() / 1000,
                                            data: value.data.content[i],
                                            overflow: 60,
                                        })
                                    );
                                    this.$set(
                                        this.clist.list,
                                        "collection" + i,
                                        value.data.content[i]
                                    );
                                }
                                this.$set(
                                    this.clist.showlist,
                                    `collection`,
                                    value.data.content[pIndex]
                                );
                            },
                            (reason) => {
                                console.log(reason);
                            }
                        );
                    }
                    // 如果没有过期就只读取缓存
                    else if (
                        x &&
                        Date.now() / 1000 - x.overflow < x.timeStamp
                    ) {
                        this.$set(
                            this.clist.showlist,
                            "collection",
                            JSON.parse(
                                localStorage.getItem(`collection${pIndex}`)
                            ).data.content
                        );
                    }
                }
            }
        },
    },
    mounted() {
        let token = localStorage.getItem("token");
        async function getCollection() {
            return await axios.post(
                "http://localhost:3000/api/collections",
                {
                    username: localStorage.getItem("user"),
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        }
        getCollection().then(
            (value) => {
                console.log(value);
                for (let index = 0; index < value.data.list.length; index++) {
                    this.clist.namelist.push(value.data.list[index]);
                }
                for (
                    let index = 0;
                    index < value.data.content.length;
                    index++
                ) {
                    localStorage.setItem(
                        "collection" + index,
                        JSON.stringify({
                            timeStamp: Date.now() / 1000,
                            data: value.data.content[index],
                            overflow: 60,
                        })
                    );
                    this.$set(
                        this.clist.list,
                        "collection" + index,
                        value.data.content[index]
                    );
                }
                this.$set(
                    this.clist.showlist,
                    "collection",
                    value.data.content[0]
                );
            },
            (reason) => {
                console.log(reason);
            }
        );
    },
};
</script>

<style lang="less" scoped>
.hover-sliver:not(.active-tab):hover {
    background-color: #f4f4f4 !important;
    transition: background-color 0.3s;
}

//悬停样式（灰）
.hover-sliver {
    transition: background-color 0.3s;
}
.user-collection {
    display: flex;
    position: absolute;
    height: 518px;
    width: 519px;
    left: -250px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    .tab-column {
        box-sizing: border-box;
        width: 149px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #e7e7e7;
        padding: 12px 0;
        .tab-btn {
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
            .c-count {
                color: #999;
            }
        }
        .active-tab {
            background-color: #00a1d6;
            transition: all 0.3s;
            span {
                color: #fff !important;
            }
        }
    }
    .content-box {
        box-sizing: border-box;
        width: 370px;
        height: 100%;
        padding-top: 12px;
        .box {
            height: 460px;
            border-bottom: 1px solid #e7e7e7;
            box-sizing: border-box;
            overflow: hidden;
            overflow-y: auto;
            .trend {
                display: flex;
                padding: 11px 18px;

                .left-box {
                    display: flex;
                    width: 108px;
                    height: 61px;
                    justify-content: flex-start;
                    > a {
                        width: 100%;
                        height: 100%;
                    }
                }
                .center-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 0 11px;
                    .info {
                        line-height: 14px;
                        color: #505050;
                    }
                    > a {
                        line-height: 16px;
                        color: #212121;
                        width: 178px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
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
        .play-btn {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            height: 46px;
            padding: 0;
            margin: 0;
            vertical-align: top;
            align-items: center;
            .check-all {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
                cursor: pointer;
                span {
                    color: #333;
                }
            }
            .play-all {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
                border-left: 1px solid #e7e7e7;
                cursor: pointer;

                i {
                    margin-right: 10px;
                    font-size: 14px;
                    color: #00a1d6;
                }
                span {
                    color: #00a1d6;
                }
            }
        }
    }
}
</style>