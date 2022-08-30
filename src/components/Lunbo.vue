<template>
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
        <a
            :href="lunboData[nowIndex].target"
            class="lunbo-more"
            ref="more"
            @mouseenter="pauseLunbo"
            @mouseleave="startLunbo"
        >
            更多
            <i class="fa-solid fa-angle-right"></i>
        </a>
    </div>
</template>

<script>
import common from "@/common.js";
export default {
    name: "Lunbo",
    props: ["lunboData"],
    data() {
        return {
            // lunboData: [
            //     {
            //         path: require("@/assets/main-lunbo-img/lunbo1.webp"),
            //         target: "1",
            //         info: "全都秒了",
            //     },
            //     {
            //         path: require("@/assets/main-lunbo-img/lunbo2.png"),
            //         target: "2",
            //         info: "凡人修仙传",
            //     },
            //     {
            //         path: require("@/assets/main-lunbo-img/lunbo3.webp"),
            //         target: "3",
            //         info: "不是吧这都能换到！",
            //     },
            //     {
            //         path: require("@/assets/main-lunbo-img/lunbo4.webp"),
            //         target: "4",
            //         info: "这个杀手不需要改需求",
            //     },
            //     {
            //         path: require("@/assets/main-lunbo-img/lunbo5.webp"),
            //         target: "5",
            //         info: "用图片上首页",
            //     },
            // ],
            n: 0,
            timer: null,
            classNameStr: "lunbo-item",
        };
    },
    computed: {
        // consLunboData() {
        //     this.buffer = this.lunboData;
        //     this.buffer.push(this.lunboData[0]);
        //     //push返回的是length
        //     return this.buffer;
        // },
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
    },
    methods: {
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
                    this.elemList[0].style.transform = "translateX(-459px)";
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
                        this.elemList[0].style.transform = "translateX(-459px)";
                        common.toggleClass(
                            this.indexList[this.n % timeCount],
                            "on-index"
                        );
                    } else if (this.n % timeCount < timeCount - 1) {
                        // 写动画
                        this.elemList[this.preIndex].style.transition = "none";
                        this.elemList[this.nextIndex].style.zIndex =
                            zIndexCount + this.n + 2;
                        this.elemList[this.nextIndex].style.transition =
                            "transform 0.6s";
                        //写位置
                        this.elemList[this.preIndex].style.transform =
                            "translateX(459px)";
                        this.elemList[this.nextIndex].style.transform =
                            "translateX(0px)";
                        this.elemList[this.n % timeCount].style.transform =
                            "translateX(-459px)";
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
                            zIndexCount + this.n + 2;
                        this.elemList[0].style.transition = "transform 0.6s";
                        // 写位置
                        this.elemList[this.preIndex].style.transform =
                            "translateX(459px)";
                        this.elemList[0].style.transform = "translateX(0px)";
                        this.elemList[this.n % timeCount].style.transform =
                            "translateX(-459px)";

                        common.toggleClass(
                            this.indexList[this.n % timeCount],
                            "on-index"
                        );
                    }
                    // if (this.n % timeCount == timeCount - 1) {
                    //     for (let i = 1; i < this.elemList.length; i++) {
                    //         this.elemList[i].className =
                    //             this.classNameStr + " " + "ready";
                    //     }
                    // }
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
        changeIndex(target) {
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
                    // for (let index = 0; index < this.elemList.length; index++) {
                    // if (index !== eCount) {
                    this.elemList[eCount].style.transform =
                        "translateX(-495px)";
                    this.elemList[eCount].style.transition = "none";
                    // }
                    // }
                    //防止动画出错
                    setTimeout(() => {
                        this.elemList[eCount].style.transition =
                            "transform 0.6s";
                        this.elemList[this.nowIndex].style.transform =
                            "translateX(495px)";
                        this.elemList[eCount].style.transform = "translateX(0)";
                        this.elemList[eCount].style.zIndex =
                            zIndexCount + this.n + 2;
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
                                "translateX(459px)";
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
                        zIndexCount + this.n + 2;
                    this.elemList[eCount].style.transition = "transform 0.6s ";
                    this.elemList[this.nowIndex].style.transition =
                        "transform 0.6s";
                    this.elemList[eCount].style.transform = "translateX(0)";
                    this.elemList[this.nowIndex].style.transform =
                        "translateX(-495px)";
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
                            "translateX(459px)";
                    }
                    //解决边界问题
                    if (this.nowIndex == 0 && eCount == 3) {
                        this.elemList[timeCount - 1].style.transition = "none";
                        this.elemList[timeCount - 1].style.transform =
                            "translateX(459px)";
                    }
                    this.n += eCount - this.nowIndex;
                    //解决回退动画消失
                    setTimeout(() => {
                        this.elemList[bu].style.transition = "none";
                        this.elemList[bu].style.transform = "translateX(459px)";
                        // 解决跳过后导致一部分图片没有回到正确位置
                    }, 300);
                }
            }
            this.lunbo();
            ///===============================================
        },
        pauseLunbo() {
            clearInterval(this.timer);
            this.$refs.more.style.opacity = 1;
        },
        startLunbo() {
            this.lunbo();
            this.$refs.more.style.opacity = 0;
        },
    },
    mounted() {
        let zIndexCount = 150;
        // let elemList = this.$refs.lunbo.children;
        // let indexList = this.$refs.index.children;
        for (let i = 0; i < this.elemList.length; i++) {
            if (i == 0) {
                // elemList[i].className += " enter";
                // elemList[i].style.left = "0px";
                this.elemList[i].style.transform = "translateX(0px)";
                this.elemList[i].style.zIndex = zIndexCount;
            }
            if (i !== 0) {
                this.elemList[i].style.transform = "translateX(459px)";
                this.elemList[i].style.zIndex = zIndexCount - 1;
            }
        }
        common.toggleClass(this.indexList[0], "on-index");
        this.lunbo();
        //======================修改样式=======================
        // this.timer = setInterval(() => {
        //     //设定其实的状态
        //     if (this.n == 0) {
        //         this.elemList[0].className = this.classNameStr + " " + "out";
        //         this.elemList[1].className = this.classNameStr + " " + "show";
        //         common.toggleClass(this.indexList[0], "on-index");
        //         common.toggleClass(this.indexList[1], "on-index");
        //     } else {
        //         //当轮播图回到第一张时
        //         if (this.n % timeCount == 0) {
        //             this.elemList[timeCount - 1].className =
        //                 this.classNameStr + " " + "ready";
        //             this.elemList[0].className =
        //                 this.classNameStr + " " + "out";
        //             this.elemList[1].className =
        //                 this.classNameStr + " " + "show";
        //             common.toggleClass(
        //                 this.indexList[this.n % timeCount],
        //                 "on-index"
        //             );
        //         } else if (this.n % timeCount < timeCount - 1) {
        //             this.elemList[this.preIndex].className =
        //                 this.classNameStr + " " + "ready";
        //             this.elemList[this.n % timeCount].className =
        //                 this.classNameStr + " " + "out";
        //             this.elemList[this.nextIndex].className =
        //                 this.classNameStr + " " + "show";
        //             common.toggleClass(
        //                 this.indexList[this.n % timeCount],
        //                 "on-index"
        //             );
        //         }
        //         //显示最后一张时
        //         else if (this.n % timeCount == timeCount - 1) {
        //             this.elemList[this.preIndex].className =
        //                 this.classNameStr + " " + "ready";
        //             this.elemList[this.n % timeCount].className =
        //                 this.classNameStr + " " + "out";
        //             this.elemList[0].className =
        //                 this.classNameStr + " " + "show";
        //             common.toggleClass(
        //                 this.indexList[this.n % timeCount],
        //                 "on-index"
        //             );
        //         }
        //         // if (this.n % timeCount == timeCount - 1) {
        //         //     for (let i = 1; i < this.elemList.length; i++) {
        //         //         this.elemList[i].className =
        //         //             this.classNameStr + " " + "ready";
        //         //     }
        //         // }
        //         if (this.n % timeCount == timeCount - 1) {
        //             common.toggleClass(this.indexList[0], "on-index");
        //         } else {
        //             common.toggleClass(
        //                 this.indexList[(this.n % timeCount) + 1],
        //                 "on-index"
        //             );
        //         }
        //     }
        //     console.log(this.n);
        //     this.n++;
        // }, 2000);
    },
};
</script>

<style lang="less" scoped>
// @media screen and (max-width: 1438px) {
//     .lunbo-item a img {
//         width: 459px !important;
//     }
// .out {
//     transform: translateX(-459px) !important;
//     transition: left 0.5s;
//     z-index: 260;
// }
// .show {
//     transform: translateX(0) !important;
//     transition: left 0.5s;
//     z-index: 250;
// }
// .ready {
//     transform: translateX(459px) !important;
//     transition: left 0.5s;
//     z-index: 240;
// }
// .out-click {
//     transform: translateX(-459px) !important;
//     z-index: 260;
// }
// }
// .out-click {
//     transform: translateX(-550px);
//     z-index: 260;
// }
// .out {
//     transform: translateX(-550px);
//     transition: transform 0.5s;
// }
// .show {
//     transform: translateX(0);
//     transition: transform 0.5s;
// }
// .ready {
//     transform: translateX(550px);
//     // transition: transform 0.5s;
// }
// .ready-animation {
//     transform: translateX(550px);
//     transition: transform 0.5s;
// }

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
    width: 100%;
    height: 100%;
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
                bottom: 10px;
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
</style>