<template>
    <div class="time-line warp">
        <div class="left-report-box">
            <div class="g-title content-title">
                <div class="titel-left">
                    <slot name="columnIcon"></slot>
                    <p><slot name="columnName"></slot></p>
                    <div class="time" ref="time">
                        <div
                            class="recent"
                            :class="{ 'on-day': 0 == checked }"
                            @click="change"
                        >
                            最近
                        </div>
                        <div
                            class="mon"
                            :class="{ 'on-day': 1 == checked }"
                            @click="change"
                        >
                            周一
                        </div>
                        <div
                            class="tues"
                            :class="{ 'on-day': 2 == checked }"
                            @click="change"
                        >
                            周二
                        </div>
                        <div
                            class="wed"
                            :class="{ 'on-day': 3 == checked }"
                            @click="change"
                        >
                            周三
                        </div>
                        <div
                            class="thur"
                            :class="{ 'on-day': 4 == checked }"
                            @click="change"
                        >
                            周四
                        </div>
                        <div
                            class="fri"
                            :class="{ 'on-day': 5 == checked }"
                            @click="change"
                        >
                            周五
                        </div>
                        <div
                            class="sat"
                            :class="{ 'on-day': 6 == checked }"
                            @click="change"
                        >
                            周六
                        </div>
                        <div
                            class="sun"
                            :class="{ 'on-day': 7 == checked }"
                            @click="change"
                        >
                            周日
                        </div>
                    </div>
                </div>
                <a
                    class="timelineGrid"
                    href="https://www.bilibili.com/guochuang/timeline/?spm_id_from=333.851.b_62696c695f7265706f72745f67756f636875616e67.2"
                >
                    <span>新番时间表</span>
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
            <div class="g-box timeline-box">
                <div class="tl-content-box">
                    <div
                        class="time-line-card"
                        v-for="(item, index) in appear"
                        :key="index"
                    >
                        <a href="">
                            <div class="time-line-img"></div>
                        </a>
                        <div class="time-line-info">
                            <a href="" class="active-blue">{{ item.title }}</a>
                            <a href="">{{ item.info }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-report-box">
            <header class="header" v-show="titleState">
                <span><slot name="right-box-title"></slot></span>
                <a class="active-sliver">
                    更多
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </header>
            <slot name="rank-type"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeLine",
    data() {
        return {
            checked: 0,
            // accept: {
            //     recent: [
            //         { title: "黑之召唤士", info: "第8话" },
            //         {
            //             title: "Love All Paly热血羽毛球/羽球青春",
            //             info: "第15话",
            //         },
            //         {
            //             title: "德凯奥特曼",
            //             info: "第7话",
            //         },
            //         {
            //             title: "德凯奥特曼（中配）",
            //             info: "第7话",
            //         },
            //         {
            //             title: "勇者斗恶龙 达伊的大冒险",
            //             info: "第83话",
            //         },
            //         { title: "团团奇米莫", info: "06A~08B" },
            //         {
            //             title: "测不准的阿波连同学 中配版",
            //             info: "第11话~第12话",
            //         },
            //         {
            //             title: "新干线变形机器人 辛卡利欧Z / 进化利恩 极",
            //             info: "第14话",
            //         },
            //         {
            //             title: "幕末替身传说",
            //             info: "第8话",
            //         },
            //         {
            //             title: "惑星公主蜥蜴骑士",
            //             info: "第14话",
            //         },
            //         { title: "夏日重现", info: "第16话" },
            //         { title: "新 东京猫猫", info: "第8话" },
            //         { title: "相合之物", info: "第11话" },
            //         { title: "小林家的龙女仆 第二季 中配版", info: "第9话" },
            //         { title: "歌愈少女", info: "第11话" },
            //     ],
            //     mon: [
            //         { title: "小林家的龙女仆 第二季 中配版", info: "第9话" },
            //         { title: "歌愈少女", info: "第11话" },
            //     ],
            //     tues: [{ title: "东方少女 第二季", info: "第7话" }],
            //     wed: [
            //         { title: "新 东京猫猫", info: "第8话" },
            //         { title: "相合之物", info: "第11话" },
            //     ],
            //     thur: [{ title: "夏日重现", info: "第16话" }],
            //     fri: [
            //         { title: "团团奇米莫", info: "06A~08B" },
            //         {
            //             title: "测不准的阿波连同学 中配版",
            //             info: "第11话~第12话",
            //         },
            //         {
            //             title: "新干线变形机器人 辛卡利欧Z / 进化利恩 极",
            //             info: "第14话",
            //         },
            //         {
            //             title: "幕末替身传说",
            //             info: "第8话",
            //         },
            //         {
            //             title: "惑星公主蜥蜴骑士",
            //             info: "第14话",
            //         },
            //     ],
            //     sat: [
            //         {
            //             title: "勇者斗恶龙 达伊的大冒险",
            //             info: "第83话",
            //         },
            //         {
            //             title: "德凯奥特曼",
            //             info: "第7话",
            //         },
            //         {
            //             title: "德凯奥特曼（中配）",
            //             info: "第7话",
            //         },
            //         {
            //             title: "Love All Paly热血羽毛球/羽球青春",
            //             info: "第15话",
            //         },
            //         {
            //             title: "黑之召唤士",
            //             info: "第8话",
            //         },
            //     ],
            //     sun: [
            //         {
            //             title: "鲁邦三世",
            //             info: "第19话",
            //         },
            //         {
            //             title: "博人传 火影忍者新时代",
            //             info: "第255话",
            //         },
            //     ],
            // },
        };
    },
    props: ["accept", "titleState"],
    computed: {
        appear() {
            switch (this.checked) {
                case 0:
                    return this.accept.recent;
                case 1:
                    return this.accept.mon;
                case 2:
                    return this.accept.tues;
                case 3:
                    return this.accept.wed;
                case 4:
                    return this.accept.thur;
                case 5:
                    return this.accept.fri;
                case 6:
                    return this.accept.sat;
                case 7:
                    return this.accept.sun;
            }
        },
    },
    methods: {
        change(target) {
            switch (target.target.className) {
                case "recent":
                    this.checked = 0;
                    break;
                case "mon":
                    this.checked = 1;
                    break;
                case "tues":
                    this.checked = 2;
                    break;
                case "wed":
                    this.checked = 3;
                    break;
                case "thur":
                    this.checked = 4;
                    break;
                case "fri":
                    this.checked = 5;
                    break;
                case "sat":
                    this.checked = 6;
                    break;
                case "sun":
                    this.checked = 7;
                    break;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.on-day {
    border-bottom: 1px solid #00a1d6;
}
.timeline-box {
    overflow-y: auto;
    overflow-x: hidden;
}
.time-line {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    height: 456px;
    .content-title {
        position: relative;
        height: 36px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        .timelineGrid {
            &:hover {
                background-color: #00a1d6;
                color: #fff;
                transition: all 0.2s;
            }
            & i {
                margin-top: 1px;
                margin-left: 4px;
            }
            span {
                height: 14px;
                line-height: 14px;
            }
            display: flex;
            align-items: center;
            width: 112px;
            box-sizing: border-box;
            padding-left: 14px;
            height: 30px;
            border: 1px solid #00a1d6;
            border-radius: 2px;
            text-align: center;
            transition: all 0.2s;
            font-size: 14px;
            color: #00a1d6;
        }
        .time {
            margin-left: 4px;
            & div {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                margin-right: 24px;
                cursor: pointer;
            }
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
    .tl-content-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 376px;
        .time-line-card {
            width: 227px;
            height: 70px;
            display: flex;
            justify-content: space-between;
            margin: 0 20px 24px 0;
            & > a {
                margin-right: 12px;
            }
        }
    }
    .time-line-img {
        width: 70px;
        height: 70px;
        background-color: #00a1d6;
        border-radius: 2px;
        display: flex;
    }
    .time-line-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 145px;
    }
    .time-line-info a:first-child {
        font-size: 14px;
        height: 37px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 2px 0 12px;
    }
    .time-line-info a:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #00a1d6;
    }
}
.header {
    display: flex;
    margin-bottom: 16px;
    height: 36px;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 20px;
        color: #212121;
        line-height: 28px;
    }
    a {
        width: 58px;
        height: 22px;
        border: 1px solid silver;
        border-radius: 2px;
        box-sizing: border-box;
        padding-left: 12px;
        display: flex;
        align-items: center;
        line-height: 16px;
        cursor: pointer;
        //取消文字选择
        & i {
            display: block;
            height: 16px;
            width: 16px;
            line-height: 16px;
            text-align: center;
        }
    }
}
</style>