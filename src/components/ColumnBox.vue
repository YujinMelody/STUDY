<template>
    <div class="column-box warp">
        <div class="left-report-box">
            <div class="g-title content-title">
                <div>
                    <slot name="columnIcon"></slot>
                    <p><slot name="columnName"></slot></p>
                </div>
                <div>
                    <div class="change-btn" @click="change" v-show="!btn">
                        <i class="fa-solid fa-rotate"></i> 换一换
                    </div>
                    <a :href="moreAddress" class="more-btn" v-show="!btn">
                        更多<i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div class="g-box">
                <VideoCardG
                    v-for="item in this.videoList.video"
                    :key="item.id"
                    :title="item.title"
                    :up="item.up"
                    :showImg="item.img"
                    :address="item.address"
                ></VideoCardG>
            </div>
        </div>
        <div class="right-report-box">
            <header class="header" v-show="titleState">
                <span><slot name="right-box-title"></slot></span>
                <a class="active-sliver" v-show="1 && !moreState">
                    更多
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </header>
            <slot name="rank-type"></slot>
        </div>
    </div>
</template>

<script>
import VideoCardG from "@/components/VideoCardG.vue";
import axios from "axios";
axios.defaults.timeout = 1000;
export default {
    name: "ColumnBox",
    components: {
        VideoCardG,
    },
    props: ["titleState", "moreState", "moreAddress", "changeInfo", "btn"],
    data() {
        return {
            videoList: {
                video: [],
            },
        };
    },
    methods: {
        change() {
            axios
                .get(`http://localhost:3000/gApi/change/${this.changeInfo}`)
                .then(
                    (value) => {
                        this.$set(this.videoList, "video", value.data);
                    },
                    (reason) => {
                        console.log(reason);
                    }
                );
        },
    },
    mounted() {
        async function first() {
            try {
                let x = await axios.get(
                    `http://localhost:3000/gApi/first/${this.changeInfo}`
                );
                this.$set(this.videoList, "video", x.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (this.changeInfo) {
            first.call(this);
        }
    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1438px) {
    .g-box {
        height: 360px !important;
    }
}
.column-box {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    .g-title {
        height: 36px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;

        & div:not(.content-title) {
            display: flex;
            align-items: center;

            & a {
                display: flex;
                align-items: center;
            }
        }
        .change-btn {
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 6px 0 6px;
            width: 72px;
            cursor: pointer;
            height: 22px;
            border: 1px solid silver;
            border-radius: 2px;
            font-size: 12px;
            color: #505050;
            line-height: 16px;
            & i {
                transition: 0.7s;
                font-size: 14px;
                display: inline-block;
                text-align: center;
            }
            &:hover i {
                transform: rotate(1turn);
                transition: all 0.7s;
            }
            &:hover {
                background-color: #f4f4f4;
            }
        }
        .more-btn {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0 12px;
            width: 58px;
            margin-left: 12px;
            cursor: pointer;
            height: 22px;
            text-align: center;
            border: 1px solid silver;
            border-radius: 2px;
            font-size: 12px;
            color: #505050;
            transition: all 0.2s;
            line-height: 16px;
            & i {
                width: 16px;
                display: inline-block;
            }
            &:hover {
                background-color: #f4f4f4;
                transition: all 0.2s;
            }
        }
    }

    .g-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        height: 404px;
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
}
</style>