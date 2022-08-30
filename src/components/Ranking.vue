<template>
    <div class="ranking">
        <!-- <header>
            <span>排行榜</span>
            <a class="active-sliver">
                更多
                <i class="fa-solid fa-angle-right"></i>
            </a>
        </header> -->
        <div v-for="(v, index) in recomVideoList" :key="v.id" class="rank">
            <div class="rank-count">{{ index + 1 }}</div>
            <!-- 排名第一的使用有图片的显示效果 -->
            <div v-show="index == 0" class="rank-video-card">
                <a :href="v.address">
                    <img src="../assets/example/example-rank-img.webp" alt="" />
                </a>
                <div class="rank-video-title">
                    <a :href="v.address" class="active-blue">
                        我居然算出了光头强砍了多少棵树
                        ？？【全网最细，不细抽我】
                    </a>
                </div>
                <div v-show="0">稍后观看</div>
            </div>
            <!-- 排名第一的不显示这个标题地址 -->
            <a
                :href="v.address"
                class="rank-a active-blue"
                v-show="index !== 0"
            >
                <div class="rank-title">{{ v.title }}</div>
                <div class="rank-info">{{ v.info }}</div>
            </a>
        </div>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
    name: "Ranking",
    data() {
        return {
            recomVideoList: [
                {
                    id: nanoid(),
                    title: "夏日重现",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "黑之召唤士",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "德凯奥特曼",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "式守同学不只可爱而已",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "幕末替身传说",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "东方少年 第二季",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "JOJO的奇妙冒险 石之海",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "间谍过家家",
                    address: "",
                    info: "更新至第五话",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.ranking {
    // header {
    //     display: flex;
    //     margin-bottom: 16px;
    //     height: 36px;
    //     justify-content: space-between;
    //     align-items: center;
    //     span {
    //         font-size: 20px;
    //         color: #212121;
    //         line-height: 28px;
    //     }
    //     a {
    //         width: 58px;
    //         height: 22px;
    //         border: 1px solid silver;
    //         border-radius: 2px;
    //         box-sizing: border-box;
    //         padding-left: 12px;
    //         display: flex;
    //         align-items: center;
    //         line-height: 16px;
    //         cursor: pointer;
    //         //取消文字选择
    //         & i {
    //             display: block;
    //             height: 16px;
    //             width: 16px;
    //             line-height: 16px;
    //             text-align: center;
    //         }
    //     }
    // }
    .rank {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;
        .rank-video-card {
            width: 119px;
            display: flex;
            width: 290px;
            & img {
                width: 112px;
                height: 63px;
                border-radius: 2px;
            }
            .rank-video-title {
                margin-left: 12px;
                font-size: 14px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                line-height: 21px;
            }
        }
        .rank-count {
            background-color: #00a1d6;
            height: 16px;
            width: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            line-height: 16px;
        }
        & .rank-a {
            width: 290px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            .rank-info {
                color: #999999;
                font-size: 12px;
            }
        }
    }
    .rank:nth-child(n + 5) .rank-count {
        background-color: transparent;
        color: #999999;
    }
}
</style>