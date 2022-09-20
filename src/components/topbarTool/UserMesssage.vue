<template>
    <div class="user-notice" v-show="loginState">
        <div class="not-triangle"></div>
        <div class="reply-me active-sliver">
            <a href="">回复我的</a>
        </div>
        <div class="at-me active-sliver">
            <a href="">@我的</a>
        </div>
        <div class="up-me active-sliver">
            <a href="">收到的赞</a>
        </div>
        <div class="sys-message active-sliver">
            <a href="">系统通知</a>
        </div>
        <div class="my-message active-sliver">
            <a href="">我的消息</a>
        </div>
    </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
export default {
    name: "UserMessage",
    store,
    computed: {
        ...mapState({ loginState: "login" }),
    },
    mounted() {},
};
</script>

<style lang='less' scoped>
.user-notice {
    position: absolute;
    z-index: 999;
    min-width: 173px;
    width: 172px;
    height: 200px;
    background-color: #fff;
    padding: 10px 0;
    box-sizing: border-box;
    left: -72px;
    display: none;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;

    & > div {
        height: 36px;
        line-height: 36px;
        a {
            color: #212121 !important;
            margin-left: 20px;
        }
    }
}
</style>