<template>
    <div class="unlogin">
        <div class="content-msg">登录即可查看消息记录</div>
        <div class="login-btn" @click="login">立即登录</div>
    </div>
</template>

<script>
export default {
    name: "befLoginTip",
    methods: {
        login() {
            this.loginFire();
        },
    },
    props: ["loginFire"],
};
</script>

<style lang="less" scoped>
.unlogin {
    display: none;
    z-index: 9999;
    box-sizing: border-box;
    position: absolute;
    width: 360px;
    background: #fff;
    box-shadow: 0 3px 6px 0 #999;
    border-radius: 2px;
    position: relative;
    padding: 14px 16px;
    .content-msg {
        height: 40px;
        line-height: 40px;
        margin-bottom: 14px;
        font-size: 14px;
        color: #999;
        letter-spacing: 0;
        text-align: center;
    }
    .login-btn {
        background-color: #00aeec;
        position: relative;
        display: block;
        box-sizing: border-box;
        height: 40px;
        padding: 10px 0;
        line-height: 20px;
        font-size: 0;
        color: #fff;
        text-align: center;
        font-size: 16px !important ;
        border-radius: 2px;
        cursor: pointer;
    }
}
</style>