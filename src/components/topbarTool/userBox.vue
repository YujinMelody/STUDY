<template>
    <div class="abs-userdata" ref="userMore" v-show="loginState">
        <div class="user-data">
            <div class="user-name">{{ user.userinfo.username }}</div>
            <div class="vip-icon" v-if="user.userinfo.vip">
                <a href="#">年度大会员</a>
            </div>
            <div class="level-content">
                <div class="level-info">
                    <div class="level">等级{{ user.userinfo.level }}</div>
                    <div class="level-exp">38000/--</div>
                </div>
                <a href="#" class="level-link">
                    <div class="level-bar"></div>
                    <div class="full-bar"></div>
                </a>
            </div>
            <div class="coins">
                <div class="coins-left">
                    <div>
                        <i class="fa-solid fa-coins"></i
                        ><span>{{ user.userinfo.coin }}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-b"></i
                        ><span>{{ user.userinfo.bCoin }}</span>
                    </div>
                </div>
                <div class="coins-right">
                    <div>
                        <i class="fa-solid fa-envelope-open"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-mobile-screen"></i>
                    </div>
                </div>
            </div>
            <div class="separator-row"></div>
            <div class="counts">
                <a href="#">
                    <span class="key-title">关注</span>
                    <span class="value-content">{{
                        user.userinfo.follows.length
                    }}</span>
                </a>
                <a href="#">
                    <span class="key-title">粉丝</span>
                    <span class="value-content">{{
                        user.userinfo.fans.length
                    }}</span>
                </a>
                <a href="#">
                    <span class="key-title">动态</span>
                    <span class="value-content">{{
                        user.userinfo.myBlog.length
                    }}</span>
                </a>
            </div>
            <div class="separator"></div>
            <div class="links">
                <a href="#">
                    <div>
                        <img
                            src="@/assets/user-center.png"
                            alt=""
                            style="width: 24px"
                        />
                        <span>用户中心</span>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <img
                            src="@/assets/post-center.png"
                            alt=""
                            style="width: 24px"
                        />
                        <span>投稿中心</span>
                    </div>
                </a>
                <a class="recommendation-a" href="#">
                    <div class="recommendation">
                        <img
                            src="@/assets/recommendation.png"
                            alt=""
                            style="width: 24px"
                        />
                        <span>推荐服务</span>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </a>
                <div class="recommendation-detail">
                    <a href="#">B币钱包</a>
                    <a href="#">订单中心</a>
                    <a href="#">直播中心</a>
                    <a href="#">我的课程</a>
                </div>
            </div>
            <div class="separator"></div>
            <div class="g-language">
                <img
                    src="@/assets/muti-language.png"
                    alt=""
                    style="width: 24px; height: 24px"
                />
                <div>语言：简体中文</div>
                <i class="fa-solid fa-angle-right"></i>
                <div class="language-detail">
                    <div>
                        <a href="#">简体中文</a>
                        <a href="#">繁体中文</a>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
            <a href="#" class="login-out" @click="loginOut">
                <div>
                    <img
                        src="@/assets/load-out.png"
                        alt=""
                        style="width: 24px; height: 24px"
                    />
                    <span>退出</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
export default {
    name: "UserBox",
    store,
    data() {
        return {};
    },
    props: ["user"],
    methods: {
        loginOut() {
            localStorage.clear("token");
            this.$store.commit("outUser");
            this.$store.commit("changeLogin");
        },
    },
    computed: {
        ...mapState({ loginState: "login", account: "account" }),
    },
};
</script>

