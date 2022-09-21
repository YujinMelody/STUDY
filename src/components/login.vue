<template>
    <div class="login-box" @click="hideForgetTip">
        <div class="login" style="">
            <div class="close-btn" @click="close"></div>
            <div class="content">
                <div class="scan">
                    <div class="scan-content">
                        <div class="scan-qrcode">
                            <p class="scan-title">扫描二维码登录</p>
                            <div
                                class="qrcode-box"
                                @mouseenter="showScanImg"
                                @mouseleave="closeScanImg"
                            >
                                <div class="qrcode" ref="qrcode">
                                    <div style="width: 160px; height: 160px">
                                        <div
                                            title="https://passport.bilibili.com/h5-app/passport/login/scan?navhide=1&amp;qrcode_key=4a1e697a866a28e279ae2642770d55fa&amp;from=main-mini"
                                        >
                                            <canvas
                                                width="160"
                                                height="160"
                                                style="display: none"
                                            ></canvas
                                            ><img
                                                alt="Scan me!"
                                                style="display: block"
                                                src="data:image/png;base64,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"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/qr-tips.51ff2bcf.png"
                                    class="scan-tip"
                                    ref="scanTip"
                                    style="display: none"
                                />
                            </div>
                        </div>
                        <div class="scan-description">
                            <p class="text">
                                请使用<a
                                    data-v-6ebf661c=""
                                    href="https://app.bilibili.com/"
                                    target="_blank"
                                    >哔哩哔哩客户端</a
                                >
                            </p>
                            <p class="text">扫码登录或扫码下载APP</p>
                        </div>
                    </div>
                </div>
                <div class="saparator"></div>
                <div class="login-part">
                    <div class="tab-btn" ref="tabBtn">
                        <span
                            @click="changeTab"
                            class="tabBtnActive"
                            :index="0"
                            ref="pwBtn"
                        >
                            密码登录
                        </span>
                        <span class="tab-line"></span>
                        <span @click="changeTab" :index="1" ref="mesBtn">
                            短信登录
                        </span>
                    </div>
                    <div class="input-box">
                        <div class="account-part" ref="accountPart">
                            <div class="account">
                                <span class="text">账号</span>
                                <input
                                    type="text"
                                    placeholder="请输入账号"
                                    v-model.lazy="account"
                                />
                            </div>
                            <div class="password">
                                <div class="left">
                                    <span class="text">密码</span>
                                    <input
                                        placeholder="请输入密码"
                                        type="password"
                                        v-model.lazy="pw"
                                    />
                                </div>
                                <div
                                    class="eye-btn"
                                    style="--thememini-color: #00a1d6"
                                >
                                    <!-- <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.5753 6.85456C17.7122 6.71896 17.8939 6.63806 18.0866 6.63806C18.7321 6.63806 19.0436 7.42626 18.5748 7.87006C18.1144 8.30554 17.457 8.69885 16.6478 9.03168L18.1457 10.5296C18.2101 10.5941 18.2613 10.6706 18.2962 10.7548C18.331 10.839 18.349 10.9293 18.349 11.0204C18.349 11.1116 18.331 11.2019 18.2962 11.2861C18.2613 11.3703 18.2101 11.4468 18.1457 11.5113C18.0812 11.5757 18.0047 11.6269 17.9205 11.6618C17.8363 11.6967 17.746 11.7146 17.6548 11.7146C17.5637 11.7146 17.4734 11.6967 17.3892 11.6618C17.305 11.6269 17.2284 11.5757 17.164 11.5113L15.3409 9.68819C15.2898 9.63708 15.247 9.57838 15.2141 9.51428C14.4874 9.71293 13.6876 9.87122 12.8344 9.98119C12.8363 9.99011 12.8381 9.99908 12.8397 10.0081L13.2874 12.5472C13.315 12.7266 13.2713 12.9098 13.1656 13.0573C13.0598 13.2049 12.9005 13.3052 12.7217 13.3367C12.5429 13.3683 12.3589 13.3285 12.2091 13.2259C12.0592 13.1234 11.9555 12.9663 11.9202 12.7882L11.4725 10.2491C11.4645 10.2039 11.4611 10.1581 11.4621 10.1125C10.9858 10.1428 10.4976 10.1586 10.0002 10.1586C9.57059 10.1586 9.14778 10.1468 8.73362 10.1241C8.73477 10.1656 8.7322 10.2074 8.72578 10.249L8.27808 12.7881C8.24612 12.9694 8.14345 13.1306 7.99265 13.2362C7.84186 13.3418 7.65528 13.3831 7.47398 13.3512C7.29268 13.3192 7.1315 13.2166 7.0259 13.0658C6.9203 12.915 6.87892 12.7284 6.91088 12.5471L7.35858 10.008C7.35877 10.007 7.35896 10.0061 7.35915 10.0052C6.50085 9.90284 5.6941 9.75191 4.95838 9.56025C4.93012 9.60634 4.89634 9.64933 4.85748 9.68819L3.03438 11.5113C2.96992 11.5757 2.8934 11.6269 2.80918 11.6618C2.72496 11.6967 2.63469 11.7146 2.54353 11.7146C2.45237 11.7146 2.36211 11.6967 2.27789 11.6618C2.19367 11.6269 2.11714 11.5757 2.05268 11.5113C1.98822 11.4468 1.93709 11.3703 1.90221 11.2861C1.86732 11.2019 1.84937 11.1116 1.84937 11.0204C1.84937 10.9293 1.86732 10.839 1.90221 10.7548C1.93709 10.6706 1.98822 10.5941 2.05268 10.5296L3.49373 9.08855C2.6197 8.744 1.91247 8.33062 1.42559 7.87006C0.956591 7.42636 1.26799 6.63816 1.91359 6.63816C2.10629 6.63816 2.28789 6.71896 2.42489 6.85456C2.70009 7.12696 3.19529 7.45886 3.98459 7.77796C5.54429 8.40856 7.73699 8.77016 10.0001 8.77016C12.2632 8.77016 14.4558 8.40856 16.0156 7.77796C16.8049 7.45886 17.3001 7.12696 17.5753 6.85456Z"
                                            fill="#9499A0"
                                        ></path>
                                    </svg> -->
                                </div>
                                <span class="forget" @click="showForgetTip">
                                    忘记密码？
                                </span>
                                <div
                                    class="forget-tip"
                                    style="display: none"
                                    ref="forgetTip"
                                    @blur="hideForgetTip"
                                >
                                    <img
                                        src="https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/arrow.fa71fe60.png"
                                        alt=""
                                        class="arrow"
                                    />
                                    <div class="forget-tip-line">
                                        <a
                                            class="title"
                                            href="https://passport.bilibili.com/register/findpassword.html#/verify"
                                            >发送短信快速登录</a
                                        >
                                        <p class="desc">
                                            未注册或绑定哔哩哔哩的手机号，将帮你注册新账号
                                        </p>
                                    </div>
                                    <div
                                        class="forget-tip-line"
                                        @click="toMessageLogin"
                                    >
                                        <p class="title">去找回密码</p>
                                        <p class="desc">
                                            通过绑定的手机号/邮箱重置密码
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="login-btn">
                                <div class="register-btn" @click="tabPage">
                                    注册
                                </div>
                                <div class="" @click="pwLogin">登录</div>
                            </div>
                        </div>
                        <div
                            class="message-part"
                            ref="messagePart"
                            style="display: none"
                        >
                            <div>
                                <div class="account">
                                    <div class="left">
                                        <div class="tel-head">
                                            <input
                                                type="text"
                                                readonly="readonly"
                                                placeholder="请选择"
                                            />
                                            <i
                                                class="fa-solid fa-angle-down"
                                            ></i>
                                        </div>
                                        <input
                                            placeholder="请输入手机号"
                                            class="tel-input"
                                            v-model.lazy="tele"
                                        />
                                    </div>
                                    <div class="right">
                                        <span class="line"></span>
                                        <span class="text" @click="getCheckNum"
                                            >获取验证码</span
                                        >
                                    </div>
                                </div>
                                <div class="checkCode">
                                    <span class="text">验证码</span
                                    ><input
                                        placeholder="请输入验证码"
                                        v-model="checkNum"
                                    />
                                </div>
                                <div class="login-btn">
                                    <div
                                        class="check-btn"
                                        @click="toMessageLogin"
                                    >
                                        登录/注册
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="third-party">
                        <div class="third-party-title">其他方式登录</div>
                        <div class="sns">
                            <span class="third-btn wechat">微信登录</span>
                            <span class="third-btn weibo">微博登录</span>
                            <span class="third-btn qq">QQ登录</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-rule">
                <div class="rule-content">
                    <p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
                    <p>
                        登录或完成注册即代表你同意
                        <a
                            target="_blank"
                            href="https://www.bilibili.com/protocal/licence.html"
                        >
                            用户协议 </a
                        >和
                        <a
                            target="_blank"
                            href="https://www.bilibili.com/blackboard/privacy-pc.html"
                        >
                            隐私政策
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/common";
import myAxios from "@/http/index";
import store from "@/store/index";
export default {
    name: "Login",
    store,
    data() {
        return {
            forgetTipState: 0,
            tele: null,
            loginState: 0,
            checkNum: null,
            account: null,
            pw: null,
        };
    },
    props: ["loginFire", "acceptUserInfo"],
    watch: {
        tele: {
            immediate: false,
            handler(newV, oldV) {
                typeof newV;
                let r = /^1(3|4|7|5|8)([0-9]{9})/;
                console.log(typeof newV, r.test(newV));
                if (!r.test(newV)) {
                    alert("请输入正确的电话号码");
                }
            },
        },
    },
    methods: {
        close() {
            this.loginFire();
        },
        showScanImg() {
            this.$refs.scanTip.style.display = "block";
            this.$refs.scanTip.style.transition = "opacity 0.8s";
            this.$refs.qrcode.style.transition = "opacity 0.8s";
            this.$refs.qrcode.style.display = "none";
            setTimeout(() => {
                this.$refs.qrcode.style.opacity = "0";
                this.$refs.scanTip.style.opacity = "1";
            }, 10);
        },
        closeScanImg() {
            this.$refs.scanTip.style.opacity = "0";
            this.$refs.qrcode.style.opacity = "1";
            setTimeout(() => {
                this.$refs.scanTip.style.display = "none";
                this.$refs.qrcode.style.display = "block";
            }, 810);
        },
        showForgetTip() {
            this.$refs.forgetTip.style.display = "block";
            this.forgetTipState = 1;
            //添加一个异步任务，来阻塞全局点击事件立即发生
            setTimeout(() => {
                this.forgetTipState = 0;
            }, 50);
        },
        hideForgetTip(target) {
            if (this.forgetTipState == 0)
                if (
                    target.target != this.$refs.forgetTip &&
                    this.$refs.forgetTip.style.display == "block"
                ) {
                    this.$refs.forgetTip.style.display = "none";
                }
        },
        changeTab(target) {
            let x = target.target.getAttribute("index");
            switch (x) {
                case "0":
                    common.addClass(this.$refs.pwBtn, "tabBtnActive");
                    common.removeClassName(this.$refs.mesBtn, "tabBtnActive");
                    this.$refs.messagePart.style.display = "none";
                    this.$refs.accountPart.style.display = "block";
                    break;
                case "1":
                    common.addClass(this.$refs.mesBtn, "tabBtnActive");
                    common.removeClassName(this.$refs.pwBtn, "tabBtnActive");
                    this.$refs.messagePart.style.display = "block";
                    this.$refs.accountPart.style.display = "none";
                    break;
            }
        },
        toMessageLogin() {
            let data = {
                phone: this.tele,
                checkNum: this.checkNum,
            };
            async function messageLogin(d) {
                try {
                    let x = await myAxios.post("/api/login/message", d);
                    setTimeout(() => {
                        if (x.data.msg) {
                            this.acceptUserInfo(x.data.userinfo);
                            localStorage.setItem(
                                "user",
                                x.data.userinfo.username
                            );
                            localStorage.setItem("token", x.data.token);
                            alert("登入成功");
                            this.$store.commit("changeLogin");
                            this.$store.commit({
                                type: "defineUser",
                                user: x.data.username,
                            });
                            this.loginFire();
                            this.acceptUserInfo(x.data.userinfo);
                        } else {
                            alert("验证码错误");
                        }
                    });
                } catch (err) {
                    alert(err);
                }
            }
            messageLogin.call(this, data);
        },
        getCheckNum() {
            let x = Math.floor(Math.random() * 10000);
            alert(x);
            console.log(this.tele);
            let d = {
                phone: this.tele,
                checkNum: x,
            };
            async function checkNum(data) {
                let pro = await myAxios.post("/api/login/checkNum", data);
                console.log(pro.data);
            }
            checkNum(d);
        },
        tabPage() {
            common.addClass(this.$refs.mesBtn, "tabBtnActive");
            common.removeClassName(this.$refs.pwBtn, "tabBtnActive");
            this.$refs.messagePart.style.display = "block";
            this.$refs.accountPart.style.display = "none";
        },
        pwLogin() {
            let data = {
                account: this.account,
                pw: this.pw,
            };
            async function login() {
                let x = await myAxios.post("/api/login/pw", data);
                return x;
            }
            login().then(
                (value) => {
                    if (value.data.state) {
                        localStorage.setItem(
                            "user",
                            value.data.userinfo.username
                        );
                        localStorage.setItem("token", value.data.token);
                        alert("登入成功");
                        this.$store.commit("changeLogin");
                        this.$store.commit({
                            type: "defineUser",
                            user: value.data.username,
                        });
                        this.loginFire();
                        this.acceptUserInfo(value.data.userinfo);
                    } else {
                        alert("密码错误");
                    }
                },
                (reason) => {
                    alert("登入失败！错误原因" + reason);
                }
            );
        },
    },
};
</script>

