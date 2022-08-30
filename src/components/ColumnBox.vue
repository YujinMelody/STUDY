<template>
    <div class="column-box warp">
        <div class="left-report-box">
            <div class="g-title content-title">
                <slot name="columnIcon"></slot>
                <p><slot name="columnName"></slot></p>
            </div>
            <div class="g-box">
                <VideoCardG></VideoCardG>
                <VideoCardG></VideoCardG>
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
export default {
    name: "ColumnBox",
    components: {
        VideoCardG,
    },
    props: ["titleState", "moreState"],
};
</script>

<style lang="less">
.column-box {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    .g-title {
        height: 36px;
        margin-bottom: 16px;
        display: flex;

        & div:not(.content-title) {
            display: flex;
            align-items: center;

            & a {
                display: flex;
                align-items: center;
            }
        }
    }

    .g-box {
        display: flex;
        justify-content: space-between;
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