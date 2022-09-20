<template>
    <div class="unlogin-user">
        <div class="title">登录后你可以：</div>
        <div class="content">
            <div class="li">
                <div
                    class="icon"
                    style="
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/hd.png);
                    "
                ></div>
                <span>免费看高清视频</span>
            </div>
            <div class="li">
                <div
                    class="icon"
                    style="
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/time.png);
                    "
                ></div>
                <span class="lt-text">多端同步播放记录</span>
            </div>
            <div class="li">
                <div
                    class="icon"
                    style="
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/danmaku.png);
                    "
                ></div>
                <span class="lt-text">发表弹幕/评论</span>
            </div>
            <div class="li">
                <div
                    class="icon"
                    style="
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/video.png);
                    "
                ></div>
                <span class="lt-text">热门番剧影视看不停</span>
            </div>
        </div>
        <div class="login-btn" @click="loginFire()">立即登录</div>
        <div class="register-tip">
            首次使用？
            <span class="register" @click="loginFire()"> 点我注册 </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserLogin",
    props: ["loginFire"],
};
</script>

<style lang="less" scoped>
.unlogin-user {
    display: none;
    z-index: 9999;
    box-sizing: border-box;
    width: 360px;
    background: #fff;
    box-shadow: 0 3px 6px 0 #999;
    border-radius: 2px;
    position: relative;
    padding: 14px 16px;
    .title {
        line-height: 20px;
        font-size: 14px;
        color: #212121;
        letter-spacing: 0;
        margin-left: 4px;
        margin-bottom: 16px;
    }
    .content {
        margin-bottom: 6px;
        display: flex;
        flex-wrap: wrap;
        .li {
            display: flex;
            width: 162px;
            height: 26px;
            margin-bottom: 14px;
            align-items: center;
        }
        .icon {
            width: 26px;
            height: 26px;
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
        }
        & span {
            width: 162px;
            height: 26px;
            margin-bottom: 14px;
            align-items: center;
        }
    }
    .register {
        color: #00b5e5;
        cursor: pointer;
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