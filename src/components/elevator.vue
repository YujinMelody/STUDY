<template>
    <div ref="elevator" class="elevator" style="top: 423px">
        <div class="mask"></div>
        <div class="list-box">
            <div ref="item">
                <div class="item sortable" @click="to(0)">直播</div>
                <div class="item sortable" @click="to(1)">动画</div>
                <div class="item sortable" @click="to(2)">番剧</div>
                <div class="item sortable" @click="to(3)">国创</div>
                <div class="item sortable" @click="to(4)">音乐</div>
                <div class="item sortable" @click="to(5)">舞蹈</div>
                <div class="item sortable" @click="to(6)">游戏</div>
                <div class="item sortable" @click="to(7)">知识</div>
                <div class="item sortable" @click="to(8)">课堂</div>
                <div class="item sortable" @click="to(9)">科技</div>
                <div class="item sortable" @click="to(10)">运动</div>
                <div class="item sortable" @click="to(11)">汽车</div>
                <div class="item sortable" @click="to(12)">生活</div>
                <div class="item sortable" @click="to(13)">美食</div>
                <div class="item sortable" @click="to(14)">动物圈</div>
                <div class="item sortable" @click="to(15)">鬼畜</div>
                <div class="item sortable" @click="to(16)">时尚</div>
                <div class="item sortable" @click="to(17)">资讯</div>
                <div class="item sortable" @click="to(18)">娱乐</div>
                <div class="item sortable" @click="to(19)">专栏</div>
                <div class="item sortable" @click="to(20)">电影</div>
                <div class="item sortable" @click="to(21)">TV剧</div>
                <div class="item sortable" @click="to(22)">影视</div>
                <div class="item sortable" @click="to(23)">纪录片</div>
            </div>
            <div class="item back-top" @click="backToTop">
                <i class="fa-solid fa-angle-up"></i>
            </div>
        </div>
        <div class="bg23"></div>
    </div>
</template>