<style lang="less" scoped>
.clearfix::after,
.clearfix::before {
    content: "";
    display: table;
    clear: both;
}
.tabBtnActive {
    color: #4fa5d9;
}
.login-box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10010;
    display: flex;
    justify-content: center;
    align-items: center;

    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 820px;
        border-radius: 8px;
        box-shadow: 0 0 6px rgb(0 0 0 / 10%);
        padding: 52px 65px 29px 92px;
        box-sizing: border-box;
        background-color: #fff;
        background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/22_open.72c00877.png),
            url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/33_open.43a09438.png);
        background-position: 0 100%, 100% 100%;
        background-repeat: no-repeat, no-repeat;
        background-size: 14%;
        position: relative;
        flex-direction: column;
        user-select: none;
        .close-btn {
            position: absolute;
            width: 18px;
            height: 18px;
            top: 20px;
            right: 20px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEgSURBVHgB7ddLCsIwEAbgSXqRepReQnAjuBJPJK4EN4KX8Cj2Im1NSldhYubVjc2/0BLJ5AObTAtQU/Nncdjg7fH6xO9xGLrL6dCDYa73Z+ub5h2vz8f9Lv3do7Om+XOeGAuAPaZd1gASaByHLkzoLVEJpp/XQOJ+FvChgAsFIBRQ/H0YJlfLFQspURxMEaRFcTEkkBQlwZBBXJQUwwJRURoMG1RCaTEiUA4Vx7UYMQhDLcMqjAqEoECLifGgjctcG5RjJb2Bl2otKNuM/KZGGqVF75Nt+8xusuh9/IOxsLW1KF7rIJ4zGhS9uTIPPSmK9vghPIElqPIDmrIdcFFuTYwE5dbGcFFo67DGxMQa6dsMujY6ewKwxKCoCWpqtpEvwlafLd9Y4QQAAAAASUVORK5CYII=)
                no-repeat;
            background-size: cover;
            cursor: pointer;
        }
        .content {
            display: flex;
            .scan {
                margin-top: 42px;
                // position: relative;
                .scan-qrcode {
                    margin-bottom: 18px;
                    width: 173px;
                    height: 173px;
                    position: relative;
                    cursor: pointer;
                    .scan-title {
                        font-size: 18px;
                        line-height: 1;
                        text-align: center;
                        color: #212121;
                        position: absolute;
                        top: -44px;
                        width: 100%;
                    }
                    .qrcode-box {
                        position: relative;
                        .qrcode {
                            box-sizing: border-box;
                            width: 173px;
                            height: 173px;
                            padding: 6.5px;
                            border: 1px solid #e7e7e7;
                            border-radius: 8px;
                            opacity: 1;
                        }
                        .scan-tip {
                            position: absolute;
                            top: 0;
                            left: -78px;
                            width: 330px;
                            opacity: 0;
                        }
                    }
                }
                .scan-description {
                    margin-bottom: 16px;
                    .text {
                        font-size: 14px;
                        line-height: 1;
                        text-align: center;
                        color: #212121;
                        & a {
                            color: #00a1d6;
                            font-size: 14px;
                        }
                    }
                }
            }
            .saparator {
                display: block;
                width: 1px;
                flex: none;
                height: 228px;
                background-color: #e7e7e7;
                margin: 46px 45px 0;
                z-index: 1;
            }
            .login-part {
                width: 400px;
                .tab-btn {
                    color: #505050;
                    display: flex;
                    justify-content: center;
                    height: 20px;
                    & span {
                        font-size: 18px;
                        cursor: pointer;
                    }
                    .tab-line {
                        width: 1px;
                        height: 20px;
                        background-color: #e7e7e7;
                        margin: 0 21px;
                    }
                }
                .input-box {
                    .account-part {
                        width: 100%;
                        margin-top: 24px;
                        .account {
                            display: flex;
                            padding: 0 20px;
                            align-items: center;
                            border: 1px solid #e7e7e7;
                            border-radius: 8px 8px 0 0;
                            height: 43px;
                            border-bottom: none;
                            & span {
                                margin-right: 20px;
                                font-size: 14px;
                                color: #212121;
                            }
                            & input {
                                width: 230px;
                                outline: none;
                                border: none;
                                font-size: 14px;
                                color: #212121;
                                box-shadow: inset 0 0 0 20px #fff;
                            }
                        }
                        .password {
                            position: relative;
                            display: flex;
                            padding: 0 20px;
                            align-items: center;
                            justify-content: space-between;
                            border: 1px solid #e7e7e7;
                            border-radius: 0 0 8px 8px;
                            height: 43px;
                            .left {
                                span {
                                    margin-right: 20px;
                                    font-size: 14px;
                                    color: #212121;
                                }
                                input {
                                    position: relative;
                                    width: 210px;
                                    outline: none;
                                    border: none;
                                    font-size: 14px;
                                    color: #212121;
                                    box-shadow: inset 0 0 0 20px #fff;
                                }
                            }
                            .forget {
                                position: relative;
                                font-size: 13px;
                                color: #00a1d6;
                                cursor: pointer;
                            }
                        }
                    }
                    .message-part {
                        width: 100%;
                        margin-top: 24px;
                        .account {
                            display: flex;
                            padding: 0 20px;
                            align-items: center;
                            border: 1px solid #e7e7e7;
                            border-radius: 8px 8px 0 0;
                            height: 43px;
                            border-bottom: none;
                            .left {
                                display: flex;
                                & > input {
                                    width: 170px;
                                    outline: none;
                                    border: none;
                                    font-size: 14px;
                                    color: #212121;
                                }
                                .tel-head {
                                    display: flex;

                                    & input {
                                        width: 56px;
                                        border: none;
                                        outline: none;
                                        padding: 0;
                                        font-size: 14px;
                                        color: #212121;
                                    }
                                    & i {
                                        color: #c0c4cc;
                                        width: 14px;
                                        font-size: 14px;
                                        transition: transform 0.3s;
                                        cursor: pointer;
                                        line-height: 18px;
                                    }
                                }
                            }
                            .right {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .line {
                                    display: inline-block;
                                    width: 1px;
                                    height: 26px;
                                    background: #e7e7e7;
                                    margin-right: 24px;
                                }
                                .text {
                                    font-size: 14px;
                                    color: #00a1d6;
                                    cursor: pointer;
                                }
                            }
                        }
                        .checkCode {
                            display: flex;
                            padding: 0 20px;
                            align-items: center;
                            border: 1px solid #e7e7e7;
                            border-radius: 0 0 8px 8px;
                            height: 43px;
                            .text {
                                margin-right: 28px;
                                font-size: 14px;
                                color: #212121;
                            }
                            & input {
                                width: 170px;
                                outline: none;
                                border: none;
                                font-size: 14px;
                            }
                        }
                    }
                    .login-btn {
                        width: 100%;
                        display: flex;
                        margin-top: 20px;
                        justify-content: center;
                        & div:not(.register-btn) {
                            background-color: #00a1d6;
                            color: #fff;
                            box-sizing: border-box;
                            width: 194px;
                            height: 40px;
                            border-radius: 8px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 14px;
                            cursor: pointer;
                            transition: all 0.3s;
                        }
                        & div:not(.register-btn):hover {
                            background-color: #33b4de;
                            transition: all 0.3s;
                        }
                        .register-btn {
                            border: 1px solid #e7e7e7;
                            color: #000;
                            margin-right: 13px;
                            box-sizing: border-box;
                            width: 194px;
                            height: 40px;
                            border-radius: 8px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 14px;
                            cursor: pointer;
                            transition: all 0.3s;
                        }
                        .register-btn:hover {
                            color: #00a1d6;
                            border-color: #00a1d6;
                            transition: all 0.3s;
                        }
                    }
                }

                .third-party {
                    margin-top: 24px;
                    .third-party-title {
                        font-size: 13px;
                        line-height: 16px;
                        text-align: center;
                        color: #999;
                        margin-bottom: 12px;
                    }
                    .wechat::before {
                        display: inline-block;
                        content: "";
                        width: 28px;
                        height: 28px;
                        margin-right: 8px;
                        background: url(data:image/png;base64,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)
                            no-repeat;
                        background-size: cover;
                    }
                    .weibo::before {
                        display: inline-block;
                        content: "";
                        width: 28px;
                        height: 28px;
                        margin-right: 8px;
                        background: url(data:image/png;base64,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)
                            no-repeat;
                        background-size: cover;
                    }
                    .qq::before {
                        display: inline-block;
                        content: "";
                        width: 28px;
                        height: 28px;
                        margin-right: 8px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVwSURBVHgB1ZtBbBtFFIbfzG7cpk6EyaEpEqmS9AISIe4BUeCQROEAqCLtsUjQWuLecOSU5NB7egYpLUjtsU1VQYWo6l5QDz04VKJcSCyCBK1Q4xK7bZzdGd5be9N1sonXM6+J+0lOrPV6M/+8N29m3psIYGZ0binTBW5WOyIrQQwrAVnQkBEA/dH7NEBRgCiCgJLW6rbwdeF6ri8PzAhgoCbKGQXXPQtaZ/FSBswogRB5pdX8D1+8fgEYsBIYCHP3oyg1CeaiYsGGFRVA3verMzdyA0UwxEjgixQWi5DTnvfsoonQlgV+/P2fJxztzMFuCItAFvVBz7TquokFktW6nX1TGvQk7CEaxGzFX5vJ5wZKSe5PJPCjub/7XVddwadnoQ0ga6771bEkLttUIInrcNQtvSnM7zVJRe4osF3FhSQRua3AdhcX0kykjLtIAeVlEEdQGx03dYXaHPd5rMBatGx/cSECg18a2xz72eYLn3z31xlcQ84BMwfTDvR2OcH7SlXB4ooH3PjCP/nj54evRq81COQed0O9KTjW1wnjRw5AOtXYl5WqhjvLT+HSwio8rPjAAY3HVb96NDpHutEbXBdOa80j7st3XoGJN9Lbfk6CSTi95u+X4du7/4EtZJgu6dJCZDq8ttGtwWTuqCVgYPKDDIwPHmjpOzf/eAKzvyRanDSjVParA6EVN4KM46gpYODUcHfL4giy5Km3u4GBTN2KATLyZhQsoUDymUUjJ95Mo+tKsEbIs+G0ETyNIidHYCEr2EDiPt1h3LZAptPFDTjUBeK0MAEMfGgpkCArcuBozC5A6KKaxz0P1uc5G8iK9Cx7dJbcVB6fWx7FWGq9eR3sSQEXQ4f2AQNB8ktiZotlj8fT6zXSHSy5MAgye/hjBBjYvFKxexZDJIUgtgzjS7DkVmjp1W4oXIRLrXU/MDDY4wIXQ4d4xjOOv4wUDPMfjb9xhikiZKh3H4ub0tzO4uzvHe4EbpgmfGARyNWYKFwTvrVA2u9xTPCbIRd9t28/2CKpygMWjB/hd88QWyvSBlgKLF+BBccYenk7bIMNZuGLUiu9AIZQSuJFMz5o7iFai8dSKiiAIW/1sqwZt1BZf75oGOzpAGOEzuMY1MYCwz9+7X4FfsaUAxf3/lkLnknYuChVjaULXgGd1Wgc0vqTMmKXfl2FpUd8acA7y8/gm7uP4d6DNRuBJSqJy6uUnJHCyIrUy1//9G+Q57y5+IRlPUodRsKIc/mVIBllAmYHb9Pvevd458EA6umH5VpOk0ReRkvacu23csMzjQUKHSSAA4Gu5+dN3TQK5TcvL5iLpO/O/14BW9B6xbASHAgM3BSUkRWjpDsk9pzZ1oms9QDdk2XjLCD//G2dE5i/8GRqyTR9QRP+5PuvWm98Sei5/CMch1UwxcPEb1hO29jEkRWPX1xGK0qjBDCNGxov20U9angZX0QX3rPTfdF5sGW0ajh20libUN7sukydxuVbP7TI4so6LGJo30to7PnKuxC91tCNZEWh/K/gJQUj55ZDQ1v85HoO62vaPuDsOtjmuDM0sQMBXXUapw3jJdxuQ65ZpjbHECuQXNVT8iR9Edqc2rirjm13MKjpMRJHqlsmQWc3CMUZHSMJaVeRScQRTZfqN3Kv4YPkWDu5K7alkEQckWgvQiI7VPVoW0RXbEMloTii5XUVFUuFFlO77rK4GfCln9t8TKQZRgvH4MCC9M5gqZilrr8jwS5HncdpYDbpEcooVivjWgDyp/ExI+wWtRQWwlbzqp+QmgiqxaYFVRIldcFHYU9xj2ojLISvqBeBqsZUfMTi6ghmtjKYvuuP/bcCoUs4ngsK9AIliMqYH+IQFeV/78dq6lUddjAAAAAASUVORK5CYII=)
                            no-repeat;
                        background-size: cover;
                    }
                    .sns {
                        display: flex;
                        justify-content: center;
                        .third-btn {
                            margin-right: 30px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .user-rule {
            font-size: 13px;
            color: #999;
            margin-top: 40px;
            .rule-content {
                & p {
                    text-align: center;
                    line-height: 19px;
                }
            }
        }
        .forget-tip {
            box-sizing: border-box;
            width: 332px;
            height: 120px;
            display: none;
            position: absolute;
            top: 58px;
            left: 205px;
            box-shadow: 0 0 8px 1px rgb(0 0 0 / 21%);
            background: #fff;
            border-radius: 5px;
            & > img {
                position: absolute;
                width: 34px;
                left: 135px;
                top: -14px;
            }
            .forget-tip-line {
                padding: 11px 0 11px 18px;
                cursor: pointer;
                & .title {
                    font-size: 14px;
                    line-height: 18px;
                    color: #212121;
                }
                & .desc {
                    font-size: 12px;
                    color: #999;
                    line-height: 18px;
                }
            }
        }
    }
}
</style>