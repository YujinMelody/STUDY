<template>
    <div class="ranking">
        <div
            v-for="(v, index) in recomVideoList.list"
            :key="index"
            class="rank"
        >
            <div class="rank-count">{{ index + 1 }}</div>
            <!-- 排名第一的使用有图片的显示效果 -->
            <div v-show="index == 0" class="rank-video-card">
                <a :href="v.target">
                    <img :src="v.img" alt="" />
                </a>
                <div class="rank-video-title">
                    <a :href="v.target" class="active-blue">
                        {{ v.title }}
                    </a>
                </div>
                <div v-show="0">稍后观看</div>
            </div>
            <!-- 排名第一的不显示这个标题地址 -->
            <a :href="v.target" class="rank-a active-blue" v-show="index !== 0">
                <div class="rank-title">{{ v.title }}</div>
                <!-- <div class="rank-info">{{ v.info }}</div> -->
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Ranking",
    data() {
        return {
            recomVideoList: {},
        };
    },
    mounted() {
        async function getRank(callback) {
            try {
                let x = await axios.get("http://localhost:3000/gApi/rank");
                setTimeout(() => {
                    callback(x);
                });
            } catch (err) {
                console.log(err);
            }
        }
        getRank((x) => {
            this.$set(this.recomVideoList, "list", x.data[0].content);
        });
    },
};
</script>

<style lang="less" scoped>
.ranking {
    .rank:not(:last-child) {
        margin-bottom: 18px;
    }
    .rank {
        display: flex;
        justify-content: space-between;

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
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 20px;
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
            .rank-title {
                margin-left: 12px;
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 20px;
            }
        }
    }
    .rank:first-child .rank-video-title {
        white-space: normal !important;
    }
    .rank:nth-child(n + 5) .rank-count {
        background-color: transparent;
        color: #999999;
    }
}
</style>