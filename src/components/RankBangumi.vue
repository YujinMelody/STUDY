<template>
    <div class="time-rank">
        <div v-for="(v, index) in recomVideoList" :key="v.id" class="rank">
            <div class="rank-count">{{ index + 1 }}</div>
            <a :href="v.address" class="rank-a active-blue">
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
                {
                    id: nanoid(),
                    title: "相合之物",
                    address: "",
                    info: "更新至第五话",
                },
                {
                    id: nanoid(),
                    title: "名侦探柯南",
                    address: "",
                    info: "更新至第五话",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.time-rank {
    .rank {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;
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