<script>
import throttle from "lodash/throttle";
import once from "lodash/once";
import common from "@/common";
export default {
    name: "Elevator",
    data() {
        return {
            elevatorState: 0,
            index: 0,
            // 用来记录change执行的状态，防止反复执行change
            // 也可以不需要做这个判断，因为改变class的函数有样式检查，但是如果是该内联样式，就会需要
            changeState: 0,
        };
    },
    methods: {
        backToTop() {
            scroll(0, 0);
            this.change(0);
        },

        change(i) {
            console.log("scroll!!!");
            common.removeClassName(this.$refs.item.children[this.index], "on");
            common.addClass(this.$refs.item.children[i], "on");
            this.index = i;
        },
        to(count) {
            switch (count) {
                case 0:
                    scroll(0, 860 + count * 496);
                    this.change(count);
                    break;
                case 1:
                    scroll(0, 860 + count * 496);
                    break;
                case 2:
                    scroll(0, 860 + count * 496);
                    break;
                case 3:
                    scroll(0, 860 + (count + 1) * 496);

                    break;
                case 4:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 5:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 6:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 7:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 8:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 9:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 10:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 11:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 12:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 13:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 14:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 15:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 16:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 17:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 18:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 19:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 20:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 21:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 22:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
                case 23:
                    scroll(0, 860 + (count + 2) * 496);

                    break;
            }
        },
    },
    mounted() {
        // 切换样式函数
        const change = function (i) {
            console.log("1111111111");
            common.removeClassName(this.$refs.item.children[this.index], "on");
            common.addClass(this.$refs.item.children[i], "on");
            this.index = i;
        }.bind(this);
        // 判断页面位置的函数并节流
        const tChange = throttle(() => {
            if (
                document.documentElement.scrollTop < 858 + 496 &&
                this.elevatorState == 1 &&
                this.changeState != 0
            ) {
                this.$refs.elevator.style.top = "423px";
                common.addClass(this.$refs.item.children[0], "on");
                common.removeClassName(
                    this.$refs.item.children[this.index],
                    "on"
                );
                this.index = 0;
                this.changeState = 0;
            }
            //起步
            if (document.documentElement.scrollTop > 858) {
                if (this.elevatorState == 0) {
                    this.$refs.elevator.style.top = "333px";
                    common.addClass(this.$refs.item.children[0], "on");
                    this.elevatorState = 1;
                }
                if (this.elevatorState == 1) {
                    if (
                        document.documentElement.scrollTop > 858 + 1 * 496 &&
                        document.documentElement.scrollTop < 858 + 2 * 496 &&
                        this.changeState != 1
                    ) {
                        change(1);
                        this.changeState = 1;
                    } else if (
                        document.documentElement.scrollTop > 858 + 2 * 496 &&
                        document.documentElement.scrollTop < 858 + 4 * 496 &&
                        this.changeState != 2
                    ) {
                        change(2);
                        this.changeState = 2;
                    } else if (
                        document.documentElement.scrollTop > 858 + 4 * 496 &&
                        document.documentElement.scrollTop < 858 + 6 * 496 &&
                        this.changeState != 3
                    ) {
                        change(3);
                        this.changeState = 3;
                    } else if (
                        document.documentElement.scrollTop > 858 + 6 * 496 &&
                        document.documentElement.scrollTop < 858 + 7 * 496 &&
                        this.changeState != 4
                    ) {
                        change(4);
                        this.changeState = 4;
                    } else if (
                        document.documentElement.scrollTop > 858 + 7 * 496 &&
                        document.documentElement.scrollTop < 858 + 8 * 496 &&
                        this.changeState != 5
                    ) {
                        change(5);
                        this.changeState = 5;
                    } else if (
                        document.documentElement.scrollTop > 858 + 8 * 496 &&
                        document.documentElement.scrollTop < 858 + 9 * 496 &&
                        this.changeState != 6
                    ) {
                        change(6);
                        this.changeState = 6;
                    } else if (
                        document.documentElement.scrollTop > 858 + 9 * 496 &&
                        document.documentElement.scrollTop < 858 + 10 * 496 &&
                        this.changeState != 7
                    ) {
                        change(7);
                        this.changeState = 7;
                    } else if (
                        document.documentElement.scrollTop > 858 + 10 * 496 &&
                        document.documentElement.scrollTop < 858 + 11 * 496 &&
                        this.changeState != 8
                    ) {
                        change(8);
                        this.changeState = 8;
                    } else if (
                        document.documentElement.scrollTop > 858 + 11 * 496 &&
                        document.documentElement.scrollTop < 858 + 12 * 496 &&
                        this.changeState != 9
                    ) {
                        change(9);
                        this.changeState = 9;
                    } else if (
                        document.documentElement.scrollTop > 858 + 12 * 496 &&
                        document.documentElement.scrollTop < 858 + 13 * 496 &&
                        this.changeState != 10
                    ) {
                        change(10);
                        this.changeState = 10;
                    } else if (
                        document.documentElement.scrollTop > 858 + 13 * 496 &&
                        document.documentElement.scrollTop < 858 + 14 * 496 &&
                        this.changeState != 11
                    ) {
                        change(11);
                        this.changeState = 11;
                    } else if (
                        document.documentElement.scrollTop > 858 + 14 * 496 &&
                        document.documentElement.scrollTop < 858 + 15 * 496 &&
                        this.changeState != 12
                    ) {
                        change(12);
                        this.changeState = 12;
                    } else if (
                        document.documentElement.scrollTop > 858 + 15 * 496 &&
                        document.documentElement.scrollTop < 858 + 16 * 496 &&
                        this.changeState != 13
                    ) {
                        change(13);
                        this.changeState = 13;
                    } else if (
                        document.documentElement.scrollTop > 858 + 16 * 496 &&
                        document.documentElement.scrollTop < 858 + 17 * 496 &&
                        this.changeState != 14
                    ) {
                        change(14);
                        this.changeState = 14;
                    } else if (
                        document.documentElement.scrollTop > 858 + 17 * 496 &&
                        document.documentElement.scrollTop < 858 + 18 * 496 &&
                        this.changeState != 15
                    ) {
                        change(15);
                        this.changeState = 15;
                    } else if (
                        document.documentElement.scrollTop > 858 + 18 * 496 &&
                        document.documentElement.scrollTop < 858 + 19 * 496 &&
                        this.changeState != 16
                    ) {
                        change(16);
                        this.changeState = 16;
                    } else if (
                        document.documentElement.scrollTop > 858 + 19 * 496 &&
                        document.documentElement.scrollTop < 858 + 20 * 496 &&
                        this.changeState != 17
                    ) {
                        change(17);
                        this.changeState = 17;
                    } else if (
                        document.documentElement.scrollTop > 858 + 20 * 496 &&
                        document.documentElement.scrollTop < 858 + 21 * 496 &&
                        this.changeState != 18
                    ) {
                        change(18);
                        this.changeState = 18;
                    } else if (
                        document.documentElement.scrollTop > 858 + 21 * 496 &&
                        document.documentElement.scrollTop < 858 + 22 * 496 &&
                        this.changeState != 19
                    ) {
                        change(19);
                        this.changeState = 19;
                    } else if (
                        document.documentElement.scrollTop > 858 + 22 * 496 &&
                        document.documentElement.scrollTop < 858 + 23 * 496 &&
                        this.changeState != 20
                    ) {
                        change(20);
                        this.changeState = 20;
                    } else if (
                        document.documentElement.scrollTop > 858 + 23 * 496 &&
                        document.documentElement.scrollTop < 858 + 24 * 496 &&
                        this.changeState != 21
                    ) {
                        change(21);
                        this.changeState = 21;
                    } else if (
                        document.documentElement.scrollTop > 858 + 24 * 496 &&
                        document.documentElement.scrollTop < 858 + 25 * 496 &&
                        this.changeState != 22
                    ) {
                        change(22);
                        this.changeState = 22;
                    } else if (
                        document.documentElement.scrollTop > 858 + 25 * 496 &&
                        document.documentElement.scrollTop < 858 + 26 * 496 &&
                        this.changeState != 23
                    ) {
                        change(23);
                        this.changeState = 23;
                    }
                }
            }
        }, 70).bind(this);
        //绑定事件
        addEventListener("scroll", () => {
            tChange();
        });
    },
};
</script>

<style lang="less" scoped>
.elevator {
    position: fixed;
    left: calc(50% + 3px);
    top: 10px;
    margin-left: 825px;
    z-index: 10;
    .list-box {
        padding-top: 6px;
        position: relative;
        background: #fff;
        border: 1px solid #e7e7e7;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 2;
        .item {
            width: 54px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            user-select: none;
            background: #fff;
            font-size: 12px;
            &:hover:not(.on) {
                background-color: #00a1d6;
                color: #fff;
                transition: all 0.2s;
            }
        }
        .on {
            background-color: #00a1d6;
            color: #fff;
        }
        .back-top {
            font-size: 16px;
        }
    }
}
</style>