<style lang="less" scoped>
.abs-userdata {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
    top: 50px;
    left: -120px;
    width: 280px;
    background-color: #fff;
    border-radius: 2px;
    border: #eee 1px solid;
    display: flex;
    flex-direction: column;
    min-height: 449px;
    .user-data {
        .user-name {
            padding-top: 45px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            color: rgb(251, 114, 153);
            margin: 0 auto;
            line-height: 16px;
        }

        .vip-icon {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 4px;

            & > a {
                padding: 0;
                background-color: rgb(251, 114, 153);
                text-align: center;
                width: 66px;
                border-radius: 2px;
                font-size: 12px;
                line-height: 16px;
            }
        }

        .level-content {
            .level-info {
                display: flex;
                justify-content: space-between;
                margin: 0 20px;
                margin-top: 5px;
            }
        }

        .level-link {
            display: block;
            margin: 0 auto;
            height: 10px;
            width: 240px;
            position: relative;

            .level-bar {
                position: absolute;
                left: 0;
                top: 4px;
                margin: 0 auto;
                height: 2px;
                background-color: #f3cb85;
                width: 70%;
                z-index: 999;
            }

            .full-bar {
                position: absolute;
                left: 0;
                top: 4px;
                height: 2px;
                background-color: #3333;
                width: 100%;
                z-index: 998;
            }
        }

        .coins {
            display: flex;
            font-size: 16px;
            flex-direction: row;
            justify-content: space-between;
            padding: 14px 20px;

            .coins-right {
                display: flex;
                width: 50px;
                justify-content: space-between;

                & > div {
                    line-height: 20px;
                }
            }

            .coins-left {
                display: flex;

                & > div {
                    line-height: 20px;
                }
            }

            & i {
                font-size: 18px;
                color: #73c9e5;
            }

            & span {
                font-size: 16px;
                margin: 0 20px 0 8px;
            }
        }

        .counts {
            display: flex;
            height: 58px;
            align-items: center;

            & hr {
                color: #eee;
            }

            & > a {
                display: block;
                flex-grow: 1;
                color: #212121;
                display: flex;
                flex-direction: column;
                transition: color 0.3s;

                .key-title {
                    font-size: 14px;
                    color: #999;
                }

                .value-content {
                    font-size: 16px;
                    font-weight: bold;
                }

                & > span {
                    display: block;
                    text-align: center;
                }
            }

            & > a:hover .key-title,
            & > a:hover .value-content {
                color: #73c9e5;
                transition: color 0.3s;
            }
        }

        .links {
            position: relative;

            .recommendation-a:hover ~ .recommendation-detail,
            .recommendation-detail:hover {
                display: block;
            }

            .recommendation {
                & > i {
                    position: absolute;
                    right: 2%;
                }
            }

            .recommendation-detail {
                display: none;
                position: absolute;
                width: 131px;
                padding: 12px 0;
                box-sizing: border-box;
                top: 0px;
                left: 280px;
                z-index: 1000;
                border: #eee 1px solid;
                box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
                border-radius: 2px;

                & > a {
                    display: block;
                    // box-sizing: border-box;
                    height: 24px;
                    text-align: center;
                    padding: 8px 23px;
                    align-items: center;
                    color: #212121;
                    line-height: 24px;
                }

                & > a:hover {
                    background-color: #f4f4f4;
                }
            }

            & > a {
                display: block;
                color: #212121;
                padding: 8px 23px;
                box-sizing: border-box;

                & > div {
                    display: flex;
                    align-items: center;

                    & > img {
                        margin-right: 8px;
                    }

                    & > span {
                        font-size: 14px;
                    }
                }
            }

            & > a:hover {
                background-color: #f4f4f4;
            }
        }

        .g-language {
            position: relative;
            display: flex;
            align-items: center;
            padding: 8px 23px;
            font-size: 14px;
            line-height: 32px;
            box-sizing: border-box;

            & > a {
                font-size: 16px;
            }

            & > img {
                margin-right: 8px;
            }

            & > i {
                position: absolute;
                right: 2%;
            }

            .language-detail {
                display: none;
                position: absolute;
                left: 280px;
                width: 131px;
                border: #eee 1px solid;
                box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);

                & > div {
                    display: flex;
                    flex-direction: column;

                    & > a {
                        color: #505050;
                        padding: 8px 23px;
                        font-size: 14px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }
        }

        .g-language:hover {
            background-color: #f4f4f4;
        }

        .g-language:hover .language-detail {
            display: block;
        }

        .login-out {
            display: block;
            color: #212121;
            padding: 8px 23px;
            box-sizing: border-box;

            & > div {
                display: flex;
                align-items: center;

                & > img {
                    margin-right: 8px;
                }

                & > span {
                    font-size: 14px;
                }
            }
        }

        .login-out:hover {
            background-color: #f4f4f4;
        }
    }
}
.user-photo:hover .abs-userdata {
    opacity: 1;
    visibility: visible;
    z-index: 888;
    transition: transform 0.5s;
}
</style>